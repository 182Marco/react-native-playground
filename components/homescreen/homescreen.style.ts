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
  clearTextContainer: {
    backgroundColor: GolbalS.colors.errorColor,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 16,
  },
  clearText: {
    color: GolbalS.colors.textColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goalsBox: {
    marginTop: 30,
    width: '100%',
    padding: 16,
    backgroundColor: GolbalS.colors.panel,
    borderRadius: 12,
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
  btn: {
    backgroundColor: GolbalS.colors.buttonColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  goalsBoxTextContainer: {
    marginTop: 20,
  },
  goalLi: {
    fontSize: 16,
    paddingVertical: 6,
    color: GolbalS.colors.goalTextColor,
    borderBottomColor: GolbalS.colors.goalBorderColor,
    borderBottomWidth: 1,
  },
});

export { S };
