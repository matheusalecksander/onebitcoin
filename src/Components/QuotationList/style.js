import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  buttonsContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "center",
    paddingVertical: 15
  },
  buttonQuery: {
    width: 70,
    height: 50,
    borderBottomColor: "#f50d41",
    borderBottomWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#f50d41",
    fontWeight: "bold"
  }
})

export default styles
