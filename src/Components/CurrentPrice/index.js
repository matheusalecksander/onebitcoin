import React from 'react'
import { View, Text } from 'react-native'

import styles from "./style"

export default function CurrentPrice(){
  return(
    <View style={styles.headerPrice}>
      <Text style={styles.textPrice}>
        Última cotação
      </Text>
      
      <Text style={styles.currentPrice}>
        $54423.35
      </Text>

    </View>
  )
}