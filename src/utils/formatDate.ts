import { format, parseISO } from 'date-fns';

export const formatMatchDate = (dateString: string): string => {
  try {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy - HH:mm');
  } catch (error) {
    return 'Invalid date';
  }
};