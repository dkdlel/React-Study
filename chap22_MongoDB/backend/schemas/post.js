const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    tags: {
        type: [String],
    }, // 문자열로 이루어진 배열
    publishedDate: {
        type: Date,
        default: Date.now, // 현재 날짜를 기본값으로 지정
    },
});

// 모델 생성
module.exports = mongoose.model('Post', PostSchema);