import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
  const { id } = params;
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  let post = await response.json();

  return {
    post,
  };
};
