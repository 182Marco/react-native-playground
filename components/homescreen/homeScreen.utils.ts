import { IIsSame, IGetGoalText, IIsPresent } from './homeScreen.models';
import * as U from '../../utils';

const getGoalText: IGetGoalText = goals => goals.map(g => g.text);

const isSame: IIsSame = (goalsStrAr, enteredText) =>
  goalsStrAr.find(g => U.compareTexts(g, enteredText));

const isPresent: IIsPresent = (goals, enteredText) =>
  isSame(getGoalText(goals), enteredText);

export { isPresent };
