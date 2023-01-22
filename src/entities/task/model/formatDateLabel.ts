import { dayJsInstance } from '@/shared';

export const formatDateLabel = (date: string) => {
  if (dayJsInstance.utc(date).isToday()) return 'Today';
  if (dayJsInstance.utc(date).isTomorrow()) return 'Tomorrow';

  return dayJsInstance.utc(date).format('DD/MM');
};
