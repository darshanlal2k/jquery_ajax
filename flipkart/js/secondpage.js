let gridTotalContainer = document.getElementById("gridTotalContainer");
// let productImages = document.getElementById("productImage");
let totalContainer = document.getElementById("totalContainer");
let gridRowSubContainer = document.getElementById("gridRowSubContainer");
let productSliderImagesContainer = document.getElementById("productSliderImagesContainer");
let productBigImage = document.getElementById("productBigImage");
let productTitleName = document.getElementById("productTitleName");
let productRatings = document.getElementById("productRatings");
let productPrice = document.getElementById("productPrice");
let productDiscountPercentage = document.getElementById("productDiscountPercentage");

let productDescription = document.getElementById("productDescription");
let allFunctions = {
    createElement(elementName, parentName) {
        let child = "";
        child = document.createElement(elementName);
        return parentName.appendChild(child);
    }
};

function showRedClrWishlist(e) {
    console.log(e.target);
    if (e.target.style.color === "red") {
        e.target.style.color = "";
        alert("Removed from Wishlist");
    }
    else {
        e.target.style.color = "red";
        alert("Added to Wishlist");
    }
}


$.ajax({
    type: "GET",
    url: "https://dummyjson.com/products",
    datatype: "test",
    success: function (response) {
        var ajaxResultResponse = response;
        console.log(response);
        console.log(response.products);
        console.log(response.products.length);
        console.log(response.products[0].images);
        console.log(response.products[0].images.length);
        console.log(response.products[0].thumbnail);

        for (i = 0; i < response.products[0].images.length; i++) {

            let sliderContainer = allFunctions.createElement("div", productSliderImagesContainer);
            sliderContainer.setAttribute("id", "sliderContainer");
            sliderContainer.setAttribute("class", "row  text-center  p-2");

            sliderContainer.addEventListener("click", function (e) {
                showBigImage(e);
            });

            let sliderImage = allFunctions.createElement("img", sliderContainer);
            sliderImage.setAttribute("id", "sliderImage");
            sliderImage.setAttribute("class", "");
            sliderImage.setAttribute("src", response.products[0].images[i]);
            sliderImage.setAttribute("height", "50px");
            sliderImage.setAttribute("width", "50px");
        }

        function showBigImage(e) {
            console.log(e);
            console.log(e.target);

            console.log(e.target.querySelector("#sliderImage"));
            console.log(e.target.querySelector("#sliderImage").src);

            productBigImage.src = e.target.querySelector("#sliderImage").src;

        }

        productBigImage.src = response.products[0].images[0];
        productTitleName.innerText = response.products[0].title;
        productRatings.innerHTML = response.products[0].rating;
        productPrice.innerText = "₹" + response.products[0].price;
        productDiscountPercentage.innerText = response.products[0].discountPercentage + "% " + " off";
        productDescription.innerHTML = response.products[0].description;

        // let productContainer = allFunctions.createElement("div", totalContainer);
        // productContainer.setAttribute("id", "productContainer");
        // productContainer.setAttribute("class", "container bg-white p-4");
        // // totalContainer.innerText = "darshan";

        // let productRowContainer = allFunctions.createElement("div", totalContainer);
        // productRowContainer.setAttribute("id", "productRowContainer");
        // productRowContainer.setAttribute("class", "row");
        // // totalContainer.innerText = "darshan";


        // let productTotalImagesContainer = allFunctions.createElement("div", productRowContainer);
        // productTotalImagesContainer.setAttribute("id", "productTotalImagesContainer");
        // productTotalImagesContainer.setAttribute("class", "col-5");
        // // totalContainer.innerText = "darshan";

        // let productTotalImagesSubContainer = allFunctions.createElement("div", productTotalImagesContainer);
        // productTotalImagesSubContainer.setAttribute("id", "productTotalImagesSubContainer");
        // productTotalImagesSubContainer.setAttribute("class", "row");
        // // totalContainer.innerText = "darshan";

        // let productSliderImagesContainer = allFunctions.createElement("div", productTotalImagesSubContainer);
        // productSliderImagesContainer.setAttribute("id", "productSliderImagesContainer");
        // productSliderImagesContainer.setAttribute("class", "col-2");

        // let sliderContainer = allFunctions.createElement("div", productTotalImagesSubContainer);
        // sliderContainer.setAttribute("id", "sliderContainer");
        // sliderContainer.setAttribute("class", "row  text-center  p-2");


        // big images container

        // let productBigImagesTotalContainer = allFunctions.createElement("div", productTotalImagesSubContainer);
        // productBigImagesTotalContainer.setAttribute("id", "productBigImagesTotalContainer");
        // productBigImagesTotalContainer.setAttribute("class", "col-10");

        // let productBigImagesSubContainer = allFunctions.createElement("div", productTotalImagesSubContainer);
        // productBigImagesSubContainer.setAttribute("id", "productBigImagesTotalContainer");
        // productBigImagesSubContainer.setAttribute("class", "");


        // let productBigImagesContainer = allFunctions.createElement("div", productBigImagesSubContainer);
        // productBigImagesContainer.setAttribute("id", "productBigImagesContainer");
        // productBigImagesContainer.setAttribute("class", "text-center p-3");

        // let productBigImage = allFunctions.createElement("img", productBigImagesContainer);
        // productBigImage.setAttribute("id", "productBigImage");
        // productBigImage.setAttribute("class", "");
        // productBigImage.setAttribute("src", "");
        // productBigImage.setAttribute("height", "500px");
        // productBigImage.setAttribute("width", "400px");

        // let wishListHeartIconContainer = allFunctions.createElement("div", productBigImagesSubContainer);
        // wishListHeartIconContainer.setAttribute("id", "wishListHeartIconContainer");
        // wishListHeartIconContainer.setAttribute("class", "");

        // let wishlisticon = allFunctions.createElement("i", productBigImagesSubContainer);
        // wishlisticon.setAttribute("id", "wishlisticon");
        // wishlisticon.setAttribute("class", "bi bi-heart-fill");

        // button container

        // let buttonBuyCartContainer = allFunctions.createElement("div", productTotalImagesContainer);
        // buttonBuyCartContainer.setAttribute("id", "buttonBuyCartContainer");
        // buttonBuyCartContainer.setAttribute("class", "mt-3");

        // let buyNowBtnContainer = allFunctions.createElement("div", buttonBuyCartContainer);
        // buyNowBtnContainer.setAttribute("id", "buyNowBtnContainer");
        // buyNowBtnContainer.setAttribute("class", " text-center text-white p-3 fw-bold rounded-1");

        // let buyNowBtn = allFunctions.createElement("div", buyNowBtnContainer);
        // buyNowBtn.setAttribute("id", "buyNowBtn");
        // buyNowBtnContainer.setAttribute("class", " text-center text-white p-3 fw-bold rounded-1");

        // let buyNowIcon = allFunctions.createElement("i", buyNowBtn);
        // buyNowIcon.setAttribute("id", "buyNowIcon");
        // buyNowIcon.setAttribute("class", "bi bi-lightning-fill ms-1 me-1");

        // let addToCartBtnContainer = allFunctions.createElement("div", buttonBuyCartContainer);
        // addToCartBtnContainer.setAttribute("id", "addToCartBtnContainer");
        // addToCartBtnContainer.setAttribute("class", "text-center  text-white  fw-bold p-3 rounded-1");

        // let addToCartBtn = allFunctions.createElement("div", addToCartBtnContainer);
        // addToCartBtn.setAttribute("id", "addToCartBtn");
        // // buyNowBtnContainer.setAttribute("class", " text-center text-white p-3 fw-bold rounded-1");

        // let addToCartIcon = allFunctions.createElement("i", addToCartBtn);
        // addToCartIcon.setAttribute("id", "addToCartIcon");
        // addToCartIcon.setAttribute("class", "bi bi-cart-fill ms-1 me-1");

        // product Details content container


        // let productInformationContainer = allFunctions.createElement("div", productRowContainer);
        // productInformationContainer.setAttribute("id", "productInformationContainer");
        // productInformationContainer.setAttribute("class", "col-7 p-3");


        // let productDetailsContainer = allFunctions.createElement("div", productInformationContainer);
        // productDetailsContainer.setAttribute("id", "productDetailsContainer");
        // productDetailsContainer.setAttribute("class", " p-3");


        // let productTitleName = allFunctions.createElement("div", productDetailsContainer);
        // productTitleName.setAttribute("id", "productTitleName");
        // productTitleName.setAttribute("class", "fs-3");

        // let productRatings = allFunctions.createElement("div", productDetailsContainer);
        // productRatings.setAttribute("id", "productRatings");
        // productRatings.setAttribute("class", "bg-success text-white p-1 col-1");

        // let ratingStarIcon = allFunctions.createElement("i", productRatings);
        // ratingStarIcon.setAttribute("id", "ratingStarIcon");
        // ratingStarIcon.setAttribute("class", "bi bi-star-fill text-white");

        // let productPriceDetailsContainer = allFunctions.createElement("div", productDetailsContainer);
        // productPriceDetailsContainer.setAttribute("id", "productPriceDetailsContainer");
        // productPriceDetailsContainer.setAttribute("class", "row");


        // let productPrice = allFunctions.createElement("div", productPriceDetailsContainer);
        // productPrice.setAttribute("id", "productPrice");
        // productPrice.setAttribute("class", "fs-2 col-4");


        // let productDiscountPercentageContainer = allFunctions.createElement("div", productPriceDetailsContainer);
        // productDiscountPercentageContainer.setAttribute("id", "productDiscountPercentageContainer");
        // productDiscountPercentageContainer.setAttribute("class", "col-4 p-1 text-success");



        // let productDiscountPercentage = allFunctions.createElement("p", productDiscountPercentageContainer);
        // productDiscountPercentage.setAttribute("id", "productDiscountPercentage");
        // productDiscountPercentage.setAttribute("class", "mt-3 fw-bold");
    },
    error(status, errorMessage) {
        console.log(status);
        console.log(errorMessage);
    },
});

// var dataPost = {};
// dataPost.age = 30;
// var dataString = JSON.stringify(dataPost);

// $.ajax({
//     url: "server.php",
//     method: "POST",
//     // datatype: "json",
//     // data: { myData: "dataPost" },
//     data: dataPost,
//     success: function (res) {
//         // alert(res);
//         console.log(res);
//     },
//     // error: function (e) {
//     //     console.log(e.message);
//     // }
// });