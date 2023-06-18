// Script for navigation bar
const bar = document.getElementById("bar");
const clos = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (clos) {
  clos.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

function PassProduct(element) {
  console.log(element);

  // Get the classes of the product by using querySelector.
  const productID = element.getAttribute("id");

  const productImage = element.querySelector(".productImage").src;
  const imageName = productImage.substring(productImage.lastIndexOf("/") + 1);

  const productBrand = element.querySelector(".productBrand").innerText;
  const productName = element.querySelector(".productName").innerText;
  const productPrice = element.querySelector(".productPrice").innerText;

  console.log(productID);
  console.log(imageName);
  console.log(productBrand);
  console.log(productName);
  console.log(productPrice);

  // Create an object to store the data
  const itemClicked = {
    productID: productID,
    imageName: imageName,
    productBrand: productBrand,
    productName: productName,
    productPrice: productPrice,
  };

  // Store the data in local storage
  localStorage.setItem("ProductData", JSON.stringify(itemClicked));

  // Redirect to the new page with the URL
  window.location.href = "product.html";
}

var cartData = [];
var counter = 0;

function AddToCart(element) {
  
  cartDataObject = JSON.parse(localStorage.getItem("CartData"));
  if(cartDataObject !== null){
    cartData = Array.from(cartDataObject);
  }
  const _productID = element.getAttribute("id");
  const _productQuantity = document.getElementById("productQuantity").value;
  const _productPrice = document.getElementById("productPrice").innerText;
  const _productImage = document.getElementById("productImage").src;
  const _productName = document.getElementById("productName").innerText;
  
  const _imageName = _productImage.substring(
    _productImage.lastIndexOf("/") + 1
  );
  

  // Check if product ID already exists in cartData, if not create the first one.
  if (cartData !== null) {
    var productIndex = cartData.findIndex(
      (product) => product.productID === _productID
    );
  } else {
    cartData = {
      productID: _productID,
      productQuantity: _productQuantity,
      productPrice: _productPrice,
      imageName: _imageName,
      productName: _productName,
    };
  }

  if (productIndex === -1) {
    // Product ID is not found in cartData, so push new products to the one we created above.
    cartData.push({
      productID: _productID,
      productQuantity: _productQuantity,
      productPrice: _productPrice,
      imageName: _imageName,
      productName: _productName,
    });

    console.log("product added");
  } else {
    // Product ID already exists in cartData, so update existing product quantity.
    // cartData[productIndex].productPrice += parseInt(productPrice);
    // cartData[productIndex].productQuantity += parseInt(productQuantity);
    console.log("already exists, so increase quantity and price");
  }
  
  
  localStorage.setItem("CartData", JSON.stringify(cartData));
  
  window.location.href = "cart.html";

}

// var removeProduct =document.querySelector(".aa");
// removeProduct.addEventListener("click",(eo) => {
//   if (eo.target.className == "far fa-times-circle") {
//     eo.target.parentElement.parentElement.parentElement.remove();
//   } 
// })


//localStorage.clear();

