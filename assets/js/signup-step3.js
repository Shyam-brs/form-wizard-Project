// Date and time picker
let dateToday = new Date();

$(function () {
  $("#date_picker").dtpicker({ minDate: dateToday });
});

function validateAge() {
  var ageSelect = document.getElementById("ageDropdown");
  var selectedAge = ageSelect.options[ageSelect.selectedIndex].value;
  var age = parseInt(selectedAge);

  if (age < 18) {
    return false;
  } else if (isNaN(age)) {
    return false;
  } else {
    alert("Welcome! Proceeding to the next page...");
    return true;
  }
}

function checkEligibility() {
  var ageDropdown = document.getElementById("ageDropdown");
  var selectedAge = ageDropdown.value;
  var eligibilityMessage = document.getElementById("eligibilityMessage");

  // Check if age is less than 18 or no option is selected
  if (parseInt(selectedAge) < 18) {
    ageDropdown.style.border = "1px solid red";
    eligibilityMessage.innerText = "You are not eligible to vote.";
    return false;
  }
  if (selectedAge === "") {
    ageDropdown.style.border = "1px solid red";
    eligibilityMessage.innerText =
      "Please select your age group from the dropdown menu.";
  } else {
    ageDropdown.style.border = "1px solid #ccc";
    eligibilityMessage.innerText = "You are eligible to vote!";
    return true;
  }
}
window.onclick = function () {
  checkEligibility();
};
// Signup step 3 - dropdown menu
function validateDropdown() {
  // Get the selected value from the dropdown
  var dropdown = document.getElementById("ageDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;

  // Compare the selected value to the required value
  if (selectedOption == "requiredOption") {
    // Display an error message
    document.getElementById("errorDropdown").style.display = "block";
    return false;
  } else {
    // Clear any error message
    document.getElementById("errorDropdown").style.display = "none";
    return true;
  }
}
