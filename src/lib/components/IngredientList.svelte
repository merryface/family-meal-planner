<script>
  import Ingredient from "./Ingredient.svelte";
  let { ingredients } = $props();
</script>

<div class="list">
  {#each ingredients as ingredient}
    <Ingredient {...ingredient} />
  {/each}
</div>


<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    width: 100%;
  }
</style>