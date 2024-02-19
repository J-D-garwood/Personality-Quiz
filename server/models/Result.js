const mongoose = require("mongoose");

const { Schema } = mongoose;

const ResultsSchema = new Schema({
    narcissismLvl: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
    description: {
        type: String,
        required: true
    }
    //continue from here
})