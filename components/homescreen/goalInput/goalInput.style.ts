import { StyleSheet } from 'react-native';
import * as GolbalS from '../../../styles';

const S = StyleSheet.create({
  mainBox: {
    width: '100%',
    padding: 16,
    backgroundColor: GolbalS.colors.panel,
    borderRadius: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
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
