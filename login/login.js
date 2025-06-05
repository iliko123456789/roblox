document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "admin" && password === "admin") {
      window.location.href = "../home/home.html";
    } else {
      alert("Invalid login!");
    }
  });
  
  const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector('.submit-btn');

const usernameError = document.createElement('div');
usernameError.style.color = 'red';
usernameError.style.fontSize = '12px';
usernameError.style.marginTop = '4px';
usernameInput.insertAdjacentElement('afterend', usernameError);

const passwordError = document.createElement('div');
passwordError.style.color = 'red';
passwordError.style.fontSize = '12px';
passwordError.style.marginTop = '4px';
passwordInput.insertAdjacentElement('afterend', passwordError);

function validateUsername() {
  const username = usernameInput.value.trim();
  if (!username) {
    usernameError.textContent = "Username is required.";
    return false;
  }
  usernameError.textContent = "";
  return true;
}

function validatePassword() {
  const pw = passwordInput.value;
  if (!pw) {
    passwordError.textContent = "Password is required.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

function validateForm() {
  const usernameValid = validateUsername();
  const passwordValid = validatePassword();
  submitBtn.disabled = !(usernameValid && passwordValid);
}

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    window.location.href = '../home/home.html';
  }
});
