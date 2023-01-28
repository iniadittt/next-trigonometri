import jwt from 'jsonwebtoken';
import { responseMessage } from '../utils/response'

const authorization = (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return responseMessage(res, 401, 'Invalid Authorization');
    const auth = authorization.split(' ');
    const [authType, authToken] = auth;
    if (authType !== 'Bearer') return responseMessage(res, 401, 'Unauthorized');
    jwt.verify(authToken, 'H31L0wOR1d161o!;', (error, decode) => {
        if (error) return responseMessage(res, 403, 'Access Denied');
        return decode;
    })
}

export default authorization;