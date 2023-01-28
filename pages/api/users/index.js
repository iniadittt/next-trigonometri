import connectionDatabase from '../../../libs/database'
import { getUsers } from './users'

const handler = async(req, res) => {
    const { method } = req
    await connectionDatabase()
    if (method === 'GET') return getUsers(req, res)
    return res.json({ status: 405 })
}

export default handler