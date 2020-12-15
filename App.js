import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Bar from './components/Bar';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View>
      <Bar text="Welcome" color="#D17B88" style={styles.container} />
      <Bar text="to my" color="#D999B9" />
      <Bar text="first" color="#B8B3E9" />
      <Bar text="React Native" color="#90E0F3" />
      <Bar text="Application!" color="#75F4F4" />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};