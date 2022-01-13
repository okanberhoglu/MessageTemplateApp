import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 5,
    borderWidth: 1,
    padding: 5,
  },
  data: {
    fontSize: 17,
    flex: 1,
  },
  dataTitle: {
    fontSize: 17,
    flex: 1,
    fontWeight: "bold",
    color: "black"
  },
  datad: {
    fontSize: 17,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    width: 150,
    borderRadius: 20,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
  deleteContainer: {
    alignItems: "center",
  },
});
