import { IGetNormalized } from './normalizeText.models';

const getNormalized: IGetNormalized = text => text?.toLowerCase().trim();

export { getNormalized };
