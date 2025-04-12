import * as U from '../../utils';
import { ICompareTexts } from './comparetexts.models';

const compareTexts: ICompareTexts = (...str) =>
  str.every((s, i, a) => U.getNormalized(s) === U.getNormalized(a[0]));

export { compareTexts };
