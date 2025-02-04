export default (totalMeals, mealsWithTarik, goustoMeals) => {
    let cancelled = true;
    if (totalMeals < mealsWithTarik) {
        alert('Total meals must be greater than or equal to meals with Tarik Home');
        return []
    }

    if (totalMeals === 0) {
        alert('Total meals must be greater than 0');
        return []
    }

    if (totalMeals > 0) cancelled = false;
    if (cancelled) return [];

    if (!cancelled) {

        
        const soloMeals = totalMeals - mealsWithTarik;
        
        // Randomly select meals with Tarik Home
        const mealListWithTarik = randomMealSelector(mealsWithTarik, goustoMeals);
        
        // Randomly select solo meals
        const mealListSolo = randomMealSelector(soloMeals, goustoMeals);
        
        return {
            mealListWithTarik,
            mealListSolo
        }
    }
}


function randomMealSelector(numberOfMeals, mealsArray) {
    const mealList = [];

    for (let i = 0; i < numberOfMeals; i+=1) {
        // Randomly select a meal from the goustoMeals array
        const mealIndex = Math.floor(Math.random() * mealsArray.length);
        const meal = mealsArray[mealIndex];

        // Add meal to tarikMeals array
        mealList.push(meal);
        
        // Remove meal from goustoMeals array
        mealsArray.splice(mealIndex, 1);
    }

    return mealList;
}

