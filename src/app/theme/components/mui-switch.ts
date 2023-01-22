import { Components, Theme } from '@mui/material';

const closeIcon = `url('data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
  '#A9A9A9',
)}" d="M11.8976 13.2468L6.61086 7.95169L1.32411 13.2468L0.143738 12.0664L5.4388 6.77962L0.143738 1.49287L1.32411 0.3125L6.61086 5.60756L11.8976 0.320813L13.0697 1.49287L7.78293 6.77962L13.0697 12.0664L11.8976 13.2468Z"/></svg>')`;

const checkIcon = `url('data:image/svg+xml;utf8,<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${encodeURIComponent(
  '#A9A9A9',
)}" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z"/></svg>')`;

export const muiSwitch: Components['MuiSwitch'] = {
  styleOverrides: {
    root: {
      width: 50.71,
      height: 29.92,
      padding: 0,
    },
    switchBase: ({ theme }) => {
      return {
        padding: 2.5,
        transform: 'translateX(0px)',
        '&.Mui-checked': {
          '&+.MuiSwitch-track': {
            backgroundColor: '#10C200',
            boxShadow: 'inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
            opacity: 1,
            border: 0,
          },
          '& .MuiSwitch-thumb': {
            color: '#F4F4F4',
          },
          '& .MuiSwitch-thumb:before': {
            backgroundImage: checkIcon,
          },
        },
        transition: (theme as Theme).transitions.create(['transform'], {
          duration: 300,
        }),
      };
    },
    thumb: ({ theme }) => {
      return {
        width: 25.77,
        height: 24.94,
        outline: 'none',
        color: '#F4F4F4',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `${closeIcon}`,
          transition: (theme as Theme).transitions.create(['background-image'], {
            duration: 100,
          }),
        },
      };
    },
    track: ({ theme }) => {
      return {
        backgroundColor: '#366EFF',
        borderRadius: 20,
        boxShadow: 'inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
        opacity: 1,
        transition: (theme as Theme).transitions.create(['background-color'], {
          duration: 300,
        }),
      };
    },
  },
};
