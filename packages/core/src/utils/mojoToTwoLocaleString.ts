import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import greenBTCFormatter from './greenBTCFormatter';

export default function mojoToTwoLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return greenBTCFormatter(mojo, Unit.MOJO)
    .to(Unit.TWO)
    .toLocaleString(locale);
}
