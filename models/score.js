const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TetrisScoreSchema = new Schema({
    tetrisScore: {
        type: Number,
        require: true
    },
});

module.exports = Score = mongoose.model("Score", TetrisScoreSchema);