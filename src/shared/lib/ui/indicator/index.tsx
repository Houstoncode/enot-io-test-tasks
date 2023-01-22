import { Box } from '@mui/system';
import { FC, memo } from 'react';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

export const Indicator: FC<Props> = memo(
  ({ width = 5, height = 40, color = '#A9A9A9' }) => {
    return (
      <Box
        minWidth={width}
        height={height}
        sx={{ backgroundColor: color, borderRadius: 3 }}
      />
    );
  },
);
