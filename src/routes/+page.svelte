<script>
  // components
    import NumberInput from '$lib/components/NumberInput.svelte';
    import ShoppingList from '$lib/components/ShoppingList.svelte';

    // scripts
    import mealRandomiser from '$lib/scripts/mealRandomiser';
    import shoppingListBreakdown from '$lib/scripts/shoppingListBreakdown';

    // data
    import mealLibrary from '$lib/mealLibrary.json' 
    import { mealCounts, randomMeals } from '$lib/state/meals.svelte.js'

    const mealLibraryArray = mealLibrary.meals;
    $inspect(randomMeals.meals)
    $inspect(randomMeals.shoppingList)

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

<ShoppingList />

