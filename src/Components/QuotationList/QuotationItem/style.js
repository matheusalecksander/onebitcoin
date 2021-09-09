import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    width: "95%",
    height: "auto",
    backgroundColor: "#c1c1c1",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  leftContent: {
    width: "50%",
    alignItems: "center"

  },
  rightContent: {
    width: "50%",
    alignItems: "center"

  },
  boxLogo: {
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  bitcoinLogo: {
    width: 24,
    height: 24
  },
  dayQuotation: {
    fontWeight: "bold",
    color: "#f50d41"
  },
  price: {
    fontWeight: "bold",
    color: "#f50d41"

  }
})

export default styles