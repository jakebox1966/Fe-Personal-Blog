import mongoose from "mongoose";
import { Schema } from "mongoose";

var PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        default: Date.now, // 현재 날짜를 기본값으로 지정
    },
    // user: {
    //     _id: mongoose.Types.ObjectId,
    //     username: String,
    // },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
