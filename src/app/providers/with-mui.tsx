import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../theme';

export const withMui = (component: () => React.ReactNode) => () =>
  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {component()}
    </ThemeProvider>
  );
