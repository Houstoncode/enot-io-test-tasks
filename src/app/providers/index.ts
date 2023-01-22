import compose from 'compose-function';

import { withAppContext } from './with-app-context';
import { withMui } from './with-mui';
import { withQuery } from './with-query';
import { withRouter } from './with-router';

export const withProviders = compose(withMui, withAppContext, withQuery, withRouter);
