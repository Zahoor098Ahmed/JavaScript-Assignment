var email = document.getElementById("email");
var password = document.getElementById("password");
var signup_name = document.getElementById("signup_name");
var signup_email = document.getElementById("signup_email");
var signup_password = document.getElementById("signup_password");
var signup_confirm_password = document.getElementById("signup_confirm_password");
var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var signup_container = document.getElementById("signup_container");
var home_container = document.getElementById("home_container");
var note = document.getElementById("note");

function showLogin() {
  signup_container.classList.add('hidden');
  login_container.classList.remove('hidden');
}

function showSignup() {
  login_container.classList.add('hidden');
  signup_container.classList.remove('hidden');
}

function signupUser() {
  if (!signup_name.value || !signup_email.value || !signup_password.value || !signup_confirm_password.value) {
    return alert("Please fill out all fields.");
  }

  if (signup_password.value !== signup_confirm_password.value) {
    return alert("Passwords do not match.");
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];
  
  var userExists = users.some(user => user.email === signup_email.value);
  if (userExists) {
    return alert("Email already exists. Please log in.");
  }

  var newUser = {
    name: signup_name.value,
    email: signup_email.value,
    password: signup_password.value
  };
  
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  
  alert("Signup successful. Please log in.");
  showLogin();
}

function loginUser() {
  if (!email.value || !password.value) {
    return alert("Please add email and password.");
  }
  
  var users = JSON.parse(localStorage.getItem("users")) || [];
  
  var user = users.find(user => user.email === email.value && user.password === password.value);
  if (!user) {
    return alert("Invalid email or password.");
  }

  localStorage.setItem("email", email.value);
  localStorage.setItem("name", user.name);
  checkIsUserLogin();
}

function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  var name = localStorage.getItem("name");
  if (email) {
    login_container.classList.add('hidden');
    signup_container.classList.add('hidden');
    home_container.classList.remove('hidden');
    user_email.innerText = name ? `Hello, ${name}` : email;
    displayUserNotes();
  } else {
    login_container.classList.remove('hidden');
    home_container.classList.add('hidden');
  }
}

checkIsUserLogin();

function logout() {
  localStorage.removeItem("email");
  localStorage.removeItem("name");
  checkIsUserLogin();
}

function submitNote() {
  var email = localStorage.getItem("email");
  var obj = {
    email: email,
    note: note.value,
  };
  saveValueToLocalStorage(obj);
  note.value = "";
}

function saveValueToLocalStorage(obj) {
  var notes = localStorage.getItem("notes");
  if (notes) {
    notes = JSON.parse(notes);
    notes.push(obj);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    notes = [obj];
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  displayUserNotes();
}

function displayUserNotes() {
  var notes = localStorage.getItem("notes");
  var list = document.getElementById("list");
  var currentUserEmail = localStorage.getItem("email");

  if (notes) {
    list.innerHTML = "";
    notes = JSON.parse(notes);
    notes.forEach(function(noteObj) {
      if (noteObj.email === currentUserEmail) {
        var li = document.createElement("li");
        li.textContent = noteObj.note;
        list.appendChild(li);
      }
    });
  }
}


