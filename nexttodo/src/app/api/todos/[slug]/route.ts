import { Todo } from "../db";

export async function PUT(request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params

    const body = await request.json();
    await Todo.updateOne({ _id: slug }, body);

    let todos = await Todo.find();

    return Response.json({ todos })
}

export async function DELETE(request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params

    await Todo.deleteOne({ _id: slug });

    let todos = await Todo.find();

    return Response.json({ todos })
}