import { createLogger, transports, format } from 'winston';
import 'winston-daily-rotate-file';
import moment from 'moment';

const { printf, combine } = format;
const { DailyRotateFile } = transports;

const customTimestamp = () => {
  // Use moment.js to format the timestamp with date and time in IST
  return moment().utcOffset('+05:30').format('YYYY-MM-DD HH:mm:ss');
};

const errorLogFormat = printf(({ level, message }) => {
  return `${customTimestamp()} [${level}]: ${message}`;
});

const appLogFormat = printf(({ level, message }) => {
  return `${customTimestamp()} [${level}]: ${message}`;
});

const createLoggerWithOptions = (dirname: string, level: string, filename: string) => {
  return createLogger({
    level,
    format: combine(level === 'error' ? errorLogFormat : appLogFormat),
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
