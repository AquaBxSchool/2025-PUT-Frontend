import { Todo } from "./db";

export async function GET(request: Request) {
    let todos = await Todo.find();
    return Response.json({ todos })
}

export async function POST(request: Request) {
    const body = await request.json();

    await Todo.create(body);

    let todos = await Todo.find();

    return Response.json({ todos })
}