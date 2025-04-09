import * as N from 'react-native';

const styles = N.StyleSheet.create({
  mainBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalsBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sameStringEr: {
    color: '#f00',
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 16,
    minWidth: '80%',
    maxWidth: '80%',
  },
  btn: {
    borderWidth: 4,
    borderColor: 'red',
    padding: 10,
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'blue',
  },
  goalLi: {
    color: '#fff',
  },
});

export { styles };
