window.onload = function() {

};

function logout(){
    console.log("Usuario deslogueado.");
    const clientLocalStorage = window.localStorage;
    clientLocalStorage.removeItem("userLogged");
}