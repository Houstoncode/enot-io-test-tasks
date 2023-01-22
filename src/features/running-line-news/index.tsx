import { Skeleton, Typography } from '@mui/material';
import { useContext } from 'react';

import { useRandomNews } from '@/entities/news';
import { AppContext } from '@/shared';

import * as Styled from './styled';

export const RunningLineNews = () => {
  const { data, isFetching } = useRandomNews();
  const { showNews } = useContext(AppContext);

  return (
    <Styled.Container>
      {showNews && (
        <Styled.Marqueue>
          {isFetching ? (
            <Skeleton width="500px" height="20px" />
          ) : (
            <Typography whiteSpace="nowrap">{data?.description}</Typography>
          )}
        </Styled.Marqueue>
      )}
    </Styled.Container>
  );
};
