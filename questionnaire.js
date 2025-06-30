// form-save.js
const form = document.getElementById('questionnaire-form');
const saveBtn = document.getElementById('saveBtn');
const storageKey = 'questionnaireData';

// Restore saved data on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem(storageKey));
    if (savedData) {
        if (confirm("Restore your saved progress?")) {
            Object.entries(savedData).forEach(([key, value]) => {
                const field = form.elements[key];
                if (field) field.value = value;
            });
        }
    }
});

function saveFormData() {
    const data = {};
    [...form.elements].forEach(el => {
        if (el.name) data[el.name] = el.value;
    });
    localStorage.setItem(storageKey, JSON.stringify(data));
}

// Save form data on input
// form.addEventListener('input', saveFormData);

// Save button functionality
saveBtn.addEventListener('click', () => {
    saveFormData();
    alert('Saved! You can come back later and continue.');
});

// Clear saved data on form submission
form.addEventListener('submit', () => {
    localStorage.removeItem(storageKey);
});
