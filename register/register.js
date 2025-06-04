// Populate Day options
const daySelect = document.getElementById('day');
daySelect.innerHTML = '<option value="">Day</option>';
for (let i = 1; i <= 31; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Populate Month options
const monthSelect = document.getElementById('month');
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];
monthSelect.innerHTML = '<option value="">Month</option>';
months.forEach((month, index) => {
    monthSelect.innerHTML += `<option value="${index + 1}">${month}</option>`;
});

// Populate Year options
const yearSelect = document.getElementById('year');
yearSelect.innerHTML = '<option value="">Year</option>';
for (let y = 2025; y >= 1926; y--) {
    yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
}

// Handle gender selection
document.querySelectorAll('.gender-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        validateForm();
    });
});

// Form validation logic
function validateForm() {
    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const day = document.querySelector('select[name="day"]').value;
    const month = document.querySelector('select[name="month"]').value;
    const year = document.querySelector('select[name="year"]').value;
    const genderSelected = document.querySelector('.gender-btn.selected');

    const isFilled = username && password && day && month && year && genderSelected;
    document.querySelector('.submit-btn').disabled = !isFilled;
}

// Listen for input changes
document.addEventListener('input', validateForm);
