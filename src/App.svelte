<script>
  import { copy } from "svelte-copy";

  let url;
  let downloadUrl;

  const onSubmit = () => {
    // https://dmitripavlutin.com/parse-url-javascript/
    const id = new URL(url).pathname.split("/")[3];

    downloadUrl = `https://drive.google.com/uc?export=download&id=${id}`;
  };

  // https://svelte.dev/repl/ca01d7704d2e411bbe9a9911de6ea8bb?version=3.4.4
  // "text-cyan-700 border-cyan-700 bg-cyan-50"
  $: downloadClasses =
    downloadUrl === undefined
      ? "text-gray-400 border-gray-400 bg-gray-50"
      : "text-sendstack-onyx border-sendstack-onyx bg-gray-100";
</script>

<!-- https://devdojo.com/tails -->
<!-- https://hypercolor.dev/ -->
<!-- https://tailwind-elements.com/quick-start/ -->
<!-- https://delba.dev/ -->
<div
  class="min-h-screen antialiased flex flex-col items-center px-9 bg-gradient-to-r from-rose-100/50 to-teal-100/50"
>
  <!-- https://tailwindcss.com/docs/height#viewport-height -->
  <!-- https://stackoverflow.com/questions/55056513/vertical-align-with-tailwind-css-across-full-screen-div -->
  <!-- https://tailwindcss.com/docs/max-width -->
  <!-- https://tailwindcss.com/docs/letter-spacing#customizing-your-theme -->
  <main class="max-w-screen-sm w-full p-9 my-auto bg-gray-50 rounded-3xl">
    <!-- https://tailwindcss.com/docs/installation -->
    <h1 class="text-sendstack-onyx text-xl tracking-tight font-bold">
      Google Drive download link generator
    </h1>

    <!-- https://tailwindcss.com/docs/align-items -->
    <!-- https://tailwindcss.com/docs/gap -->
    <form
      on:submit|preventDefault={onSubmit}
      class="flex flex-row items-center gap-x-4 mt-6"
    >
      <!-- https://www.hyperui.dev/components/inputs -->
      <!-- https://www.hyperui.dev/components/forms -->
      <!-- https://flowbite.com/docs/forms/input-field/ -->
      <!-- https://tailwindcss.com/docs/screen-readers -->
      <!-- https://tailwindcss.com/docs/top-right-bottom-left -->
      <!-- https://egghead.io/lessons/svelte-creating-a-simple-form-with-svelte -->
      <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url -->
      <!-- https://regex101.com/ https://regex101.com/r/ZQbU2n/1 -->
      <!-- https://stackoverflow.com/questions/23224590/regex-to-modify-google-drive-shared-file-url -->
      <div class="flex-1">
        <label for="url" class="sr-only">Google Drive link</label>
        <div class="relative">
          <input
            type="url"
            name="url"
            id="url"
            pattern="https://drive\.google\.com/file/d/.*?/view\?usp=sharing"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm placeholder:text-gray-400 text-sendstack-onyx"
            placeholder="https://drive.google.com/file/d/<ID>/view?usp=sharing"
            required
            bind:value={url}
          />
          <!-- https://tailwindcss.com/docs/display#inline-flex -->
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

      <!-- https://tailwindcss.com/docs/hover-focus-and-other-states -->
      <!-- https://www.hyperui.dev/components/buttons -->
      <!-- https://tailwindcss.com/docs/display#block-and-inline -->
      <!-- Note: The text color also changes when hovering, not just the background. -->
      <!-- https://tailwindcss.com/docs/hover-focus-and-other-states#hover-focus-and-active -->
      <button
        type="submit"
        class="bg-sendstack-one hover:bg-sendstack-two text-sendstack-onyx hover:text-sendstack-gemstone px-4 py-2 text-sm font-medium leading-6 rounded-full"
        >Generate</button
      >
    </form>

    <div class="flex flex-row items-center gap-x-4 mt-4">
      <!-- https://www.hyperui.dev/components/alerts -->
      <!-- https://tailwindcss.com/docs/text-overflow -->
      <!-- https://tailwindcss.com/docs/overflow -->
      <div class="p-4 border-l-4 overflow-hidden {downloadClasses}">
        <p class="text-sm font-medium truncate">
          {#if downloadUrl}
            {downloadUrl}
          {:else}
            {"https://drive.google.com/uc?export=download&id=<ID>"}
          {/if}
        </p>
      </div>
      <!-- https://github.com/ghostdevv/svelte-copy -->
      <!-- https://www.sarasoueidan.com/blog/accessible-icon-buttons/ -->
      <!-- Technique #1: Accessible Visually Hidden Text -->
      {#if downloadUrl}
        <button
          class="p-2 border rounded-full border-sendstack-gemstone text-sendstack-gemstone hover:text-white hover:bg-sendstack-gemstone"
          use:copy={downloadUrl}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span class="sr-only"
            >Copy the generated download link to the clipboard.</span
          >
        </button>
      {/if}
    </div>
  </main>
  <footer class="py-4"><p class="text-xs">João Palmeiro</p></footer>
</div>
