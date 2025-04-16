import * as R from 'react';
import { IAddSetGoals, IGoal } from './homeScreen.models';
import { isSame } from './homeScreen.utils';
import * as N from 'react-native';

const useHomeScreen = () => {
  const sameStringWarn = 'You entered the same string! You moron!';
  const [goals, setGoals] = R.useState<IGoal[]>([]);
  const [goal, setGoal] = R.useState('');
  const [sameStringEr, setSameStringEr] = R.useState('');
  const [keyboardVisible, setKeyboardVisible] = R.useState(false);

  R.useEffect(() => {
    const showSub = N.Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSub = N.Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const addSetGoals: IAddSetGoals = () => {
    setGoal('');
    setGoals(pv => {
      if (
        isSame(
          pv.map(obj => obj.text),
          goal
        )
      ) {
        setSameStringEr(sameStringWarn);
        return pv;
      }
      sameStringEr === '' ? null : setSameStringEr('');
      return [...pv, { text: goal, key: goal }];
    });
  };

  return {
    goal,
    setGoal,
    goals,
    addSetGoals,
    sameStringEr,
    setGoals,
    keyboardVisible,
  };
};

export { useHomeScreen };
