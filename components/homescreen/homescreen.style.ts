import { StyleSheet } from 'react-native';
import * as GolbalS from '../../styles';

const S = StyleSheet.create({
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainBox: {
    flex: 1,
    backgroundColor: GolbalS.colors.background,
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 25,
  },
  clearText: {
    alignSelf: 'flex-end',
    color: GolbalS.colors.errorColor,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  goalsBox: {
    marginVertical: 16,
    flexGrow: 1,
    backgroundColor: GolbalS.colors.inputBackground,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: GolbalS.colors.goalBorderColor,
  },
});

export { S };
