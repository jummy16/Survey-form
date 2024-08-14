function CustomAlert(message) {
    const alertContainer = document.createElement('div');
    alertContainer.className = 'custom-alert';

    const alertMessage = document.createElement('p');
    alertMessage.textContent = message;
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.className = 'custom-alert-button';

    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(closeButton);

    document.body.appendChild(alertContainer);

    closeButton.addEventListener('click', function() {
        document.body.removeChild(alertContainer);
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');

    if(contactForm){
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const integer = document.getElementById("integer").value.trim();
        const text = document.getElementById("text").value.trim();
        const radio = document.querySelector('input[name="question"]:checked').value;
        const checkbox = document.querySelector('input[type="checkbox"]:checked').value;

        function validateEmail(email) {
            const regex1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return regex1.test(String(email).toLowerCase());
        }
    
        if (!validateEmail(email)) {
            alert('email', 'Please enter a valid email address.', 3000);
            return;
        }

        const formDetails = {
            Name: name,
            Email: email,
            Age: integer,
            Radio: radio,
            Checkbox: checkbox,
            Text: text
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.Email === email)) {
            displayError('email', 'This email is already registered.', 3000);
            return;
            console.log(users);
        }

        users.push(formDetails);
        // console.log(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users);

        CustomAlert('Sign up successful!', function() {
        
        });

        // Allow form submission if no errors
        event.target.submit();
    });
}});
