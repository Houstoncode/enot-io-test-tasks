import { Switch } from '@mui/material';
import { FC, memo } from 'react';

import { useToggleTask } from '@/entities/task';

type Props = {
  taskId: number;
  done: boolean;
};

export const ToggleTask: FC<Props> = memo(({ taskId, done }) => {
  const { mutate } = useToggleTask();

  const handleToggleTask = () => {
    mutate({ taskId });
  };

  return <Switch checked={done} onChange={handleToggleTask} />;
});
