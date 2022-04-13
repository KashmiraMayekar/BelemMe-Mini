import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabScreen from './src/screens/BottomTabScreen';
import { LogBox } from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs();
  }, [])

  return (
    <NavigationContainer>
      <BottomTabScreen />
    </NavigationContainer>
  );
}

export default App;