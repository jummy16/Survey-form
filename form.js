// document.addEventListener("DOMContentLoaded", 
//     function handleForm(event) {
//         event.preventDefault();

//         const name = document.getElementById("name").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const integer = document.getElementById("integer").value.trim();
//         const text = document.getElementById("text").value.trim();
//         const radio = document.querySelector('input[name="question"]:checked').value;
        // const checkbox = document.querySelector('input[type="checkbox"]:checked').value;

//         function validateEmail(email) {
//             const regex1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//             return regex1.test(String(email).toLowerCase());
//         }
    
//         if (!validateEmail(email)) {
//             displayError('email', 'Please enter a valid email address.', 3000);
//             return;
//         } else {
//             clearError('email');
//         }

//         const NewUser = {
//             Name: name,
//             Email:email,
//             Age:integer,
//             radio:radio,
            // Checkbox: checkbox, 
//             text:text
            
//         }

//         let users = JSON.parse(localStorage.getItem('users')) || [];

//     if (users.some(user => user.email === email)) {
//         displayError('email', 'This email is already registered.', 3000);
//         return;
//     }

//     users.push(NewUser);
//     localStorage.setItem('users', JSON.stringify(users));

//     CustomAlert('Sign up successful!.', function() {
//         setTimeout(function(){
//         },1000)
//     });
        
    
// })
// document.getElementById("submits").addEventListener('submit', handleForm);


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submits").addEventListener('submit', function handleForm(event) {
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
            displayError('email', 'Please enter a valid email address.', 3000);
            return;
        } else {
            clearError('email');
        }

        const newUser = {
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

        users.push(newUser);
        console.log(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users);

        CustomAlert('Sign up successful!', function() {
            setTimeout(function() {
                // Add any additional actions here if needed
            }, 1000);
        });

        // Allow form submission if no errors
        event.target.submit();
    });
});
