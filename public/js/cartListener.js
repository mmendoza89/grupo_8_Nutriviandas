window.onload = function () {
  if (window.localStorage.getItem("menusCount") != null) {
    updateCartBubble();
  }
};

window.onhashchange = function () {
  if (window.localStorage.getItem("menusCount") != null) {
    updateCartBubble();
  }
};

function updateCartBubble() {
  console.log("updateCartBubble from cartListener");
  if (window.localStorage.getItem("userLogged")) {
    try{
    document.getElementById("cartActualCount").innerHTML =
      window.localStorage.getItem("menusCount");
    } catch(e){

    }
  }
}
