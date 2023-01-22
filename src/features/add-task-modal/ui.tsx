import { Card, IconButton, Modal, Slide, Typography } from '@mui/material';

import { useToggle } from '@/shared';

import * as Styled from './styled';

export const AddTaskModal = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <IconButton disabled size="medium" onClick={toggle}>
        <Styled.AddIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={toggle}
        closeAfterTransition
        sx={{ minWidth: '390px', height: '90%', top: 'unset' }}
      >
        <Slide direction="up" in={isOpen}>
          <Card sx={{ width: '100%', height: '100%', borderRadius: '40px 40px 0px 0px' }}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Card>
        </Slide>
      </Modal>
    </>
  );
};
