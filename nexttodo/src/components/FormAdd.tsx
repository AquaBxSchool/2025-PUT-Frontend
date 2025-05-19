import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function FormAdd({ setTodos }: { setTodos: Function }) {
    let [task, setTask] = useState("");

    // when submitting the add form, send the text to the node API
    const createTodo = () => {
        fetch("/api/todos", { method: "POST", body: JSON.stringify({ text: task }) })
            .then((data) => data.json())
            .then((data) => {
                setTodos(data.todos);
                setTask("")
                toast("Task added !")
            })
            .catch((reason) => {
                toast("Error: " + reason);
            });
    }

    return <form className="flex gap-4" onSubmit={(e) => { e.preventDefault(); createTodo() }}>
        <Input
            value={task}
            onChange={(event) => {
                setTask(event.target.value);
            }}
            name="task" required></Input>
        <Button type="submit">Submit</Button>
    </form>
}