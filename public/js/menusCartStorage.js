let menuId;
let total;
let menu;

function addToCart(){
    let clientLocalStorage = window.localStorage;
    console.log(clientLocalStorage);
    //Get stored menus
    let storedMenus = clientLocalStorage.getItem("storedMenus");
    console.log(storedMenus);
    let previousMenus = [];
    if(storedMenus){
        //Parse stored menus to get the array objects
        previousMenus = JSON.parse(storedMenus);
        console.log(previousMenus);
    } 

    let quantity = document.getElementById("quantityOfMenu").value;

    //Create new menu to add
    let menuToAdd = {
        "menuId": menuId,
        "menuName": menu.name,
        "menuTotal": total,
        "menuDescription": menuDescription,
        "quantity": quantity
    }

    //Add new menu
    previousMenus.push(menuToAdd);
    console.log(previousMenus);

    //Add to storage stringified array of menus
    clientLocalStorage.setItem("storedMenus", JSON.stringify(previousMenus));

}