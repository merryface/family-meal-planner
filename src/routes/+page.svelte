<script>
  // components
    import NumberInput from '$lib/components/NumberInput.svelte';
    import ShoppingList from '$lib/components/ShoppingList.svelte';
    import MealLists from '$lib/components/MealLists.svelte';

    // scripts
    import mealRandomiser from '$lib/scripts/mealRandomiser';
    import shoppingListBreakdown from '$lib/scripts/shoppingListBreakdown';

    // data
    import mealLibrary from '$lib/mealLibrary.json' 
    import { mealCounts, randomMeals } from '$lib/state/meals.svelte.js'

    const mealLibraryArray = mealLibrary.meals;
    $inspect(randomMeals.meals)

    const generateMeals = () => {
      console.log('generating meals');
      randomMeals.updateRandomMeals(mealCounts.total, mealCounts.withTarik, mealLibraryArray);
      if (!randomMeals.meals) return;

      randomMeals.updateShoppingList();
    }

</script>

<h1>Family Meal Planner</h1>

<div class="form">
    <NumberInput label="Meals to Generate" meals={mealCounts.total} inc={() => mealCounts.total+=1} dec={() => mealCounts.total-=1} />
    <NumberInput label="Meals Tarik is Home" meals={mealCounts.withTarik} inc={() => mealCounts.withTarik+=1} dec={() => mealCounts.withTarik-=1}  />
    <button onclick={() => generateMeals()}>Generate Meals</button>
</div>


{#if randomMeals.meals.mealListSolo.length > 0 || randomMeals.meals.mealListWithTarik.length > 0}
  <ShoppingList />
  <MealLists />
{/if}

<style>
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>