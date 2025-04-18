interface IGoalInputProps {
  goal: string;
  sameStringEr: string;
  addSetGoals: (goal: string) => void;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
}
type IGoalInput = React.FC<IGoalInputProps>;

export { IGoalInput };
