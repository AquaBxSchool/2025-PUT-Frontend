import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ fetch }) => {
  const prisma = new PrismaClient();

  let posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      body: true,
    },
    // where: {
    //   id: 1,
    // },
    orderBy: {
      id: "desc",
    },
  });

  const newPost = {
    title: "New Post",
    body: "This is a new post",
    author: {
      connect: {
        id: 1,
      },
    },
  };

  // Create a new post
  // await prisma.post.create({
  //   data: newPost,
  // });

  // await prisma.post.update({
  //   where: { id: 1 },
  //   data: {
  //     title: "Updated Post",
  //     body: "This is an updated post",
  //   },
  // });

  // Delete a post
  await prisma.post.deleteMany({
    where: { id: 2 },
  });

  await prisma.$disconnect();

  console.log("posts", posts);

  return {
    foo: "BAR",
    version: "sdfdsf",
    posts,
  };
};

export const actions: Actions = {
  something: async (event) => {
    const formData = await event.request.formData();

    let title = formData.get("title");
    let body = formData.get("body");

    const prisma = new PrismaClient();

    // Create a new post
    await prisma.post.create({
      data: {
        title: title,
        body: body,
        authorID: 1,
      },
    });

    await prisma.$disconnect();

    console.log("create action");
  },
};
