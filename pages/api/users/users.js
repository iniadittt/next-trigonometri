import connectionDatabase from '../../../libs/database'

export const getUsers = async(req, res) => {
    try {
        await connectionDatabase()
        res.json({ status: true })
    } catch (error) {
        console.log(error)
    }
}

const handler = async(req, res) => res.redirect('/api/users')

export default handler