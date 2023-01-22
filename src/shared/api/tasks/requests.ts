import { AxiosPromise } from 'axios';

import { apiInstance } from '../request';
import { Task } from './types';

const BASE_URL = '/todos';

export const getTasksList = (): AxiosPromise<Task[]> => {
  return apiInstance.get(BASE_URL);
};

type ToggleTaskParams = {
  taskId: number;
};

export const toggleTask = ({ taskId }: ToggleTaskParams): AxiosPromise<undefined> => {
  return apiInstance.patch(BASE_URL + `/${taskId}/toggle`);
};
