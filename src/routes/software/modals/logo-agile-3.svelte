<script>
  import { closeModal } from 'svelte-modals';
  import logoAgile3 from '../images/design/logo-agile-3.png';
  export let isOpen;
</script>

{#if isOpen}
<div role="dialog" class="modal-container">
  <div class="modal">
    <header>
      <h3>Exercise in logo design</h3>
    </header>
    <section>
      <img src={logoAgile3} />
    </section>
    <footer>
      <button on:click={closeModal}>Close</button>
    </footer>
  </div>
</div>
{/if}

<style>

</style>
