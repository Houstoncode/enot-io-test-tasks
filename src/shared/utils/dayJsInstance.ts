import dayJs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import utc from 'dayjs/plugin/utc';

export const dayJsInstance = dayJs;

dayJsInstance.extend(utc);
dayJsInstance.extend(isToday);
dayJsInstance.extend(isTomorrow);
