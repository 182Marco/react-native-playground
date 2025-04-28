import { IGoal } from '../homescreen/homeScreen.models';

interface IGoalInputProps {
  goal: string;
  sameStringEr: string;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addSetGoals: (goal: string) => void;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
  setGoals: React.Dispatch<React.SetStateAction<IGoal[]>>;
  setEr: (er: string) => void;
}
type IGoalInput = React.FC<IGoalInputProps>;

export { IGoalInput };
