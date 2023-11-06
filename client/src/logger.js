const { createLogger, transports, format } = require('winston');
require('winston-daily-rotate-file');

const { printf, combine, timestamp } = format;
const { DailyRotateFile } = transports;

const errorLogFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const appLogFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const createLoggerWithOptions = (dirname, level, filename) => {
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

const errorLogger = createLoggerWithOptions('logs/error', 'error', 'error-%DATE%.log');
const appLogger = createLoggerWithOptions('logs/application', 'info', 'application-%DATE%.log');
