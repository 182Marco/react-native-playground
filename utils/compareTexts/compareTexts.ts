import * as U from '../../utils';
import { ICompareTexts } from './comparetexts.models';

const compareTexts: ICompareTexts = (str1, str2) =>
  U.getNormalized(str1) === U.getNormalized(str2);

export { compareTexts };
