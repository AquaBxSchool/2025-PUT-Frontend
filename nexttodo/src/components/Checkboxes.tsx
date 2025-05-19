import { Trash } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

export function Checkboxes({ todos, setTodos }: { todos: any[], setTodos: Function }) {

    // update a todo after checking it
    const updateTodo = (id: number, done: boolean) =>
        fetch(`/api/todos/${id}`, { method: "PUT", body: JSON.stringify({ done }) })
            .then((data) => data.json())
            .then((data) => {
                setTodos(data.todos);
                toast("Task updated !")
            })
            .catch((reason) => {
                toast("Error: " + reason);
            });

    // delete a todo after checking it
    const deleteTodo = (id: number) =>
        fetch(`/api/todos/${id}`, { method: "DELETE" })
            .then((data) => data.json())
            .then((data) => {
                setTodos(data.todos);
                toast("Task deleted !")
            })
            .catch((reason) => {
                toast("Error: " + reason);
            });

    return <div className="flex flex-col gap-2">
        {todos.map(t => <div key={t._id} className="flex items-center justify-between border-b-1 pb-2">
            <div className="flex items-center space-x-2">

                <Checkbox id={"check-" + t._id} checked={t.done} onClick={(e) => updateTodo(t._id, !t.done)} />
                <label
                    htmlFor={"check-" + t._id}
                    className="select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {t.text}
                </label>
            </div>
            <button onClick={() => deleteTodo(t._id)} className="border-1 rounded-xl hover:bg-red-400  hover:text-white transition-colors duration-100 p-2 cursor-pointer">
                <Trash className="w-4 h-4 " />
            </button>
        </div>)}
    </div>
}