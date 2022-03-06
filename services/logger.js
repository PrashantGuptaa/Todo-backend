import httpRequestContext from "http-request-context";
import winston from "winston";
import httpContext from 'express-http-context';
const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

 class MyLogger  {
    constructor() {
      }
      requestData = () => `Request-Id: ${httpContext.get('request-id')}, User-Id: ${httpContext.get('user-id')}`;

     info = (logMessage) => {
        logger.info(`${this.requestData()}, ${logMessage}`)
     }
     warn = (logMessage) => {
        logger.warn(`${this.requestData()}, ${logMessage}`)
     }
     error = (logMessage) => {
        logger.error(`${this.requestData()}, ${logMessage}`)
     }
     debug = (logMessage) => {
        logger.debug(`${this.requestData()}, ${logMessage}`)
     }
 }

export {  MyLogger };