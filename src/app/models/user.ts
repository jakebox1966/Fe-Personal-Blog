import mongoose, { Model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
    username: string;
    email: string;
    hashedPassword: string;
}

const UserSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    hashedPassword: {
        type: String,
    },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

// interface IUserDocument extends IUser, Document {
//     setPassword: (password: string) => Promise<void>;
//     checkPassword: (password: string) => Promise<boolean>;
// }

// interface IUserModel extends Model<IUserDocument> {
//     findByUsername(username: string): Promise<IUserDocument>;
// }

// const UserSchema: Schema<IUserDocument> = new Schema({
//     email: {
//         type: String,
//         required: true,
//     },
//     username: {
//         type: String,
//     },
//     hashedPassword: {
//         type: String,
//     },
// });

// UserSchema.methods.setPassword = async function (password: string) {
//     const hash = await bcrypt.hash(password, 10);
//     this.hashedPassword = hash;
// };

// UserSchema.methods.checkPassword = async function (password: string) {
//     const result = await bcrypt.compare(password, this.hashedPassword);
//     return result;
// };

// UserSchema.statics.findByUsername = function (username: string) {
//     return this.findOne({ username });
// };

// export default mongoose.models.User ||
//     mongoose.model<IUserDocument, IUserModel>("User", UserSchema);
