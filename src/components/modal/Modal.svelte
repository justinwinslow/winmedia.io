<script>
  import { closeModal } from 'svelte-modals';
  export let isOpen;

  export let header;
  export let description;
  export let image;
</script>

{#if isOpen}
<div role="dialog" class="modal-container">
  <div class="modal">
    <header>
      <h3>{header}</h3>
      <span class="close" on:click={closeModal}>Close</span>
    </header>
    <section>
      {#if description}
      <p>{description}</p>
      {/if}
      <img src={image} />
    </section>
    <footer>
      <button on:click={closeModal}>Close</button>
    </footer>
  </div>
</div>
{/if}

<style>

:global(.modal-backdrop) {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.50)
}

.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  /* allow click-through to backdrop */
  pointer-events: none;
}

.modal {
  background: #fff;
  min-width: 240px;
  max-width: 75%;
  border-radius: 6px;
  pointer-events: auto;
}

.modal header {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  padding: 0 0 0 var(--padding-default);
  display: flex;
  border-radius: 6px 6px 0 0;
}

.modal header h3 {
  flex: 1;
  font-size: 24px;
  line-height: 72px;
  margin: 0;
  font-weight: bold;
  padding-right: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.modal header .close {
  flex: 0 0 72px;
  height: 72px;
  line-height: 72px;
  width: 72px;
  text-align: center;
  color: #fff;
  background-color: rgba(0,0,0,0.1);
  font-size: 0;
  cursor: pointer;
}

.modal header .close:before {
  font-family: Icons;
  display: inline-block;
  vertical-align: middle;
  content: '\e5cd';
  font-size: 24px;
}

.modal section {
  padding: var(--padding-default);
  padding-bottom: 0;
  display: block;
  color: var(--color-text-dark);
}

.modal section img {
  max-width: 100%;
  max-height: 480px;
}

.modal footer {
  padding: var(--padding-default);
  display: flex;
  justify-content: flex-end;
}
</style>
