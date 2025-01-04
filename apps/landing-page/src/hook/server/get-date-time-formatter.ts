/*
 * Copyright (c) 2025 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { getFormatter } from 'next-intl/server';

type AsyncCallback = Promise<(rawDate: string) => string>;

const getDateTimeFormatter = async (): AsyncCallback => {
  const format = await getFormatter();
  return (rawDate: string) => {
    const dateTime = new Date(rawDate);
    return format.dateTime(dateTime, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };
};

export { getDateTimeFormatter };
