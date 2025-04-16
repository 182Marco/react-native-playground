import * as N from 'react-native';
import * as GolbalS from '../../styles';

const S = N.StyleSheet.create({
  goalLi: {
    fontSize: 16,
    paddingVertical: 6,
    color: GolbalS.colors.goalTextColor,
    borderBottomColor: GolbalS.colors.goalBorderColor,
    borderBottomWidth: 1,
  },
});

export { S };
