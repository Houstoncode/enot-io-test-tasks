import { Stack } from '@mui/system';
import { FC } from 'react';

import { useGrouppedTasks } from '@/entities/task/model/useGrouppedTasks';
import { TaskCard } from '@/features/task-card';

const DashboardPage: FC = () => {
  const { data, isLoading } = useGrouppedTasks();

  const grouppedTasks = Object.entries(data);

  return (
    <Stack spacing={4}>
      {grouppedTasks.map((groupTask, index) => {
        const [label, tasks] = groupTask;

        return <TaskCard key={index} label={label} tasks={tasks} isLoading={isLoading} />;
      })}
    </Stack>
  );
};

export default DashboardPage;
