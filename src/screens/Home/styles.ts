import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1, 
    color: '#fdfcfe',
    backgroundColor: '#1f1e25',
    borderRadius: 5 ,
    fontSize: 16,
    padding: 16,
  },
  plusButton: {
    marginLeft: 12,
    backgroundColor: '#31cf67',
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24
  },
  content: {
    marginTop: 40,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42
  }
  });