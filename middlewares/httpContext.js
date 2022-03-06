import { v4 } from 'uuid';
import httpContext from 'express-http-context';

const httpContextData = (req, res, next) => {
    const requestId = req.headers['request-id'] || v4();
    httpContext.ns.bindEmitter(req);
    httpContext.ns.bindEmitter(res);
    httpContext.set('request-id',requestId );
    httpContext.set('user-id', req.headers['user-id']);
    next();
};

export default httpContextData;
