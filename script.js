document.getElementById("age-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;

    // Check if inputs are empty
    if (!age || !name) {
        alert("Please fill out both fields.");
        return;
    }

    // Create the promise for age validation
    const ageValidationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000); // Wait for 4 seconds
    });

    // Handle promise resolution and rejection
    ageValidationPromise
        .then((resolvedName) => {
            alert(`Welcome, ${resolvedName}. You can vote.`);
        })
        .catch((rejectedName) => {
            alert(`Oh sorry ${rejectedName}. You aren't old enough.`);
        });
});
