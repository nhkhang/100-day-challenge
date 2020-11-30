mealContainer = document.getElementById("meal");

document.getElementById("btnGetMeal").addEventListener("click", function() {
    getMeal();
});

async function getMeal() {
    console.log("get meal");
    meal = await getRandomMeal();
    await setMeal(meal);
}

async function getRandomMeal() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    const randomMeal = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error('fetch failed'));

    console.log(randomMeal.meals[0])
    return randomMeal.meals[0]
}

async function setMeal(meal) {
    var mealImg = mealContainer.querySelector("#meal__img");
    mealImg.src = meal.strMealThumb;
    mealImg.style.display = "block";
    mealContainer.querySelector("#meal__name").innerHTML = meal.strMeal;
    mealContainer.querySelector("#meal__category").innerHTML = `Category: ${meal.strCategory}`;
}