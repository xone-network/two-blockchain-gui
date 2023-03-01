import BigNumber from 'bignumber.js';

const MOJO_PER_TWO = new BigNumber('1000000000000');
const POOL_REWARD = '0.875'; // 7 / 8
const FARMER_REWARD = '0.125'; // 1 /8

export function calculatePoolReward(height: number): BigNumber {
  if (height === 0) {
    return MOJO_PER_TWO.times('3000000').times(POOL_REWARD);
  }
  if (height < 1000000) {
    return MOJO_PER_TWO.times('1').times(POOL_REWARD);
  }
  if (height < 2000000) {
    return MOJO_PER_TWO.times('0.6').times(POOL_REWARD);
  }
  if (height < 3000000) {
    return MOJO_PER_TWO.times('0.4').times(POOL_REWARD);
  }
  if (height < 4000000) {
    return MOJO_PER_TWO.times('0.2').times(POOL_REWARD);
  }
  if (height < 20000000) {
    return MOJO_PER_TWO.times('0.1').times(POOL_REWARD);
  }

  return MOJO_PER_TWO.times('0.05').times(POOL_REWARD);
}

export function calculateBaseFarmerReward(height: number): BigNumber {
  if (height === 0) {
    return MOJO_PER_TWO.times('3000000').times(FARMER_REWARD);
  }
  if (height < 1000000) {
    return MOJO_PER_TWO.times('1').times(FARMER_REWARD);
  }
  if (height < 2000000) {
    return MOJO_PER_TWO.times('0.6').times(FARMER_REWARD);
  }
  if (height < 3000000) {
    return MOJO_PER_TWO.times('0.4').times(FARMER_REWARD);
  }
  if (height < 4000000) {
    return MOJO_PER_TWO.times('0.2').times(FARMER_REWARD);
  }
  if (height < 20000000) {
    return MOJO_PER_TWO.times('0.1').times(FARMER_REWARD);
  }

  return MOJO_PER_TWO.times('0.05').times(FARMER_REWARD);
}
