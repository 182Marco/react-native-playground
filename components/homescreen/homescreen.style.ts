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
    padding: 16,
  },
  clearTextBox: {
    marginTop: 10,
    flex: 1,
    backgroundColor: GolbalS.colors.panel,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  clearText: {
    alignSelf: 'flex-end',
    color: GolbalS.colors.errorColor,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  goalsBox: {
    marginTop: 16,
    flexGrow: 1,
    backgroundColor: GolbalS.colors.inputBackground,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: GolbalS.colors.goalBorderColor,
  },
});

export { S };
