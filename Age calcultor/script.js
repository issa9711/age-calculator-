// Get references to HTML elements
const btnEl = document.getElementById("btn");       // Button element
const birthdayEl = document.getElementById("birthday"); // Input element for birthday
const resultEl = document.getElementById("result");   // Result paragraph element

// Function to calculate age based on the entered birthday
function calculateAge() {
  // Retrieve the value of the entered birthday
  const birthdayValue = birthdayEl.value;

  // Check if the birthday is not entered
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    // Calculate age using the getAge function
    const age = getAge(birthdayValue);

    // Display the calculated age in the result paragraph
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Function to calculate age based on the provided birthday value
function getAge(birthdayValue) {
  // Get the current date
  const currentDate = new Date();

  // Convert the entered birthday value to a Date object
  const birthdayDate = new Date(birthdayValue);

  // Calculate the age
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  // Adjust age based on the month and date comparison
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Add event listener for the button click to trigger age calculation
btnEl.addEventListener("click", calculateAge);
