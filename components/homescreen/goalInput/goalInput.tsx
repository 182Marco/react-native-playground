import * as N from 'react-native';
import * as C from '../../../components';
import * as Gs from '../../../styles';
import * as Styles from '../../../styles';
import { texts } from '../../../texts';
import { IGoalInput } from './goalInput.models';
import { S } from './goalInput.style';

const GoalInput: IGoalInput = p => (
  <N.Modal visible={p.isOpenModal} animationType="slide">
    <N.View style={S.modalBox}>
      <N.Image
        style={S.img}
        source={require('../../../assets/images/check2.png')}
      />
      <N.TextInput
        style={S.input}
        placeholder={texts.inputPlaceHolder}
        placeholderTextColor={Styles.colors.textColor}
        value={p.goal}
        onChangeText={p.setGoal}
      />
      <N.View style={S.inputRow}>
        <C.Btn
          text={texts.inputGoalBtnText}
          onPress={() => p.addSetGoals(p.goal)}
        />
        <C.Btn
          text={texts.goBackToListBtnText}
          onPress={() => {
            p.setIsOpenModal(false);
            p.setEr('');
          }}
          BgColor="transparent"
          color={Gs.colors.errorColor}
          paddingHorizontal="0"
          paddingVertical="0"
        />
      </N.View>
      <N.Text style={S.sameStringEr}>{p.sameStringEr}</N.Text>
    </N.View>
  </N.Modal>
);

export { GoalInput };
