import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { format } from 'date-fns';

export interface PlantProps {
  id: number;
  name: string;
  photo: string;
  about: string;
  environments: string[];
  water_tips: string;
  dateTimeNotification: Date;
  frequency: {
    times: number;
    repeat_every: string;
  }
} 

export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
    notificationId: string;
  }
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = plant.frequency;

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times);

      nextTime.setDate(now.getDate() + interval);
    } else {
      nextTime.setDate(nextTime.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 100)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey, 🌱',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      }
    })

    const storagedPlants = await AsyncStorage.getItem('@plantmanager:plants');

    const parsedPlants = storagedPlants ? (JSON.parse(storagedPlants) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId,
      },
    };

    await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({
      ...newPlant,
      ...parsedPlants,
    }));
  } catch (error) {
    throw new Error(error);
  }
}

export async function removePlant(id: string): Promise<void> {
  try {
    const storagedPlants = await AsyncStorage.getItem('@plantmanager:plants');

    const parsedPlants = storagedPlants ? (JSON.parse(storagedPlants) as StoragePlantProps) : {};

    await Notifications.cancelScheduledNotificationAsync(parsedPlants[id].notificationId);

    delete parsedPlants[id];

    await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(parsedPlants));
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadPlant(): Promise<PlantProps[]> {
  try {
    const storagedPlants = await AsyncStorage.getItem('@plantmanager:plants');

    const plants = storagedPlants ? (JSON.parse(storagedPlants) as StoragePlantProps) : {};

    const plantsSorted = Object
      .keys(plants)
      .map((plant) => {
        return {
          ...plants[plant].data,
          hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
        }
      }).sort((a, b) => 
        Math.floor(
            new Date(a.dateTimeNotification).getTime() / 1000 - 
            Math.floor(new Date(b.dateTimeNotification).getTime() / 1000))
      )

    return plantsSorted;  
  } catch (error) {
    throw new Error(error);
  }
}