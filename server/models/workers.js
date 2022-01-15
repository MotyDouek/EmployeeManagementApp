import mongoose from "mongoose";

const workersSchema = mongoose.Schema({
    name: String,
    title: String,
    joinedAt: {
        type: Date,
        default: new Date()
    }
});

const workers = mongoose.model('workers', workersSchema);

export default workers;