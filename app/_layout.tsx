import { SplashScreen, useRouter, Stack } from 'expo-router';
import {
    Inter_100Thin,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts,
  } from '@expo-google-fonts/inter';
import { useEffect } from "react";
import colors from '../constants/Colors';
import Feather from '@expo/vector-icons/Feather';

export default function Layout() {

    const [fontsLoaded, fontError] = useFonts({
        Inter_100Thin,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold
      });

      useEffect(() => {
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

    return(
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
            <Stack.Screen name='index' options={{
              title: "Medicalize",
              headerRight: () => (<Feather name="info" size={24} color="black" />)
            }} />
            <Stack.Screen name='camera' options={{
              headerShown: false
            }} />
            <Stack.Screen name='interaction' options={{
              title: "Interação",
              headerTintColor: colors.black
            }} />
            
        </Stack>
    );
}