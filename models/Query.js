const { Schema, model } = require("mongoose")

const Query = new Schema({
    name: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = model("Query", Query)
