import * as N from 'react-native';
import * as C from '../../components';
import { S } from './homescreen.style';
import { useHomeScreen } from './homeScreen.hook';

const HomeScreen = () => {
  const h = useHomeScreen();
  return (
    <N.View style={S.mainBox}>
      <N.View style={S.clearTextContainer}>
        <N.Text style={S.clearText} onPress={() => h.setGoals([])}>
          Clear
        </N.Text>
        <C.GoalInput
          goal={h.goal}
          setGoal={h.setGoal}
          sameStringEr={h.er}
          addSetGoals={h.addSetGoals}
        />
        <N.FlatList
          data={h.goals}
          style={S.goalsBox}
          renderItem={g => <C.GoalItem goal={g.item} {...h.handleGoal} />}
          alwaysBounceVertical={false}
        />
      </N.View>
    </N.View>
  );
};

export { HomeScreen };
