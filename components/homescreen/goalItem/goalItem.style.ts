import * as N from 'react-native';
import * as GolbalS from '../../../styles';

const S = N.StyleSheet.create({
  checkText: {
    color: GolbalS.colors.checked,
    width: 20,
  },
  goalLiBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: GolbalS.colors.goalBorderColor,
    borderBottomWidth: 1,
    flexGrow: 1,
  },
  goalLi: {
    fontSize: 16,
    paddingVertical: 6,
    color: GolbalS.colors.goalTextColor,
    alignSelf: 'stretch',
  },
  textAndCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  xBox: {
    height: '100%',
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    color: GolbalS.colors.goalTextColor,
  },
});

export { S };
