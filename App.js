import React, { useState, useEffect} from 'react'
import { StyleSheet, StatusBar, SafeAreaView,Platform } from 'react-native'
import CurrentPrice from "./src/Components/CurrentPrice/"
import HistoryGraphic from './src/Components/HistoryGraphic';
import QuotationList from './src/Components/QuotationList/'


function addZero(number){
  /* Função para tratar o formato do número, para números
  menores que 10 precisamos adicionar um 0 antes do número */
  if(number <= 9){
    return "0" + number
  }
  else{
    return number
  }
}

function url(qtdDays) {
  /* Função para formatar o link da API conforme os dados passados
  pelo usuário ao clicar nos botões de período */
  const date = new Date()
  const listLastDays = qtdDays
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+ 1)}-${addZero(date.getDate())}`
  
  date.setDate(date.getDate() - listLastDays)

  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+ 1)}-${addZero(date.getDate())}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

async function getListCoins(url) {
  /* Função para chamada da API */
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi // Aqui selecionamos apenas a chave bpi do JSON retornado pela API
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    /* Aqui fazemos um map nos dados e tratamos o formato da data para ficar padrão com o nosso */
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  })

  let data = queryCoinsList.reverse()

  return data
}

async function getPriceCoinsGraphic(url) {
  /* Função para chamada da API */
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let selectListQuotationsG = returnApiG.bpi // Aqui selecionamos apenas a chave bpi do JSON retornado pela API
  const queryCoinsListG = Object.keys(selectListQuotationsG).map((key) => {
    /* Aqui fazemos um map nos dados e pegamos apenas o valor para inserir no gráfico */
     return selectListQuotationsG[key]
    }
  )

  let dataG = queryCoinsListG

  return dataG
}

export default function App() {
  const [coinsList, setCoinsList] = useState([])
  const [coinsGrapichList, setCoinsGraphicList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateDate, setUpdateDate] = useState(true)

  function updateDay(number) {
    setDays(number)
    setUpdateDate(true)
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data)
    })

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG)
    })
    if(updateDate){
      setUpdateDate(false)
    }
  }, [updateDate])



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#f50d41"
        barStyle="dark-content"
      />
      <CurrentPrice/>
      <HistoryGraphic
        infoDataGraphic={coinsGrapichList}
      />
      <QuotationList
        filterDay={updateDay}
        listTransactions={coinsList}/>
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
