import {
  Box,
  Card,
  IconButton,
  Modal,
  Slide,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { useContext } from 'react';

import { AppContext, useToggle } from '@/shared';

import * as Styled from './styled';

export const SettingsModal = () => {
  const [isOpen, toggle] = useToggle();
  const { showNews, toggleShowNews } = useContext(AppContext);

  return (
    <>
      <IconButton size="medium" onClick={toggle}>
        <Styled.SettingsIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={toggle}
        closeAfterTransition
        sx={{ minWidth: '390px', height: '90%', top: 'unset' }}
      >
        <Slide direction="up" in={isOpen} timeout={200}>
          <Card sx={{ width: '100%', height: '100%', borderRadius: '40px 40px 0px 0px' }}>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              Settings app
            </Typography>
            <Box component="form" paddingTop="16px">
              <Stack direction="row" spacing={1} alignItems="center">
                <Switch id="show-news" checked={showNews} onChange={toggleShowNews} />
                <Typography htmlFor="show-news" component="label">
                  Toggle news
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Slide>
      </Modal>
    </>
  );
};
