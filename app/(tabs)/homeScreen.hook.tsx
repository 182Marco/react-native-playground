import { useState } from 'react';
import { IAddSetGoals } from './homeScreen.models';
import { isSame } from './homeScreen.utils';

const useHomeScreen = () => {
  const sameStringWarn = 'You entered the same string! You moron!';
  const [goals, setGoals] = useState<string[]>([]);
  const [goal, setGoal] = useState('');
  const [sameStringEr, setSameStringEr] = useState('');

  const addSetGoals: IAddSetGoals = enteredText => {
    setGoal('');
    setGoals(pv => {
      if (isSame(pv, enteredText)) {
        setSameStringEr(sameStringWarn);
        return pv;
      }
      sameStringEr === '' ? null : setSameStringEr('');
      return [...pv, goal];
    });
  };

  return { goal, setGoal, goals, addSetGoals, sameStringEr, setGoals };
};

export { useHomeScreen };
