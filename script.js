const recipes = [
  {
    name: "Paneer Butter Masala",
    image: "images/paneer_butter_masala.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "40 min",
    ingredients: "Paneer, butter, tomatoes, cream, spices",
    steps: "Cook tomatoes, blend, add butter, cream, paneer."
  },
  {
    name: "Chole (Chickpea Curry)",
    image: "images/chole.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "30 min",
    ingredients: "Chickpeas, onion, tomato, spices",
    steps: "Boil chickpeas, cook masala, mix and simmer."
  },
  {
    name: "Aloo Paratha",
    image: "images/aloo_paratha.jpg",
    author: "Kriti Rai",
    category: "Breakfast",
    time: "25 min",
    ingredients: "Potatoes, flour, spices",
    steps: "Stuff dough with spiced potatoes, roast on tawa."
  },
  {
    name: "Veg Biryani",
    image: "images/veg_biryani.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "50 min",
    ingredients: "Rice, vegetables, biryani masala",
    steps: "Cook rice, sauté veggies, layer and steam."
  },
  {
    name: "Mix Veg Curry",
    image: "images/mix_veg.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "30 min",
    ingredients: "Carrot, beans, peas, onion, tomato",
    steps: "Sauté veggies, add spices and simmer."
  },
  {
    name: "Palak Paneer",
    image: "images/palak_paneer.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "35 min",
    ingredients: "Spinach, paneer, spices",
    steps: "Blanch spinach, puree, cook with paneer."
  },
  {
    name: "Rajma (Kidney Bean Curry)",
    image: "images/rajma.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "45 min",
    ingredients: "Kidney beans, onion, tomato, spices",
    steps: "Boil rajma, prepare masala, cook together."
  },
  {
    name: "Vegetable Pulao",
    image: "images/veg_pulao.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "30 min",
    ingredients: "Rice, veggies, spices",
    steps: "Cook veggies, add rice and water, simmer."
  },
  {
    name: "Kadai Paneer",
    image: "images/kadai_paneer.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "30 min",
    ingredients: "Paneer, capsicum, onion, spices",
    steps: "Sauté veggies, add paneer, simmer with masala."
  },
  {
    name: "Malai Kofta",
    image: "images/malai_kofta.jpg",
    author: "Kriti Rai",
    category: "Main Course",
    time: "50 min",
    ingredients: "Paneer, cream, cashews, spices",
    steps: "Make koftas, cook gravy, add koftas before serving."
  }
];

// Simple login system
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("user", user);
    showRecipes();
  } else {
    document.getElementById("auth-error").textContent = "Enter all fields";
  }
}

function signup() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user && pass) {
    localStorage.setItem("user", user);
    showRecipes();
  } else {
    document.getElementById("auth-error").textContent = "Enter all fields";
  }
}

// Load recipes
function showRecipes() {
  document.getElementById("auth-section").classList.add("hidden");
  document.getElementById("recipe-section").classList.remove("hidden");

  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  recipes.forEach((dish) => {
    grid.innerHTML += `
      <div class="card">
        <img src="${dish.image}" alt="${dish.name}" />
        <h2>${dish.name}</h2>
        <p><strong>Author:</strong> ${dish.author}</p>
        <p><strong>Category:</strong> ${dish.category}</p>
        <p><strong>Time:</strong> ${dish.time}</p>
        <p><strong>Ingredients:</strong> ${dish.ingredients}</p>
        <p><strong>Steps:</strong> ${dish.steps}</p>
      </div>
    `;
  });
}

// If already logged in
if (localStorage.getItem("user")) {
  showRecipes();
}