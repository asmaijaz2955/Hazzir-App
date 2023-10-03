import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import MainStack, { DrawerHAZZIR } from "./src/navigation/MainStack";
import { SafeAreaView } from 'react-native';
import BottomTabStack from './src/navigation/BottomTabStack';
import MainDrawer from './src/navigation/MainDrawer';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <NavigationContainer>

        <DrawerHAZZIR />
        {/* <BottomTabStack /> */}
      </NavigationContainer>
    </SafeAreaView>

  )
}



