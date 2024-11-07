const getIngredientsValue = () => {
    // get ingredient values from form
    const fruitCheckbox = document.getElementById('ingredients-fruit');
    const veggieCheckbox = document.getElementById('ingredients-vegetables');
    const grainsCheckbox = document.getElementById('ingredients-grains');
    const dairyCheckbox = document.getElementById('ingredients-dairy');
    
    // add ingredients to array
    const ingredientsList = [];
    if (fruitCheckbox.checked) ingredientsList.push(fruitCheckbox.value);
    if (veggieCheckbox.checked) ingredientsList.push(veggieCheckbox.value);
    if (grainsCheckbox.checked) ingredientsList.push(grainsCheckbox.value);
    if (dairyCheckbox.checked) ingredientsList.push(dairyCheckbox.value);

    return ingredientsList;
}

const handleSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault();

    // get form values
    const emailValue = document.getElementById('email').value;
    const dateValue = document.getElementById('date').value;
    const nameValue = document.getElementById('recipe-name').value;
    const ingredientsValue = getIngredientsValue();
    const categoryValue = document.getElementById('category').value;

    // add form values to recipe object
    const recipe = {
        email: emailValue,
        date: dateValue,
        name: nameValue,
        ingredients: ingredientsValue,
        category: categoryValue,
    };

    // save serialized recipe object to session storage
    sessionStorage.setItem('recipe', JSON.stringify(recipe));
}

// add event listener to submit button
document.getElementById('submit-button').addEventListener('click', handleSubmit, false);