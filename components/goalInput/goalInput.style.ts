import { StyleSheet } from 'react-native';
import * as GolbalS from '../../styles';

const S = StyleSheet.create({
  modalBox: {
    flex: 1,
    backgroundColor: GolbalS.colors.panel,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  img: {
    borderColor: 'red',
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 15,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: GolbalS.colors.inputBackground,
    borderColor: GolbalS.colors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: GolbalS.colors.textColor,
    marginRight: 8,
  },
  sameStringEr: {
    color: GolbalS.colors.errorColor,
    marginTop: 8,
    fontSize: 14,
  },
});

export { S };
