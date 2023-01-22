import { Box, keyframes, styled } from '@mui/material';

export const Container = styled(Box)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 30px;
  overflow-x: hidden;
`;

const animateRun = keyframes`
  to {
    transform: translateX(-100%);
  }
`;

export const Marqueue = styled(Box)`
  display: inline-block;
  animation: ${animateRun} 20s linear infinite;
  white-space: nowrap;
  padding-left: 100%;
`;
