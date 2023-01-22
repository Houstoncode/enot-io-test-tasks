import { FC, useMemo } from 'react';

import { Task } from '@/shared/api/tasks';

import * as Styled from './styled';

type Props = {
  task?: Task;
};

export const TaskRowInfo: FC<Props> = ({ task }) => {
  const isLoading = !task;
  const { title, description, done } = task || {};

  const isDone = useMemo(() => !isLoading && done, [isLoading, done]);

  const titleStyleDone = useMemo(() => {
    return { textDecorationLine: isDone ? 'line-through' : 'unset' };
  }, [isDone]);

  return (
    <>
      <Styled.Title variant="h5" fontWeight="600" lineHeight="20px" sx={titleStyleDone}>
        {title}
      </Styled.Title>
      {description && (
        <Styled.Description
          variant="subtitle1"
          fontWeight="600"
          lineHeight="17px"
          color="text.secondary"
        >
          {description}
        </Styled.Description>
      )}
    </>
  );
};
