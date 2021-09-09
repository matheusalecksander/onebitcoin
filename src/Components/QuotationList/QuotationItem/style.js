import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    width: "95%",
    height: "auto",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  leftContent: {
    width: "50%",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#f50d41",
    padding: 7
  },
  rightContent: {
    width: "50%",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#f50d41",
    padding: 7
  },
  boxLogo: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  bitcoinLogo: {
    width: 24,
    height: 24
  },
  dayQuotation: {
    fontWeight: "bold",
    color: "#f50d41",
    fontSize: 18
  },
  price: {
    fontWeight: "bold",
    color: "#f50d41",
    fontSize: 18,
  }
})

export default styles