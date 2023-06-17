const nameRegex = /^[a-zA-Z]{2,}$/;

function setErrorMessage(formControl, errorMessage) {
  const errorSpan = formControl.nextElementSibling;
  errorSpan.textContent = errorMessage;
  errorSpan.style.display = 'block';
  formControl.classList.add('error');
}

function clearErrorMessage(formControl) {
  const errorSpan = formControl.nextElementSibling;
  errorSpan.textContent = '';
  errorSpan.style.display = 'none';
  formControl.classList.remove('error');
}

function validateInput(input, regex, errorMessage) {
  if (!regex.test(input)) {
    return errorMessage;
  }
  return '';
}

function handleInputChange(formControl, regex, errorMessage) {
  const input = formControl.value.trim();
  const error = validateInput(input, regex, errorMessage);
  if (error) {
    setErrorMessage(formControl, error);
  } else {
    clearErrorMessage(formControl);
  }
}

function addErrorReset(formControl, regex, errorMessage) {
  formControl.addEventListener('input', () => {
    handleInputChange(formControl, regex, errorMessage);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('info_form');

  const firstNameControl = document.getElementById('firstName');
  addErrorReset(firstNameControl, nameRegex, 'Minimum 2 characters');

  const lastNameControl = document.getElementById('lastName');
  addErrorReset(lastNameControl, nameRegex, 'Minimum 2 characters');

  const genderRadios = Array.from(document.getElementsByName('gender'));

  const petCheckboxes = Array.from(document.querySelectorAll('.pet_checkbox'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    handleInputChange(firstNameControl, nameRegex, 'Minimum 2 characters');
    handleInputChange(lastNameControl, nameRegex, 'Minimum 2 characters');

    const selectedPets = petCheckboxes.filter(checkbox => checkbox.checked);
    const petError = document.getElementById('pet_error_msg');

    if (selectedPets.length < 1) {
      petError.textContent = 'Please select at least one pet';
      petError.style.display = 'block';
    } else if (selectedPets.length > 2) {
      petError.textContent = 'Please select no more than two pets';
      petError.style.display = 'block';
    } else {
      petError.style.display = 'none';
    }

    const selectedGender = genderRadios.find(radio => radio.checked);
    const genderError = document.getElementById('gender_error_msg');
    if (!selectedGender) {
      genderError.textContent = 'Please select a gender.';
      genderError.style.display = 'block';
    } else {
      genderError.style.display = 'none';
    }

    const errorControls = Array.from(form.querySelectorAll('.error'));
    if (
      errorControls.length === 0 &&
      petError.style.display === 'none' &&
      genderError.style.display === 'none'
    ) {
      form.submit();
    } else {
      alert('Please fill out all information correctly.');
    }
  });
});
