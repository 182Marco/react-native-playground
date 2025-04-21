import * as N from 'react-native';
import * as C from '../../../components';
import { S } from './goalInput.style';
import * as Styles from '../../../styles';
import { texts } from '../../../texts';
import { IGoalInput } from './goalInput.models';

const GoalInput: IGoalInput = p => (
  <N.View style={S.mainBox}>
    <N.Modal visible={p.isOpenModal} animationType="slide">
      <N.View style={S.inputRow}>
        <N.TextInput
          style={S.input}
          placeholder={texts.inputPlaceHolder}
          placeholderTextColor={Styles.colors.textColor}
          value={p.goal}
          onChangeText={p.setGoal}
        />
        <C.Btn
          text={texts.inputGoalBtnText}
          onPress={() => {
            p.addSetGoals(p.goal);
            p.setIsOpenModal(false);
          }}
        />
        <C.Btn
          text={texts.goBackToListBtnText}
          onPress={() => p.setIsOpenModal(false)}
        />
      </N.View>
      <N.Text style={S.sameStringEr}>{p.sameStringEr}</N.Text>
    </N.Modal>
  </N.View>
);

export { GoalInput };
