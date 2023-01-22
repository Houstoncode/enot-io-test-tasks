import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FC, ReactNode, useMemo } from 'react';

import { Indicator } from '../indicator';

type Props = {
  indicatorColor?: string;
  children: ReactNode;
  after?: ReactNode;
  index?: number;
  isAnimated?: boolean;
};

export const IndicatorRow: FC<Props> = ({
  after,
  children,
  indicatorColor,
  index = 0,
  isAnimated,
}) => {
  const animateProps = useMemo(
    () =>
      isAnimated
        ? {
            initial: {
              opacity: 0,
              translateY: -50,
            },
            animate: { opacity: 1, translateY: 0 },
            transition: { duration: 0.2, delay: index * 0.15 },
          }
        : null,
    [isAnimated, index],
  );

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      component={motion.div}
      {...animateProps}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Indicator color={indicatorColor} />
        <Stack spacing={0.5} position="relative">
          {children}
        </Stack>
      </Stack>
      {after}
    </Stack>
  );
};
