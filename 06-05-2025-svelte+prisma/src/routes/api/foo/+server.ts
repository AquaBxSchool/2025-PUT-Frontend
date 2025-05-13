export const GET = async () => {
  let foo = {
    name: "foo",
    age: 20,
    hobbies: ["reading", "gaming"],
  };

  return new Response(JSON.stringify(foo), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
