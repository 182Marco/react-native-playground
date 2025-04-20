import * as N from 'react-native';
import * as C from '../../components';
import { texts } from '../../texts';
import { S } from './homescreen.style';
import * as Gs from '../../styles';
import { useHomeScreen } from './homeScreen.hook';

const HomeScreen = () => {
  const h = useHomeScreen();
  return (
    <N.View style={S.mainBox}>
      <N.View style={S.clearTextBox}>
        <N.View style={S.btnBox}>
          <C.Btn
            text={texts.clearBtnText}
            BgColor="transparent"
            color={Gs.colors.errorColor}
            onPress={() => h.setGoals([])}
            paddingHorizontal="0"
            paddingVertical="0"
          />
        </N.View>
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
