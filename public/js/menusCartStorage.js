const clientLocalStorage = window.localStorage;
window.onload = function () {
  if (clientLocalStorage.getItem("menusCount") != null) {
    updateCartBubble();
  }
};

let menuId;
let total;
let menu;
let previousMenus = [];

function addToCart() {
  if (isUserLogged()) {
    //Get stored menus
    let storedMenus = clientLocalStorage.getItem("storedMenus");
    if (storedMenus) {
      //there are storedMenus
      previousMenus = JSON.parse(storedMenus); //parse stored menus to get the array objects

      if (isMenuAlreadyStored(previousMenus, menuId)) {
        //menu was already there
        document.getElementById("menuAlreadyStored").classList.toggle("hide");
      } else {
        //menu was NOT already there
        storeMenu();
      }
    } else {
      //There were no stored menus
      storeMenu();
    }
  } else {
    //user was not logged
    document.getElementById("popoverNotLogged").classList.toggle("hide");
  }
}

function isUserLogged() {
  return clientLocalStorage.getItem("userLogged");
}

function isMenuAlreadyStored(previousMenus, menuId) {
  let flag = false;
  previousMenus.forEach((menu) => {
    if (menu.menuId == menuId) {
      flag = true;
      return;
    }
  });

  return flag;
}

function storeMenu() {
  let quantity = document.getElementById("quantityOfMenu").value;

  //Create new menu to add
  let menuToAdd = {
    "menuId": menuId,
    "menuName": menu.name,
    "menuTotal": total,
    "menuDescription": menuDescription,
    "quantity": quantity,
  };

  //Add new menu
  previousMenus.push(menuToAdd);

  //Add to storage stringified array of menus
  clientLocalStorage.setItem("storedMenus", JSON.stringify(previousMenus));

  //update cart bubble
  clientLocalStorage.setItem("menusCount", previousMenus.length);
  updateCartBubble();
}

function updateCartBubble() {
    console.log("updateCartBubble from menusCartStorage");
  document.getElementById("cartActualCount").innerHTML =
    clientLocalStorage.getItem("menusCount");
}
