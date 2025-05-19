import { Todo } from "$lib/db";
import type { Actions, Load } from "@sveltejs/kit"

export const load: Load = async () => {
    let todos = await Todo.find();
    return { todos: todos.map(t => { return { _id: t._id.toString(), text: t.text, done: t.done } }) }
}

export const actions: Actions = {
    addTodo: async (event) => {
        const body = await event.request.formData();
        await Todo.create({ text: body.get("text") });

        return { message: "Task Created !" }
    },
    updateTodo: async (event) => {
        const body = await event.request.formData();
        await Todo.updateOne({ _id: body.get("_id") }, { done: body.get("done") === "on"  });

        return { message: "Task Updated !" }
    },
    deleteTodo: async (event) => {
        const body = await event.request.formData();
        await Todo.deleteOne({_id:body.get("_id")});

        return {
            message: "Task Deleted !"
        }
    },
}