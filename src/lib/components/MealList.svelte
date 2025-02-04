<script>
  let { meals, header } = $props()
</script>


<div class="mealList">
    <h2>{header}</h2>
    {#each meals as meal}
        <a href={meal.mealURL} class="meal" target="_blank">
            <span>{meal.mealName}</span>
            {#if meal.mealURL === ''}
                <span>⛓️‍💥</span>
            {/if}
        </a>
    {/each}
</div>


<style>
    .mealList {
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .meal {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
        border: 2px solid #007b02;
        border-radius: 5px;
        text-decoration: none;
        color: #ededed;
        background-color: #5b9739;
    }
</style>