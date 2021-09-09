import React from 'react'
import { StyleSheet, StatusBar, SafeAreaView,Platform } from 'react-native'
import CurrentPrice from "./src/Components/CurrentPrice/"
import HistoryGraphic from './src/Components/HistoryGraphic';
import QuotationList from './src/Components/QuotationList/'
import QuotationItems from './src/Components/QuotationList/QuotationItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#f50d41"
        barStyle="dark-content"
      />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList/>
      <QuotationItems/>
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
