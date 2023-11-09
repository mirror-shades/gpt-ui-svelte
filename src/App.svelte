<script>
  import ChatBot from "./components/chatbot.svelte";
  import ImageGen from "./components/imagegen.svelte";
  let chatbot = true;
</script>

<!--Navbar-->
<div class="w-full z-50 shadow-2xl flexfixed flex-col">
  <div class="navbar gap-2">
    <div class="navbar-start" />
    <div class="navbar-center">
      <button
        class={chatbot ? "btn highlight" : "btn"}
        on:click={() => (chatbot = true)}
        >Chatbot
      </button>
      <div style="width:15px" />
      <button
        class={!chatbot ? "btn highlight" : "btn"}
        on:click={() => (chatbot = false)}
      >
        ImageBot
      </button>
    </div>
    <div class="navbar-end" />
  </div>
</div>

<!--Body-->
<div class="grid z-1 h-screen place-items-center">
  <div class="card highlight w-1/2 bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      {#if chatbot}
        <ChatBot />
      {:else}
        <ImageGen />
      {/if}
    </div>
  </div>
</div>

<style>
  .navbar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .highlight {
    background-color: #041014;
  }
</style>
