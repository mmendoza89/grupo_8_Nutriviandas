window.onload = function () {
  console.log("Hello from cart. Hi there!");

  init();
};


let subTotals = {};
let total = 0;
let clientLocalStorage = window.localStorage;

function init() {
  let menus = JSON.parse(clientLocalStorage.getItem("storedMenus"));
  const menusElementRoot = document.getElementById("menusDynamicData");

  let quantities = {};

  if (menus) {
    document.querySelector("#numberOfProducts strong").innerHTML = menus.length;
    document.querySelector("#numberOfProducts span").innerHTML = menus.length > 1 ? "productos" : "producto";
    menusElementRoot.innerHTML = "";


    for (const menu of menus) {
      let id = menu.menuId;
      let quantityId = "cartQuantity" + id;
      quantities[id] = 1;
      subTotals[id] = menu.menuTotal * Number(menu.quantity);

      menusElementRoot.innerHTML += `
        <tr>
            <td class="table-pro-img"></td>
            <td class="table-pro-desc">
                <h3>${menu.menuName}</h3>
                <p>${menu.menuDescription}</p>
            </td>
            <td class="table-pro-price">$ ${menu.menuTotal}</td>
            <td class="table-pro-qty">
                <input id="${quantityId}" type="number" class="form-control" value="${menu.quantity}" min="0">
            </td>
            <td class="table-pro-total${id}">
                <h4>$ ${subTotals[id]}</h4>
            </td>
        </tr>
        `;
    } //for

    //Add quantity listeners
    for (const menu of menus) {
      let id = menu.menuId;
      let quantityId = "cartQuantity" + id;

      document
        .getElementById(quantityId)
        .addEventListener("change", function (e) {
          if (e.target.value >= 0) {
            //Quantity from input
            let quantity = Number(e.target.value);
            //Store quantity of this menu in quantities
            quantities[id] = quantity;
            //update subTotal of this menu
            subTotals[id] = menu.menuTotal * quantity;
            //Write subtotal of this menu.
            document.querySelector(".table-pro-total" + id + " h4").innerHTML =
              "$ " + menu.menuTotal * Number(quantities[id]);
            //Update general total
            calculateTotal();
          }
        });
    }

    //Calculate general total
    calculateTotal();
  }
}

function calculateTotal() {
  let sum = 0;
  for (const key in subTotals) {
    if (Object.hasOwnProperty.call(subTotals, key)) {
      sum += subTotals[key];
    }
  }
  total = sum;
  document.getElementById("cartTotal").innerHTML = "$ " + total;
}

function cancelCart(){
    clientLocalStorage.clear();
    location.reload();
}
