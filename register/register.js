const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const submitBtn = document.querySelector('.submit-btn');
const genderButtons = document.querySelectorAll('.gender-btn');

const usernameError = document.createElement('div');
usernameError.style.color = 'red';
usernameError.style.fontSize = '12px';
usernameError.style.marginTop = '4px';
usernameInput.insertAdjacentElement('afterend', usernameError);

const dateError = document.createElement('div');
dateError.style.color = 'red';
dateError.style.fontSize = '12px';
dateError.style.marginTop = '4px';
usernameError.insertAdjacentElement('afterend', dateError);

const passwordError = document.createElement('div');
passwordError.style.color = 'red';
passwordError.style.fontSize = '12px';
passwordError.style.marginTop = '4px';
passwordInput.insertAdjacentElement('afterend', passwordError);

const forbiddenUsernames = [
  "admin", "administrator", "roblox", "moderator", "mod",
  "staff", "support", "null", "undefined", "player"
];

daySelect.innerHTML = '<option value="">Day</option>';
for (let i = 1; i <= 31; i++) {
  daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
monthSelect.innerHTML = '<option value="">Month</option>';
months.forEach((month, idx) => {
  monthSelect.innerHTML += `<option value="${idx + 1}">${month}</option>`;
});

yearSelect.innerHTML = '<option value="">Year</option>';
for (let y = 2025; y >= 1926; y--) {
  yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
}

genderButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    genderButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    validateForm();
  });
  btn.addEventListener('click', validateForm);
});

function validateUsername() {
  const username = usernameInput.value.trim();
  const lower = username.toLowerCase();

  if (!username) {
    usernameError.textContent = "Username is required.";
    return false;
  }
  if (username.length < 3 || username.length > 20) {
    usernameError.textContent = "Username must be 3–20 characters.";
    return false;
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    usernameError.textContent = "Only letters, numbers, and underscores allowed.";
    return false;
  }
  if (/_{2,}/.test(username)) {
    usernameError.textContent = "Cannot have two underscores in a row.";
    return false;
  }
  if (/^\d+$/.test(username)) {
    usernameError.textContent = "Username cannot be only numbers.";
    return false;
  }
  if (forbiddenUsernames.includes(lower)) {
    usernameError.textContent = "That username is not allowed.";
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
  if (pw.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    return false;
  }
  if (pw.length > 200) {
    passwordError.textContent = "Password must be less than 200 characters.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

function validateBirthday() {
  const day = daySelect.value;
  const month = monthSelect.value;
  const year = yearSelect.value;
  if (!day || !month || !year) {
    dateError.textContent = "Please select Day, Month, and Year first.";
    return false;
  }
  dateError.textContent = "";
  return true;
}

function validateForm() {
  const birthdayValid = validateBirthday();
  const usernameValid = validateUsername();
  const passwordValid = validatePassword();
  const genderSelected = document.querySelector('.gender-btn.selected');
  submitBtn.disabled = !(birthdayValid && usernameValid && passwordValid && genderSelected);
}

daySelect.addEventListener('change', validateForm);
monthSelect.addEventListener('change', validateForm);
yearSelect.addEventListener('change', validateForm);
document.addEventListener('input', validateForm);

const form = document.querySelector('form.Sign_up_div');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!submitBtn.disabled) {
    window.location.href = '../home/home.html';
  }
});
