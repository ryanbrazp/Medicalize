import {
    Inter_100Thin,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    useFonts,
  } from '@expo-google-fonts/inter';
  import { SplashScreen, Slot, useRouter } from 'expo-router';
  import { useEffect } from 'react';
  
  const InitialLayout = () => {
  
    const teste = true;
    const router = useRouter();
  
    useEffect(() => {
        router.replace("/home");
    }, [teste]);
  
    return <Slot />;
  };
  
  export default function RootLayout() {
  
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
  
    return <InitialLayout />;
  }
  