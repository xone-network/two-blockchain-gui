import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@mui/material';
import { Two } from '@two/icons';

const StyledTwo = styled(Two)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledTwo />
    </Box>
  );
}
