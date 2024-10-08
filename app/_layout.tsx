import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SQLiteProvider } from 'expo-sqlite';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Brand } from '@/constants/Colors';

import { useColorScheme } from '@/hooks/useColorScheme';

// Database utility scripts, such as migrations and table creation.
import '@/db/migrations/createUserDeckTable';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Bagnard: require('../assets/fonts/Bagnard.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SQLiteProvider
      databaseName="dictionary.db"
      assetSource={{ assetId: require('../assets/dictionary.db') }}
    >
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="index" options={{
                headerShown: false,
                title: 'Word deck',
              }} />
              <Stack.Screen name="words" options={{
                title: 'Words',
                headerStyle: {
                  backgroundColor: Brand.kerrygold
                },
                headerTintColor: 'black',
              }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </SQLiteProvider>
  );
}
