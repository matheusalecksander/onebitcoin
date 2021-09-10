import React from 'react'
import { View,
         Text,
         TouchableOpacity,
         ScrollView,
         FlatList } from 'react-native'

import QuotationItems from './QuotationItem/'

import styles from "./style"

export default function QuotationList(props){
  const daysQuery = props.filterDay

  return(
    <>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        onPress={() => daysQuery(7)}
        >
          <Text style={styles.textButton}>
            7D
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        onPress={() => daysQuery(30)}
        >
          <Text style={styles.textButton}>
            30D
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        onPress={() => daysQuery(90)}
        >
          <Text style={styles.textButton}>
            3M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        onPress={() => daysQuery(180)}
        >
          <Text style={styles.textButton}>
            6M
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonQuery}
        activeOpacity={0.65}
        onPress={() => daysQuery(365)}
        >
          <Text style={styles.textButton}>
            1Y
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
        data={props.listTransactions}
        renderItem={({item}) => {
            return <QuotationItems valor={item.valor.toFixed(2)}
            data={item.data} />
        }}
        />
      </ScrollView>
    </>
  )
}