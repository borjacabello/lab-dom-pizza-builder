// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach( (eachMushroom) => {
    if (state.mushrooms) {
      eachMushroom.style.visibility = 'visible';
    } else {
      eachMushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach( (eachPepper) => {
    if (state.greenPeppers) {
      eachPepper.style.visibility = "visible";
    } else {
      eachPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  let whiteSauceDOM = document.querySelector(".sauce");

  if (state.whiteSauce) {
    whiteSauceDOM.classList.add("sauce-white");
  } else {
    whiteSauceDOM.classList.remove("sauce-white");
  }

}

function renderGlutenFreeCrust() {
  let crustDOM = document.querySelector(".crust");

  if (state.glutenFreeCrust) {
    crustDOM.classList.add("crust-gluten-free");
  } else {
    crustDOM.classList.remove("crust-gluten-free");
  }

}

 // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  let pepeperoniButton = document.querySelector('.btn-pepperoni')
  let mushroomButton = document.querySelector('.btn-mushrooms')
  let pepperButton = document.querySelector('.btn-green-peppers')
  let sauceButton = document.querySelector('.btn-sauce')
  let crustButton = document.querySelector('.btn-crust')

  if (state.pepperoni) {
    pepeperoniButton.classList.add("active")
  } else {
    pepeperoniButton.classList.remove("active")
  }

  if (state.mushrooms) {
    mushroomButton.classList.add("active")
  } else {
    mushroomButton.classList.remove("active")
  }

  if (state.greenPeppers) {
    pepperButton.classList.add("active")
  } else {
    pepperButton.classList.remove("active")
  }

  if (state.whiteSauce) {
    sauceButton.classList.add("active")
  } else {
    sauceButton.classList.remove("active")
  }

  if (state.crust) {
    crustButton.classList.add("active")
  } else {
    crustButton.classList.remove("active")
  }
}

function renderPrice() {
  let panelDOM = document.querySelector(".panel ul");
  panelDOM.innerHTML = "";

  // creo que haría un bucle que en función de state añadiese elementos html pero no acabo de verlo

  //console.log(panelDOM.innerHTML)
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
})
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
