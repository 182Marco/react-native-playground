import * as N from 'react-native';
import { S } from './goalItem.style';
import { IGoalItem } from './goalItem.models';

const GoalItem: IGoalItem = p => (
  <N.Pressable onPress={() => p.check(p.goal)}>
    <N.View style={S.goalLiBox}>
      <N.View style={S.textAndCheckBox}>
        <N.Text style={S.checkText}>{p.goal.isChecked ? '✓' : '-'}</N.Text>
        <N.Text style={S.goalLi}>{p.goal.text}</N.Text>
      </N.View>
      <N.Pressable onPress={() => p.remove(p.goal)}>
        <N.Text style={S.x}>X</N.Text>
      </N.Pressable>
    </N.View>
  </N.Pressable>
);

export { GoalItem };
