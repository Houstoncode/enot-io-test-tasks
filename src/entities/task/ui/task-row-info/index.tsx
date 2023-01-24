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
      <Styled.Title variant="h5" noWrap sx={titleStyleDone}>
        {title}
      </Styled.Title>
      {description && (
        <Styled.Description variant="subtitle1" color="text.secondary" noWrap>
          {description}
        </Styled.Description>
      )}
    </>
  );
};
