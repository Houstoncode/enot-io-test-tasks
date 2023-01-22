import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { Task, toggleTask } from '@/shared/api/tasks';

import { TASK_LIST_QUERY_KEY } from './consts';

// TODO: write tests

export const useToggleTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(toggleTask, {
    onMutate: async ({ taskId }) => {
      await queryClient.cancelQueries(TASK_LIST_QUERY_KEY);

      const snapshotOfPreviousTasks =
        queryClient.getQueryData<AxiosResponse<Task[], unknown>>(TASK_LIST_QUERY_KEY);

      const changedTasks = snapshotOfPreviousTasks?.data.map<Task>((task) => {
        if (taskId === task.id) return { ...task, done: !task.done };

        return { ...task };
      });

      queryClient.setQueryData<AxiosResponse<Task[], unknown>>(
        TASK_LIST_QUERY_KEY,
        () => {
          return {
            ...snapshotOfPreviousTasks,
            data: changedTasks,
            // TODO: fix ts
          } as unknown as AxiosResponse<Task[], unknown>;
        },
      );

      return {
        snapshotOfPreviousTasks,
      };
    },

    onError: (error, taskParams, context) => {
      const { snapshotOfPreviousTasks } = context || {};

      queryClient.setQueryData(TASK_LIST_QUERY_KEY, snapshotOfPreviousTasks);
    },

    onSuccess() {
      queryClient.invalidateQueries(TASK_LIST_QUERY_KEY);
    },
  });

  return mutation;
};
