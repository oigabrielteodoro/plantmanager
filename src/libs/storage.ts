import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantProps {
  id: number;
  name: string;
  photo: string;
  about: string;
  environments: string[];
  water_tips: string;
  dateTimeNotification: Date;
} 

export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  }
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const storagedPlants = await AsyncStorage.getItem('@plantmanager:plants');

    const parsedPlants = storagedPlants ? (JSON.parse(storagedPlants) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
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