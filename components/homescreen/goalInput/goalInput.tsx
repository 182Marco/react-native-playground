import * as N from 'react-native';
import { S } from './goalInput.style';
import { IGoalInput } from './goalInput.models';
import * as Styles from '../../../styles';
import { texts } from '../texts';

const GoalInput: IGoalInput = p => (
  <N.View style={S.mainBox}>
    <N.View style={S.inputRow}>
      <N.TextInput
        style={S.input}
        placeholder={texts.inputPlaceHolder}
        placeholderTextColor={Styles.colors.textColor}
        value={p.goal}
        onChangeText={p.setGoal}
      />
      <N.Button title="add" onPress={() => p.addSetGoals(p.goal)} />
    </N.View>
    <N.Text style={S.sameStringEr}>{p.sameStringEr}</N.Text>
  </N.View>
);

export { GoalInput };
