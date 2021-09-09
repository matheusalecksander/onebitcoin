import React from 'react'
import { View,
         Text,
         TouchableOpacity,
         ScrollView } from 'react-native'

import styles from "./style"

export default function QuotationList(){
  return(
    <>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        >
          <Text style={styles.textButton}>
            7D
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        >
          <Text style={styles.textButton}>
            30D
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        >
          <Text style={styles.textButton}>
            3M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        >
          <Text style={styles.textButton}>
            6M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        >
          <Text style={styles.textButton}>
            1Y
          </Text>
        </TouchableOpacity>
      </View>


      <ScrollView>

      </ScrollView>
    </>
  )
}