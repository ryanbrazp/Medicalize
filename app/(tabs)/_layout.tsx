import { Link, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
            headerTintColor: 'black'
        }}
      >
        <Tabs.Screen name='home' 
          options={{
            headerTitle: 'Home',
            tabBarIcon: ({color, size}) => (
              <Feather name="clock" size={size} color={color} />
            ),
            headerRight: () => (
                <Link href="/medicine" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={"#FF0000"}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            tabBarLabel: "Home"
          }}
        />
        <Tabs.Screen name='photo' 
          options={{
            headerTitle: 'Tirar Foto',
            tabBarIcon: ({color, size}) => (
              <Feather name="camera" size={size} color={color} />
            ),
            tabBarLabel: "Foto"
          }}
        />
        <Tabs.Screen name='interaction' 
          options={{
            headerTitle: 'Tirar Foto',
            tabBarIcon: ({color, size}) => (
                <Feather name="slack" size={size} color={color} />
            ),
            tabBarLabel: "interaction"
          }}
        />
      </Tabs>
    )
}