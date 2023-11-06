import { createLogger, transports, format } from 'winston';
import 'winston-daily-rotate-file';

const { printf, combine, timestamp } = format;
const { DailyRotateFile } = transports;

const errorLogFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const appLogFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const createLoggerWithOptions = (dirname: string, level: string, filename: string) => {
  return createLogger({
    level,
    format: combine(timestamp(), level === 'error' ? errorLogFormat : appLogFormat),
    transports: [
      new DailyRotateFile({
        dirname,
        filename,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '40m',
        maxFiles: '30d',
      }),
    ],
  });
};

export const errorLogger = createLoggerWithOptions('logs/error', 'error', 'error-%DATE%.log');
export const appLogger = createLoggerWithOptions('logs/application', 'info', 'application-%DATE%.log');
