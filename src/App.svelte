<script>
  let url;
  let downloadUrl;

  const onSubmit = () => {
    // https://dmitripavlutin.com/parse-url-javascript/
    const id = new URL(url).pathname.split("/")[3];

    downloadUrl = `https://drive.google.com/uc?export=download&id=${id}`;
  };
</script>

<!-- https://hypercolor.dev/ -->
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
      <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url -->
      <!-- https://regex101.com/ https://regex101.com/r/ZQbU2n/1 -->
      <!-- https://stackoverflow.com/questions/23224590/regex-to-modify-google-drive-shared-file-url -->
      <div>
        <label for="url" class="sr-only">Google Drive link</label>
        <div class="relative">
          <input
            type="url"
            name="url"
            id="url"
            pattern="https://drive\.google\.com/file/d/.*?/view\?usp=sharing"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="https://drive.google.com/file/d/<ID>/view?usp=sharing"
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

      <!-- https://tailwindcss.com/docs/hover-focus-and-other-states -->
      <button type="submit" class="bg-sendstack-one hover:bg-sendstack-two"
        >Generate</button
      >
    </form>

    {#if downloadUrl}
      <p>{downloadUrl}</p>
    {/if}
  </div>
</main>
