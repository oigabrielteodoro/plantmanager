import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { PlantSave } from '../pages/PlantSave';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';

import colors from '../styles/colors';

import AuthRoutes from './tab.routes';

const Stack = createStackNavigator();

const StackRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        }
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="MyPlants" component={AuthRoutes} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="PlantSelect" component={AuthRoutes} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
    </Stack.Navigator>
  );
}

export default StackRouter;