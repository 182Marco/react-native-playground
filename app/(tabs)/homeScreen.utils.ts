import { IIsSame } from './homeScreen.models';
import * as U from '../../utils';

const isSame: IIsSame = (pv, enteredText) =>
  pv.find(e => U.compareTexts(e, enteredText));

export { isSame };
