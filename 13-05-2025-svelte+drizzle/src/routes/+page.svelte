<script lang="ts">
  import { enhance } from "$app/forms";
  import { Toaster, toast } from "svelte-sonner";
  let { data, form } = $props();

  const fun = ({
    formElement,
    formData,
    action,
    cancel,
    submitter,
  }: {
    action: URL;
    formData: FormData;
    formElement: HTMLFormElement;
    controller: AbortController;
    submitter: HTMLElement | null;
    cancel: () => void;
  }) => {
    // `formElement` is this `<form>` element
    // `formData` is its `FormData` object that's about to be submitted
    // `action` is the URL to which the form is posted
    // calling `cancel()` will prevent the submission
    // `submitter` is the `HTMLElement` that caused the form to be submitted
    console.log(formElement);
    return async ({ result, update }) => {
      if (result.data.success) {
        toast("Post Added");
      } else {
        toast(result.data.error);
      }
      update();
    };
  };
</script>

<!-- ... -->

<Toaster />

<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
      >
        Add User
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Adding a user</p>
    </div>
    <form
      class="lg:w-1/2 md:w-2/3 mx-auto"
      use:enhance={fun}
      method="post"
      action="?/addUser"
    >
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="firstName" class="leading-7 text-sm text-gray-600"
              >FirstName</label
            >
            <input
              type="text"
              id="firstName"
              name="firstName"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="lastName" class="leading-7 text-sm text-gray-600"
              >LastName</label
            >
            <input
              type="text"
              id="lastName"
              name="lastName"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="age" class="leading-7 text-sm text-gray-600">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            type="submit"
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >Button</button
          >
        </div>
      </div>
    </form>
  </div>
</section>

<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
      >
        Add post
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Adding a post</p>
    </div>
    <form
      class="lg:w-1/2 md:w-2/3 mx-auto"
      use:enhance={fun}
      method="post"
      action="?/addPost"
    >
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="title" class="leading-7 text-sm text-gray-600"
              >Title</label
            >
            <input
              type="text"
              id="title"
              name="title"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="authorId" class="leading-7 text-sm text-gray-600"
              >authorId</label
            >

            <select
            id="AuthorId"
              name="authorId"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

              >
                {#each data.users as user}
                    <option value={user.id}>{user.firstName} {user.lastName}</option>
                {/each}
            </select>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="body" class="leading-7 text-sm text-gray-600"
              >Body</label
            >
            <textarea
              id="body"
              name="body"
              class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            type="submit"
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >Button</button
          >
        </div>
      </div>
    </form>
  </div>
</section>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      {#each data.posts as post}
        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {post.title}
            </h2>
            <p class="leading-relaxed">
              {post.body}
            </p>
            <a class="text-indigo-500 inline-flex items-center mt-4"
              >Author : 
              {post.authorId}
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
