import { Typography } from '@mui/material';
import { Box as MuiBox, styled } from '@mui/system';

export const Container = styled(MuiBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography)`
  font-weight: 600;
  line-height: 26px;
`;
export const Description = styled(Typography)`
  font-weight: 600;
  line-height: 17px;
`;
