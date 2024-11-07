let errorMessage = '';

const validateIngredients = () => {
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

    // if ingredientList has at least one value, return the value
    // if ingredientList does not have values in it, return an error message
    if (ingredientsList.length > 0) {
        return ingredientsList;
    } else {
        // append an error message
        errorMessage = errorMessage 
            ? `${errorMessage} Please add at least one ingredient.` 
            : `Please add at least one ingredient.`;
    }

    return ingredientsList;
}

const validateInput = (id) => {
    // grab form element's value
    const formValue = document.getElementById(id).value;

    // if formValue has a value, return that value
    // if formValue is an empty string, return an error message
    if (Boolean(formValue)) {
        return formValue;
    } else {
        // append an error message
        errorMessage = errorMessage ? `${errorMessage} Please add ${id}.` : `Please add ${id}.`;
    }
}

const handleSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault();

    // clear out previous submit's error message
    errorMessage = '';

    // get form values
    const emailValue = validateInput('email');
    const dateValue = validateInput('date');
    const nameValue = validateInput('recipe-name');
    const ingredientsValue = validateIngredients();
    const categoryValue = validateInput('category');

    // show the error message and don't let folks save if values are missing
    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
    } else {
        document.getElementById('error-message').textContent = '';

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

}

document.getElementById('submit-button').addEventListener('click', handleSubmit, false);