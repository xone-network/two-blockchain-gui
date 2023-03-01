import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import greenBTCFormatter from './greenBTCFormatter';

export default function greenBTCToMojo(two: string | number | BigNumber): BigNumber {
  return greenBTCFormatter(two, Unit.TWO)
    .to(Unit.MOJO)
    .toBigNumber();
}
