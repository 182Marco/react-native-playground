import { IGoal, IHandleGoal } from '../homeScreen.models';

interface IGoalItemProps {
  goal: IGoal;
  remove: IHandleGoal;
  check: IHandleGoal;
}

type IGoalItem = React.FC<IGoalItemProps>;

export { IGoalItem };
