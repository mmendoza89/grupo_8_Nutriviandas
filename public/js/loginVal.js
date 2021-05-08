window.addEventListener("load", function() {

    // ******** LOGIN VALIDATIONS ******** //
    let button = document.querySelector('button.login-b');

    button.addEventListener('click', function() {
        let responseEmail = document.querySelector('div.textEmail');
        let emailField = document.querySelector('input.l-email');
        let email = emailField.value;

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }

        if(email == '') {
            responseEmail.innerHTML = "El campo no puede estar vacío";
        } 
        else if (!validateEmail(email)) {
            responseEmail.innerHTML = "Lo siento, formato incorrecto 😩";
        } else {
            responseEmail.innerHTML = "";
        }

        let passwordField = document.querySelector('input.l-contraseña');
        let responsePass = document.querySelector('div.textPass');
        let password = passwordField.value;

        if (password == '') {
            responsePass.innerHTML = "El campo no puede estar vacío";
        }
    });

    // ******** REGISTER VALIDATIONS ******** //
    // let buttonReg = document.querySelector('button.registrar-b');

    // buttonReg.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     let email = emailField.value;
    //     console.log('dfdf')

    //     function validateEmail(email) {
    //         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //         return re.test(String(email).toLowerCase());
    //     }

    //     if(email == '') {
    //         responseEmail.innerHTML = "El campo no puede estar vacío";
    //     } 
    //     else if (!validateEmail(email)) {
    //         responseEmail.innerHTML = "Lo siento, formato incorrecto 😩";
    //     } else {
    //         responseEmail.innerHTML = "";
    //     }

    //     let passwordField = document.querySelector('input.r-contraseña');
    //     let responsePass = document.querySelector('div.textPass');
    //     let password = passwordField.value;

    //     if (password == '') {
    //         responsePass.innerHTML = "El campo no puede estar vacío";
    //     }
    // });
})