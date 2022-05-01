<script>
  let url;
  let downloadUrl;

  const onSubmit = () => {
    console.log({ url });

    downloadUrl = "Hello, World!";
  };
</script>

<main>
  <!-- https://tailwindcss.com/docs/height#viewport-height -->
  <!-- https://stackoverflow.com/questions/55056513/vertical-align-with-tailwind-css-across-full-screen-div -->
  <div class="h-screen">
    <h1>Google Drive download link generator</h1>

    <form on:submit|preventDefault={onSubmit}>
      <!-- https://www.hyperui.dev/components/inputs -->
      <!-- https://www.hyperui.dev/components/forms -->
      <!-- https://flowbite.com/docs/forms/input-field/ -->
      <!-- https://tailwindcss.com/docs/screen-readers -->
      <!-- https://tailwindcss.com/docs/top-right-bottom-left -->
      <!-- https://egghead.io/lessons/svelte-creating-a-simple-form-with-svelte -->
      <div>
        <label for="url" class="sr-only">Email</label>
        <div class="relative">
          <input
            type="text"
            id="url"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter email"
            required
            bind:value={url}
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <!-- https://heroicons.com/ -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </span>
        </div>
      </div>

      <button type="submit"> Sign In </button>
    </form>

    {#if downloadUrl}
      <p>{downloadUrl}</p>
    {/if}
  </div>
</main>
