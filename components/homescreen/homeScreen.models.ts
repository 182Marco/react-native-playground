interface IGoal {
  text: string;
  key: string;
  isChecked: boolean;
}

type IAddSetGoals = (goal: string) => void;
type IIsSame = (strAr: string[], str2: string) => string | undefined;
type IIsPresent = (goals: IGoal[], enteredText: string) => string | undefined;
type IHandleGoal = (goal: IGoal) => void;
type IGetGoalText = (goals: IGoal[]) => string[];

export { IAddSetGoals, IIsSame, IGoal, IHandleGoal, IGetGoalText, IIsPresent };
