<script>
  import Ingredient from "./Ingredient.svelte";
  let { ingredients } = $props();
</script>

<div class="list">
  {#each ingredients as ingredient}
    <Ingredient {...ingredient} />
  {/each}
</div>