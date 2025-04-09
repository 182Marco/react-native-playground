import * as N from 'react-native';
import { useHomeScreen } from './homeScreen.hook';
import { styles } from './homeScreen.styles';

const HomeScreen = () => {
  const h = useHomeScreen();
  return (
    <N.View style={styles.mainBox}>
      <N.View style={styles.mainBox}>
        <N.TextInput
          style={styles.input}
          placeholder="Your course goal"
          value={h.goal}
          onChangeText={h.setGoal}
        />
        <N.Text style={styles.sameStringEr}>{h.sameStringEr}</N.Text>
        <N.Button title="Tap to add" onPress={() => h.addSetGoals(h.goal)} />
      </N.View>
      <N.View style={styles.goalsBox}>
        {h.goals.map((g, i) => (
          <N.Text key={i} style={styles.goalLi}>
            {g}
          </N.Text>
        ))}
      </N.View>
    </N.View>
  );
};

export default HomeScreen;
