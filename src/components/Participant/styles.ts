import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,

    backgroundColor: '#1F1E25',
    borderRadius: 5,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
    backgroundColor: '#E23C44',

  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
});