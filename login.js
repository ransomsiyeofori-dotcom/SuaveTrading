// toggle menu //
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

let open = false;

menu.addEventListener("click", () => {
  open = !open;

  nav.classList.toggle("active");

  // change icon
  menu.textContent = open ? "close" : "menu";
});

// form validation //
   const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const spinner = document.getElementById("spinner");

form.addEventListener("submit", function(e){
e.preventDefault();

let valid = true;

// Clear old errors
emailError.textContent = "";
passwordError.textContent = "";

// Email validation
if(email.value.trim() === ""){
emailError.textContent = "Email is required";
valid = false;
} else if(!email.value.includes("@")){
emailError.textContent = "Enter a valid email";
valid = false;
}

// Password validation
if(password.value.trim() === ""){
passwordError.textContent = "Password is required";
valid = false;
} else if(password.value.length < 8){
passwordError.textContent = "Password must be at least 8 characters";
valid = false;
}

if(valid){

btnText.textContent = "Signing in...";
spinner.style.display = "inline-block";
submitBtn.disabled = true;

setTimeout(()=>{
alert("Login successful!");
form.submit();
},2000);

}

});