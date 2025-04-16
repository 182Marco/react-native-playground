import * as N from 'react-native';
import { S } from './goalInput.style';
import { IGoalInput } from './goalInput.models';

const GoalInput: IGoalInput = p => (
  <N.View style={S.mainBox}>
    <N.TextInput
      style={S.input}
      placeholder="Your course goal"
      value={p.goal}
      onChangeText={p.setGoal}
    />
    <N.Text style={S.sameStringEr}>{p.sameStringEr}</N.Text>
    <N.KeyboardAvoidingView style={S.btnContainer}>
      <N.Button title="Tap to add" onPress={() => p.addSetGoals(p.goal)} />
    </N.KeyboardAvoidingView>
  </N.View>
);

export { GoalInput };
