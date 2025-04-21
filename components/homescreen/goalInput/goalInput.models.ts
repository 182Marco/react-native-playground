import { IGoal } from '../homeScreen.models';

interface IGoalInputProps {
  goal: string;
  sameStringEr: string;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addSetGoals: (goal: string) => void;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
  setGoals: React.Dispatch<React.SetStateAction<IGoal[]>>;
}
type IGoalInput = React.FC<IGoalInputProps>;

export { IGoalInput };
