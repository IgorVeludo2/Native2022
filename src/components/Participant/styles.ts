import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 10
  },
  name: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#FFF'
  },
  button: {
    marginLeft: 12,
    backgroundColor: '#e23c44',
    width: 46,
    height: 46,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24
  }
});