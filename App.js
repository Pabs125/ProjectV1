import React, {useCallback, useRef, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/navigators/MainNavigators';
import BottomSheet,   {BotoomSheetView } from "@gorhom/bottom-sheet"

export default function App() {

  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["40%"];

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <MainNavigator />
        
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});