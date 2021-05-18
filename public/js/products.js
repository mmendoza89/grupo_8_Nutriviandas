window.onload = function() {
    let formDeleteButton = document.querySelector("#form-deleteProduct");
    formDeleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        let userResponse = confirm("Atención: Está por borrar un producto. ¿Desea efectivamente borrarlo?");
        userResponse ? formDeleteButton.submit() : "";
    });
};