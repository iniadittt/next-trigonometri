import connectionDatabase from '../../../libs/database'
import User from '../../../models/user'
import { responseMessage, responseError, responseData } from '../utils/response'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handler = async(req, res) => {
    try {
        const { method } = req
        if (method !== 'POST') return responseMessage(res, 405, 'Method not allowed')
        const { username, password } = req.body
        if (!username || !password) return responseMessage(res, 400, 'Bad request')
        await connectionDatabase()
        const getUser = await User.findOne({ username }).exec()
        if (!getUser) return responseMessage(res, 400, 'Username dan Password Salah')
        const userPassword = getUser.password
        const matchPassword = await bcrypt.compare(password, userPassword)
        if (!matchPassword) return responseMessage(res, 400, 'Username dan Password Salah')
        const accessToken = jwt.sign({ username }, process.env.SECRET_KEY, {
            expiresIn: 60 * 60 * 24 * 1000
        })
        return responseData(res, 200, 'Login Berhasil', { token: accessToken })
    } catch (error) {
        return responseError(res, 500, 'Internal Server Error', error)
    }
}

export default handler