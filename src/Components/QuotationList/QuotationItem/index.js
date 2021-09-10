import React from 'react'
import { View,
         Text,
         Image,
          } from 'react-native'

import styles from "./style"

export default function QuotationItems(props){
  return(
    <View style={styles.mainContainer}>
      <View style={styles.leftContent}>
        <View style={styles.boxLogo}>
          <Image
          source={require("../../../assets/Bitcoin-Emblem.png")}
          style={styles.bitcoinLogo}/>
          <Text style={styles.dayQuotation}>
            {props.data}
          </Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.price}>
          ${props.valor}
        </Text>
      </View>
    </View>
  )
}