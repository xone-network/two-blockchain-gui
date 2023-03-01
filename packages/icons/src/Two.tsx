import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import TwoIcon from './images/two.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={TwoIcon} viewBox="0 0 128 128" {...props} />;
}
