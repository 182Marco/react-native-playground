import * as R from 'react';
import { IAddSetGoals, IGoal, IHandleGoal } from './homeScreen.models';
import { isPresent } from './homeScreen.utils';
import { texts } from '../../texts';

const useHomeScreen = () => {
  const [isOpenModal, setIsOpenModal] = R.useState(false);
  const [goals, setGoals] = R.useState<IGoal[]>([]);
  const [goal, setGoal] = R.useState('');
  const [er, setEr] = R.useState('');

  class Goal implements IGoal {
    public text: string;
    public key: string;
    public isChecked: boolean;

    constructor(g: string) {
      this.text = g;
      this.key = g;
      this.isChecked = false;
    }
  }

  const addSetGoals: IAddSetGoals = () => {
    setGoal('');
    setGoals(pv => {
      if (goal === '') return setEr(texts.noStrEr()), pv;
      if (isPresent(pv, goal)) return setEr(texts.sameStrEr()), pv;
      er && setEr('');
      return [...pv, new Goal(goal)];
    });
  };

  const remove: IHandleGoal = goal =>
    setGoals(pv => pv.filter(e => e.key !== goal.key));

  const check: IHandleGoal = goal =>
    setGoals(pv =>
      pv.map(e => (e.key === goal.key ? { ...e, isChecked: !e.isChecked } : e))
    );

  return {
    addSetGoals,
    er,
    goals,
    goal,
    handleGoal: { remove, check },
    isOpenModal,
    setGoal,
    setGoals,
    setIsOpenModal,
  };
};

export { useHomeScreen };
