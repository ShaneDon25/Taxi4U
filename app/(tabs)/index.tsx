import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView} from "react-native-safe-area-context";


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-amber-200">
        <Text>Hello World</Text>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}
