import { css } from '@emotion/react';

export const ellipsisText = (countLine = 1) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${countLine};
  -webkit-box-orient: vertical;
`;
