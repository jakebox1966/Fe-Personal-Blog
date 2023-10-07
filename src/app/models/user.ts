import mongoose from "mongoose";
import { Schema } from "mongoose";

var UserSchema = new Schema({
    email: {
        type: String,
        required:true
    },
    name : {
        type: String
    },
    password: {
        type: String
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)