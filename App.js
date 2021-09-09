import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView,Platform } from 'react-native'
import CurrentPrice from "./src/Components/CurrentPrice/"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#f50d41"
        barStyle="dark-content"
      />
      <CurrentPrice/>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
