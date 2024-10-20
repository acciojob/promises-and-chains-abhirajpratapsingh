// Get references to the form elements
const ageForm = document.getElementById("age-form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

// Function to handle form submission
ageForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const age = parseInt(ageInput.value, 10);
    const name = nameInput.value.trim();

    // Validate inputs
    if (!age || !name) {
        alert("Please fill in all fields.");
        return;
    }

    // Call the function to validate age and handle the promise
    validateAge(name, age)
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});

// Function that returns a promise based on age
function validateAge(name, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry, ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });
}
