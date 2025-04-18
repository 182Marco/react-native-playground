import * as N from 'react-native';
import * as GS from '../../../styles';
import { s, pressedGoalLi } from './goalItem.style';
import { IGoalItem } from './goalItem.models';

const GoalItem: IGoalItem = p => (
  <N.Pressable
    style={p => (p.pressed ? pressedGoalLi : s.goalLiBox)}
    {...GS.android_ripple}
    onPress={() => p.check(p.goal)}
  >
    <N.View style={s.textAndCheckBox}>
      <N.Text style={s.checkText}>{p.goal.isChecked ? '✓' : '-'}</N.Text>
      <N.Text style={s.goalLi}>{p.goal.text}</N.Text>
    </N.View>
    <N.Pressable onPress={() => p.remove(p.goal)}>
      <N.View style={s.xBox}>
        <N.Text style={s.x}>X</N.Text>
      </N.View>
    </N.Pressable>
  </N.Pressable>
);

export { GoalItem };
