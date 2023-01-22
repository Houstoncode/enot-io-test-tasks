import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { getTasksList, Task } from '@/shared/api/tasks';

import { TASK_LIST_QUERY_KEY } from './consts';

// TODO: write tests

export const useTasks = () =>
  useQuery<AxiosResponse<Task[], unknown>, unknown, Task[]>(
    TASK_LIST_QUERY_KEY,
    () => getTasksList(),
    { select: ({ data }) => data },
  );
