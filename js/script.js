// Wait for the DOM to load
window.addEventListener('load', () => {
    
    // Process the form data
    const processForm = (event) => {

        // Stop the form from submitting
        event.preventDefault();

        // Get the form data from the event object
        const formData = new FormData(event.target);

        // Display the key/value pairs of the form data
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    };

    // Get the form element
    const form = document.getElementById('empForm');

    // Add a submit event listener to the form
    form.addEventListener('submit', processForm);
});