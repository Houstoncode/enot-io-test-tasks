import { useMemo } from 'react';

import { dayJsInstance } from '@/shared';
import { Task } from '@/shared/api/tasks';

import { useTasks } from './useTasks';

type TaskDictionary = {
  [key: string]: Task[];
};

const placeholderTasksGroup: TaskDictionary = { '': [] };

const grouppedTasks = (
  data: Task[],
  placeholderTask = placeholderTasksGroup,
): TaskDictionary => {
  if (!data) return placeholderTask;

  const tasks = data
    .filter((task) =>
      dayJsInstance.utc(task.implementationAt).isAfter(dayJsInstance.utc(), 'day'),
    )
    .sort(
      (a, b) =>
        new Date(a.implementationAt).getTime() - new Date(b.implementationAt).getTime(),
    )
    .reduce<TaskDictionary>((acc, task) => {
      const implementationAt = dayJsInstance
        .utc(task.implementationAt)
        .format('YYYY-MM-DD');

      if (acc[implementationAt]) acc[implementationAt].push(task);
      else acc[implementationAt] = [task];

      return acc;
    }, {});

  return tasks;
};

// TODO: write tests

export const useGrouppedTasks = () => {
  const { data, isLoading, isError } = useTasks();

  const tasks = data || [];

  const groupWithTasks = useMemo(() => grouppedTasks(tasks), [data]);

  return { data: groupWithTasks, isLoading, isError };
};
