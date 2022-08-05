import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  eventEmpty: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    width: "100%",
    flexDirection: 'row',
    marginVertical: 20,

  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    marginRight: 12,

    backgroundColor: '#1F1E25',
    borderRadius: 5,
    fontSize: 16,
    color: "#FDFCFE",
  },
  button: {
    width: 56,
    height: 56,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
    backgroundColor: '#31CF67',

  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
});