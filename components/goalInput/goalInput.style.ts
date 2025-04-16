import * as N from 'react-native';
import * as GolbalS from '../../styles';

const S = N.StyleSheet.create({
  mainBox: {
    flex: 1,
    padding: 24,
    backgroundColor: GolbalS.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flex: 4,
  },
  input: {
    width: 310,
    padding: 16,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: GolbalS.colors.inputBackground,
    color: GolbalS.colors.textColor,
    borderWidth: 1,
    borderColor: GolbalS.colors.inputBorder,
    marginBottom: 12,
  },
  sameStringEr: {
    color: GolbalS.colors.errorColor,
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
  },
});

export { S };
