import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import greenBTCFormatter from './greenBTCFormatter';

export default function mojoToTwo(mojo: string | number | BigNumber): BigNumber {
  return greenBTCFormatter(mojo, Unit.MOJO)
    .to(Unit.TWO)
    .toBigNumber();
}
