import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import greenBTCFormatter from './greenBTCFormatter';

export default function catToMojo(cat: string | number | BigNumber): BigNumber {
  return greenBTCFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toBigNumber();
}
