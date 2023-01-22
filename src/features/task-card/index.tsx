import {
  Card,
  Checkbox,
  Grow,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { FC } from 'react';

import { formatDateLabel, TaskRowInfo } from '@/entities/task';
import { IndicatorRow, useToggle } from '@/shared';
import { Task } from '@/shared/api/tasks';

import { ToggleTask } from '../toggle-task';
import * as Styled from './styled';

type Props = {
  label: string;
  tasks: Task[];
  isLoading?: boolean;
  expanded?: boolean;
};

export const TaskCard: FC<Props> = ({
  label,
  tasks,
  isLoading = false,
  expanded = false,
}) => {
  const [isExpanded, toggleExpanded] = useToggle(expanded);

  return (
    <Stack spacing="1">
      {isExpanded && (
        <Grow in={isExpanded} timeout={500}>
          <Stack direction="row" spacing={0} alignItems="center">
            <Checkbox checked={isExpanded} onChange={toggleExpanded} />
            <Typography variant="h5" fontWeight="600" lineHeight="20px">
              {formatDateLabel(label)} Tasks
            </Typography>
          </Stack>
        </Grow>
      )}
      <Card>
        {!isExpanded ? (
          <IndicatorRow
            after={
              <IconButton onClick={toggleExpanded} size="medium">
                <Styled.KeyboardArrowIcon />
              </IconButton>
            }
          >
            <Grow in={!isExpanded} timeout={500}>
              <Typography variant="h5" fontWeight="600" lineHeight="20px">
                {isLoading ? (
                  <Skeleton width="176px" height="20px" />
                ) : (
                  `${formatDateLabel(label)} Tasks`
                )}
              </Typography>
            </Grow>
          </IndicatorRow>
        ) : tasks.length > 0 ? (
          <Stack spacing={2}>
            {tasks.map((task, index) => (
              <IndicatorRow
                key={task.id}
                indicatorColor={task.color}
                index={index}
                isAnimated
                after={<ToggleTask taskId={task.id} done={task.done} />}
              >
                <TaskRowInfo task={task} />
              </IndicatorRow>
            ))}
          </Stack>
        ) : (
          <Typography>Not found</Typography>
        )}
      </Card>
    </Stack>
  );
};
