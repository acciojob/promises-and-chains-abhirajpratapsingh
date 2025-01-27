document.getElementById("age-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const age = document.getElementById("age").value;
    const name = document.getElementById("name").value;
    if (!age || !name) {
        alert("Please fill out both fields.");
        return;
    }
    const ageValidationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000); 
    });
    ageValidationPromise
        .then((resolvedName) => {
            alert(`Welcome, ${resolvedName}. You can vote.`);
        })
        .catch((rejectedName) => {
            alert(`Oh sorry ${rejectedName}. You aren't old enough.`);
        });
});
