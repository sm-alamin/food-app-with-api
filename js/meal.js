// const loadMeals = (mealId) =>{
//     const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals))
    
// }
//best way to fetch data
const loadMeals = async(mealId) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`;
    try{
    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.meals);
    }
    catch(error) {
        console.log(error);
    }

}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src="${meal.strMealThumb}" alt="Movie"/></figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions justify-end">
                <!-- The button to open modal -->
                <label onclick="showDetails(${meal.idMeal})" for="my-modal-6" class="btn">Details</label>
                </div>
            </div>
        </div>
        `

        mealsContainer.appendChild(div);
        if (meals.length > 6) {
            const showBtn = document.getElementById('show-all-btn');
            showBtn.classList.remove('hidden');
        } else {
            
        }
    });
}

const searchMeal =() =>{
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
}
// const showDetails = idMeal => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayDetails(data.meals[0]))
// }
//best way to fetch data
const showDetails = async(idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayDetails(data.meals[0]);
    } catch (error) {
        console.log(error)
    }

     
}
const displayDetails = meal =>{
    const detailsTitle = document.getElementById('details-title');
    const detailsBody = document.getElementById('details-body');
    detailsTitle.innerText = meal.strMeal;
    detailsBody.innerHTML =`
        <img class="w-full h-full" src="${meal.strMealThumb}" alt="">
        <h3><span class="font-bold">Category</span>: ${meal.strCategory}</h3>
        <h3><span class="font-bold">Area</span>: ${meal.strArea}</h3>
        <p>Instruction: ${meal.strInstructions}</p>
        <p><span class="font-bold">Youtube</span>: ${meal.strYoutube}</p>
    `
}
loadMeals('rice')