import { Stack, Typography } from '@mui/material';

import { AddTaskModal } from '../add-task-modal/ui';
import { SettingsModal } from '../settings-modal/ui';
import * as Styled from './styled';

export const Header = () => {
  return (
    <Styled.Box>
      <Typography variant="h4">To Do</Typography>
      <Stack direction="row">
        <AddTaskModal />
        <SettingsModal />
      </Stack>
    </Styled.Box>
  );
};
