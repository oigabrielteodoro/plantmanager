import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { PlantSave } from '../pages/PlantSave';
import { PlantSelect } from '../pages/PlantSelect';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';

import colors from '../styles/colors';

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
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="PlantSelect" component={PlantSelect} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
    </Stack.Navigator>
  );
}

export default StackRouter;