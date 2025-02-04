<script>
  let { meals, header } = $props()
</script>


<div class="mealList">
    <h2>{header}</h2>
    {#each meals as meal}
        <div class="meal">
            <a href={meal.mealURL}>
                <span>{meal.mealName}</span>
            </a>
        </div>
    {/each}
</div>