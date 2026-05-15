const registerForm = document.getElementById("registerForm");

if(registerForm){

  registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("regName")
      .value
      .trim();

    const email = document.getElementById("regEmail")
      .value
      .trim()
      .toLowerCase();

    const password = document.getElementById("regPassword")
      .value
      .trim();

    const allowedDomain = "@cu.com";

    if(!email.endsWith(allowedDomain)){

      alert("Only university email is allowed");
      return;

    }

    const user = {

      name,
      email,
      password

    };

    let users = JSON.parse(
      localStorage.getItem("users")
    ) || [];

    const alreadyExists = users.find(user =>

      user.email === email

    );

    if(alreadyExists){

      alert("User already registered");
      return;

    }

    users.push(user);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    alert("Registration Successful");

    window.location.href = "index.html";

  });

}

const loginForm = document.getElementById("loginForm");

if(loginForm){

  loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("loginEmail")
      .value
      .trim()
      .toLowerCase();

    const password = document.getElementById("loginPassword")
      .value
      .trim();

    let users = JSON.parse(
      localStorage.getItem("users")
    ) || [];

    const validUser = users.find(user =>

      user.email.toLowerCase() === email &&
      user.password === password

    );

    if(validUser){

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(validUser)
      );

      alert("Login Successful");

      window.location.href = "index.html";

    }

    else{

      alert("Invalid Email or Password");

    }

  });

}

const currentPage = window.location.pathname
  .split("/")
  .pop();

const publicPages = [

  "login.html",
  "register.html"

];

const loggedInUser = localStorage.getItem(
  "loggedInUser"
);

if(

  !loggedInUser &&
  !publicPages.includes(currentPage)

){

  window.location.href = "login.html";

}

function logout(){

  localStorage.removeItem("loggedInUser");

  window.location.href = "login.html";

}

const welcomeUser = document.getElementById(
  "welcomeUser"
);

if(welcomeUser){

  const user = JSON.parse(

    localStorage.getItem("loggedInUser")

  );

  if(user){

    welcomeUser.innerText =

      "Welcome, " + user.name;

  }

}