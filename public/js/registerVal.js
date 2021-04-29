window.addEventListener("load", function() {

    // ******** REGISTER VALIDATIONS ******** //
    let button = document.querySelector('button.registrar-b');

    button.addEventListener('click', function(e) {
        e.preventDefault();

        let responseEmail = document.querySelector('div.textEmail');
        let emailField = document.querySelector('input.r-email');
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

        let nameField = document.querySelector('input.r-nombre');
        let responseName = document.querySelector('div.textName');
        if (nameField.value.length < 2) {
            responseName.innerHTML = "El campo debe tener 2 o más caracteres";
        } else {
            responseName.innerHTML = "";
        }

        let lastNameField = document.querySelector('input.r-apellido');
        let responseLastName = document.querySelector('div.textLastName');
        if (lastNameField.value.length < 2) {
            responseLastName.innerHTML = "El campo debe tener 2 o más caracteres";
        } else {
            responseLastName.innerHTML = "";
        }

        let passwordField = document.querySelector('input.r-contraseña');
        let responsePass = document.querySelector('div.textPass');
        let password = passwordField.value;
        if (password == '') {
            responsePass.innerHTML = "El campo no puede estar vacío";
        } else if (password.length < 8) {
            responsePass.innerHTML = "Mínimo de 8 caracteres";
        } else {
            responsePass.innerHTML = "";
        }

        let password2Field = document.querySelector('input.confirmarPass');
        let responsePass2 = document.querySelector('div.textPass2');
        let password2 = password2Field.value;
        if (password2 == '') {
            responsePass2.innerHTML = "El campo no puede estar vacío";
        } else if (password != password2) {
            responsePass2.innerHTML = "Las contraseñas no coinciden";
        } else {
            responsePass.innerHTML = "";
        }

        let avatarField = document.querySelector('input.avatar');
        let responseAvatar = document.querySelector('div.textAvatar');
        let avatar = avatarField.value;
        var re = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!avatarField == null && !re.exec(avatar)) {
            responseAvatar.innerHTML = "Extensiones validas: JPG, JPEG, PNG, GIF";
        }
    });
})