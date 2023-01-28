import { Schema, models, model } from 'mongoose'

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        nullable: false,
    },
    password: {
        type: String,
        required: true,
        nullable: false,
    },
    email: {
        type: String,
    },
    pin: {
        type: Number,
    },
    image: {
        type: String,
    }
})

const User = models.User || model('User', UserSchema)

export default User