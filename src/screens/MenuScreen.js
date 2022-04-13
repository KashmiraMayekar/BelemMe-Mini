import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MenuScreen = () => {
  return (
    <SafeAreaProvider>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Hello, world!</Text>
            </View>
        </SafeAreaProvider>
  )
}
export default MenuScreen;