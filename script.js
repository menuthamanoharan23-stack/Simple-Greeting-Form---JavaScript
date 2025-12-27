// Get elements from the DOM
const form = document.getElementById("greeting-form");
const nameInput = document.getElementById("name-input");
const output = document.getElementById("output");

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page reload

  const name = nameInput.value.trim();

  if (name === "") {
    output.textContent = "Please fill out this field";
  } else {
    output.textContent = "Hello, " + name + "!";
    output.style.color = "green";
  }
});
