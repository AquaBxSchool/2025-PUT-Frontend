<script lang="ts">
  export let name: string;
  export let version: number = 1;
</script>

<header class="text-gray-600 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a href="/" class="mr-5 hover:text-gray-900">Home</a>
      <a href="/about-us" class="mr-5 hover:text-gray-900">About us</a>
      <a href="/team" class="mr-5 hover:text-gray-900">Team</a>
      <a href="/posts" class="mr-5 hover:text-gray-900">Posts</a>
      <a href="/contact" class="hover:text-gray-900">Contact</a>
    </nav>
    <a
      href="/"
      class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        ></path>
      </svg>
      <span class="ml-3 text-xl">{name} {version}</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >Login
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
