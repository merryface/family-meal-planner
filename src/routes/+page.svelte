<script>
  // components
    import NumberInput from '$lib/components/NumberInput.svelte';
    import ShoppingList from '$lib/components/ShoppingList.svelte';
    import MealLists from '$lib/components/MealLists.svelte';
    import { onMount } from 'svelte';

    // scripts
    import mealRandomiser from '$lib/scripts/mealRandomiser';
    import shoppingListBreakdown from '$lib/scripts/shoppingListBreakdown';

    // data
    import mealLibrary from '$lib/mealLibrary.json' 
    import { mealCounts, randomMeals } from '$lib/state/meals.svelte.js'

    const mealLibraryArray = mealLibrary.meals;

    const generateMeals = () => {
    console.log('generating meals');
    // Update the random meals based on the current meal counts and library.
    randomMeals.updateRandomMeals(mealCounts.total, mealCounts.withTarik, mealLibraryArray);
    
    // Check that there are meals generated.
    if (!randomMeals.meals || randomMeals.meals.length === 0) return;

    // Update the shopping list based on the generated meals.
    randomMeals.updateShoppingList();

    // Package the current meal and shopping list data.
    const mealPlannerData = {
      meals: randomMeals.meals,
      // Assuming your store sets a property for the shopping list.
      shoppingList: randomMeals.shoppingList
    };

    // Save the data as a JSON string in local storage.
    localStorage.setItem('mealPlannerData', JSON.stringify(mealPlannerData));
  };

  const clearAllMeals = () => {
    // Clear the random meals and shopping list.
    randomMeals.meals = [];
    randomMeals.shoppingList = [];
    mealCounts.total = 0;
    mealCounts.withTarik = 0;

    // Remove the saved meal planner data from local storage.
    localStorage.removeItem('mealPlannerData');
  }

    // onMount: load saved meal planner data (if any) from local storage
    onMount(() => {
    const savedData = localStorage.getItem('mealPlannerData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Update the randomMeals state with the loaded data
        // Adjust these assignments based on your store's API
        randomMeals.meals = parsedData.meals;
        randomMeals.shoppingList = parsedData.shoppingList;
      } catch (error) {
        console.error('Failed to parse saved meal planner data:', error);
      }
    }
  });

</script>

<h1>Family Meal Planner</h1>

<div class="form">
    <NumberInput label="Meals to Generate" meals={mealCounts.total} inc={() => mealCounts.total+=1} dec={() => mealCounts.total-=1} />
    <NumberInput label="Meals Tarik is Home" meals={mealCounts.withTarik} inc={() => mealCounts.withTarik+=1} dec={() => mealCounts.withTarik-=1}  />
    <button onclick={generateMeals}>Generate Meals</button>
</div>


{#if Object.keys(randomMeals.meals).length > 0}
  <ShoppingList />
  <MealLists />
  
  <button class="warning" onclick={clearAllMeals}>Clear All Meals</button>
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
    border: 2px solid #adacac;
    border-radius: 3px;
    padding: 0.5rem;
    width: 90%;
    max-width: 400px;
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

  .warning {
    background-color: #f44336;
  }
</style>