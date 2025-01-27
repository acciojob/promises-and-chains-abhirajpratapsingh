
const ageForm = document.getElementById("age-form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

ageForm.addEventListener("submit", function(event) {
    event.preventDefault();
	
    const age = parseInt(ageInput.value, 10);
    const name = nameInput.value.trim();

    if (!age || !name) {
        alert("Please fill in all fields.");
        return;
    }

   validateAge(name, age)
        .then((message) => {
            alert(message);
        })
        .catch((message) => {
            alert(message);
        });
});

function validateAge(name, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry, ${name}. You aren't old enough.`);
            }
        }, 4000); 
    });
}
