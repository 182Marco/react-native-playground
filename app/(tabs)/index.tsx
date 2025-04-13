import * as N from 'react-native';
import { useHomeScreen } from './homeScreen.hook';
import { S } from './homeScreen.styles';

const HomeScreen = () => {
  const h = useHomeScreen();
  return (
    <N.View style={S.mainBox}>
      <N.View style={S.clearTextContainer}>
        <N.Text style={S.clearText} onPress={() => h.setGoals([])}>
          Clear
        </N.Text>
      </N.View>
      <N.View style={S.mainBox}>
        <N.TextInput
          style={S.input}
          placeholder="Your course goal"
          value={h.goal}
          onChangeText={h.setGoal}
        />
        <N.Text style={S.sameStringEr}>{h.sameStringEr}</N.Text>
        <N.Button title="Tap to add" onPress={() => h.addSetGoals(h.goal)} />
      </N.View>
      <N.View style={S.goalsBox}>
        {h.goals.map((g, i) => (
          <N.Text key={i} style={S.goalLi}>
            {g}
          </N.Text>
        ))}
      </N.View>
    </N.View>
  );
};

export default HomeScreen;
