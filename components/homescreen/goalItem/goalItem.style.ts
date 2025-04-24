import * as N from 'react-native';
import * as GolbalS from '../../../styles';

const s = N.StyleSheet.create({
  goalItemWrap: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  goalLiBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: GolbalS.colors.goalBorderColor,
    borderBottomWidth: 1,
    flexGrow: 1,
    paddingLeft: 6,
  },
  goalLiBoxPressed: {
    borderColor: GolbalS.colors.goalBorderColor,
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  goalLi: {
    fontSize: 16,
    paddingVertical: 4,
    color: GolbalS.colors.goalTextColor,
    alignSelf: 'stretch',
  },
  textAndCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  squareForCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: GolbalS.colors.inputBorder,
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkSimbol: { color: 'green', fontSize: 10 },
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

const pressedGoalLi = { ...s.goalLiBoxPressed, ...s.goalLiBox };

export { s, pressedGoalLi };
