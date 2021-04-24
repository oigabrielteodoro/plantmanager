import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';

import AppLoading from 'expo-app-loading';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

import { PlantProps } from './src/libs/storage';

import AppRouter from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plat as PlantProps;

        console.log(data);
      }
    )

    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="dark" />
      <AppRouter />
    </>
  );
}
