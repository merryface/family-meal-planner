<script>
    // components
    import { randomMeals } from '$lib/state/meals.svelte.js'
    import MealList from './MealList.svelte';
  </script>
  
  <h1>Meals</h1>
  
  <div class="mealList">
    <MealList meals={randomMeals.meals.mealListSolo} header="Meals when Tarik on Tour" />
    <MealList meals={randomMeals.meals.mealListWithTarik} header="Meals when Tarik home" />
  </div>