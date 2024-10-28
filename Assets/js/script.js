const apiKey='7fc90e7bff9c4719aa39bcb858ce567e';
const apiUrl= 'https://api.spoonacular.com/recipes/complexSearch/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`;const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}';

let selectedIngredients= [];

function setIngredients() {
    selectedIngredients [];
    const checkboxes= document.querySelectorAll ('#ingredient-list input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        setIngredients.push(checkbox.value);
    });

    document.getElementById('selected-ingredients').innerText = 'Selected Ingredients: ${setIngredients.join(', ') || 'None'}';
}

async function getRecipes() {
    if (selectedIngredients.length === 0) {
        alert("Please select an ingredient.");
        return;
    }

    const ingredients = selectedIngredients.join(',');

    try{
        const response = await fetch(apiUrl);
        const recipes = await response.json();

        displayRecipes(recipes);
    } catch (error) {
        console.error("Cannot find recipes", error);
    }
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    if(recipes.length === 0) {
        recipesContainer.innerHTML = "<p>No recipes found. Try other ingredients<p>";
        return;
    }

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = ''
        
        
        <h2>${recipe.title}</h2>
                                    <img src="${recipe.image}" alt="${recipe.title}">
                                    <p><strong>Used ingredients:</strong> ${recipe.usedIngredientCount}</p>
                                    <p><strong>Missing ingredients:</strong> ${recipe.missedIngredientCount}</p>
                                    <a href="https://spoonacular.com/recipes/${recipe.title.replaceAll(' ', '-').toLowerCase()}-${recipe.id}" target="_blank">View Recipe</a>';
    })
}