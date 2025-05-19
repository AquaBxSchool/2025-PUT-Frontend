import mongoose from 'mongoose';

mongoose.connect(
    "mongodb://root:password@localhost:27017/lol?authSource=admin"
)

const todoSchema = new mongoose.Schema({
    text: String,
    done: Boolean,
});

export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);