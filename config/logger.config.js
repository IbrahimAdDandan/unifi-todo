const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');


const transport = new winston.transports.DailyRotateFile({
    filename: './log/log-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});


module.exports = winston.createLogger({
    transports: [
        transport
    ]
});