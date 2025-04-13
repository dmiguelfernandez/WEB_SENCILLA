let loginForm = document.querySelector(".aside_login");
let inputName = document.querySelector("#name");
let inpuEmail = document.querySelector("#email");
let inputPass = document.querySelector("#pass");
let asideData = document.querySelector(".aside_data");
let dataName = document.querySelector(".data_name");
let dataLogout = document.querySelector(".data_logout");
let user = {};

let getUser = () => {
  let userToShow = localStorage.getItem("user");
  if (userToShow) {
    let identity = JSON.parse(userToShow);
    dataName.innerHTML = identity.name;
    loginForm.classList.add("aside_login-hide");
    asideData.classList.remove("aside_data-hide");
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Recoger el form
  let name = inputName.value;
  let email = inpuEmail.value;
  let pass = inputPass.value;

  // Comprobar que todo esta relleno
  if (name && email && pass) {
    user = { name, email, pass };
    // Guardar localStorage
    localStorage.setItem("user", JSON.stringify(user));
    // Mostrar datos user
    getUser();
    // Vaciar form
    loginForm.reset();
  }
});

dataLogout.addEventListener("click", (e) => {
  console.log("object");
  e.preventDefault();
  loginForm.reset();
  localStorage.clear();
  loginForm.classList.remove("aside_login-hide");
  asideData.classList.add("aside_data-hide");
});

// Nada mas comenzar la app
getUser();
