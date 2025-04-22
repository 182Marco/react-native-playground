import * as N from 'react-native';
import * as C from '../../components';
import * as Gs from '../../styles';
import { texts } from '../../texts';
import { S } from './homescreen.style';
import { useHomeScreen } from './homeScreen.hook';

const HomeScreen = () => {
  const h = useHomeScreen();
  return (
    <N.View style={S.mainBox}>
      <N.View style={S.btnBox}>
        <C.Btn
          text={texts.openModalBtnText}
          onPress={() => h.setIsOpenModal(true)}
        />
      </N.View>
      <C.GoalInput
        isOpenModal={h.isOpenModal}
        setIsOpenModal={h.setIsOpenModal}
        setEr={h.setEr}
        goal={h.goal}
        setGoal={h.setGoal}
        setGoals={h.setGoals}
        sameStringEr={h.er}
        addSetGoals={h.addSetGoals}
      />
      <N.FlatList
        data={h.goals}
        style={S.goalsBox}
        renderItem={g => <C.GoalItem goal={g.item} {...h.handleGoal} />}
        alwaysBounceVertical={false}
      />
      <N.View style={S.btnBox}>
        <C.Btn
          text={texts.clearBtnText}
          onPress={() => h.setGoals([])}
          BgColor="transparent"
          color={Gs.colors.errorColor}
          paddingHorizontal="0"
          paddingVertical="0"
        />
      </N.View>
    </N.View>
  );
};

export { HomeScreen };
