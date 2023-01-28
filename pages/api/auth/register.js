import connectionDatabase from '../../../libs/database'
import User from '../../../models/user'
import { responseData, responseMessage, responseError } from '../utils/response'
import bcrypt from 'bcrypt'

const handler = async(req, res) => {
    try {
        const { method } = req
        if (method !== 'POST') return responseMessage(res, 405, 'Method Not Allowed')
        const { username, password, confirmPassword } = req.body
        if (!username || !password || !confirmPassword) return responseMessage(res, 400, 'Data Registrasi Tidak Valid')
        await connectionDatabase()
        if (password !== confirmPassword) return responseMessage(res, 400, 'Password dan Confirm Password Tidak Sesuai')
        const getUser = await User.findOne({ username }).exec()
        if (getUser) return responseMessage(res, 404, 'Username Sudah Digunakan')
        const salt = Number(process.env.SALT)
        const hashPassword = await bcrypt.hash(password, salt)
        const register = new User({ username, password: hashPassword, confirmPassword })
        register.save((error, data) => {
            if (error) return responseMessage(res, 400, 'Registrasi Gagal')
            return responseData(res, 201, 'Registrasi Berhasil', data)
        })
    } catch (error) {
        return responseError(res, 500, 'Internal Server Error', error)
    }
}

export default handler