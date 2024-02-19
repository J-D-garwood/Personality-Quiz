const mongoose = require("mongoose");

const { Schema } = mongoose;

const resultSchema = new Schema({
    narcissismLvl: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    classification: {
        type: String,
        trim: true,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    //continue from here
});

const Result = mongoose.model("Result", resultSchema);

moodule.exports = Result;
