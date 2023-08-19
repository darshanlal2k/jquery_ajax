let gridTotalContainer = document.getElementById("gridTotalContainer");
// let productImages = document.getElementById("productImage");
let totalContainer = document.getElementById("totalContainer");
let gridRowSubContainer = document.getElementById("gridRowSubContainer");

function showGridList(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Grid") {
        e.target.innerHTML = "List";
        gridTotalContainer.style.display = "block";
        totalContainer.style.display = "none";
        return true;
    }
    if (e.target.innerHTML === "List") {
        e.target.innerHTML = "Grid";
        totalContainer.style.display = "block";
        gridTotalContainer.style.display = "none";
        return true;
    }
}
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
//var ajaxResultResponse;

$.ajax({
    type: "GET",
    url: "https://dummyjson.com/products",
    datatype: "test",
    success: function (response) {
        var ajaxResultResponse = response;
        console.log(response);
        console.log(response.products);
        console.log(response.products.length);
        console.log(response.products[0].thumbnail);



        for (i = 0; i < response.products.length; i++) {
            // for (let x in response.products[i]) {
            //     console.log(x + " " + "key ");
            //     console.log(response.products[i][x] + " " + " value");
            // }

            let container = allFunctions.createElement("div", totalContainer);
            container.setAttribute("id", "container");
            container.setAttribute("class", "row  p-2");

            // totalContainer.innerText = "darshan";


            let productImageContainer = allFunctions.createElement("div", container);
            productImageContainer.setAttribute("id", "productImageContainer");
            productImageContainer.setAttribute("class", "col-2");
            // totalContainer.innerText = "darshan";

            let productImage = allFunctions.createElement("img", productImageContainer);
            productImage.setAttribute("id", "productImage");
            productImage.setAttribute("src", response.products[i].thumbnail);
            productImage.setAttribute("width", "200px");
            productImage.setAttribute("height", "200px");
            // totalContainer.innerText = "darshan";

            let wishlistContainer = allFunctions.createElement("div", productImageContainer);
            wishlistContainer.setAttribute("id", "wishlistContainer");
            wishlistContainer.setAttribute("class", "");

            let wishlistHeartIcon = allFunctions.createElement("i", wishlistContainer);
            wishlistHeartIcon.setAttribute("id", "wishlistHeartIcon");
            wishlistHeartIcon.setAttribute("class", "bi bi-heart-fill");
            wishlistHeartIcon.addEventListener("click", function (e) {
                showRedClrWishlist(e);
            });

            let productDetailsContainer = allFunctions.createElement("div", container);
            productDetailsContainer.setAttribute("id", "productDetailsContainer");
            productDetailsContainer.setAttribute("class", "col-10");

            let productDetailsSubRowContainer = allFunctions.createElement("div", productDetailsContainer);
            productDetailsSubRowContainer.setAttribute("id", "productDetailsSubRowContainer");
            productDetailsSubRowContainer.setAttribute("class", "row");

            let productDetailsInformation = allFunctions.createElement("div", productDetailsSubRowContainer);
            productDetailsInformation.setAttribute("id", "productDetailsInformation");
            productDetailsInformation.setAttribute("class", "col-7 ");

            let productTitleName = allFunctions.createElement("div", productDetailsInformation);
            productTitleName.setAttribute("id", "productTitleName");
            productTitleName.setAttribute("class", "fs-4");
            productTitleName.innerHTML = response.products[i].title;
            // productTitleName.setAttribute("class","col-7");

            let productRating = allFunctions.createElement("p", productDetailsInformation);
            productRating.setAttribute("id", "productRating");
            productRating.innerHTML = response.products[i].rating;

            let productRatingStarImage = allFunctions.createElement("i", productRating);
            productRatingStarImage.setAttribute("id", "ratingStarImage");
            productRatingStarImage.setAttribute("class", "bi bi-star-fill text-white");

            // productRatingStarImage.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==";

            let productBrandName = allFunctions.createElement("div", productDetailsInformation);
            productBrandName.setAttribute("id", "productBrandName");
            productBrandName.innerHTML = response.products[i].brand;

            let productPriceDetails = allFunctions.createElement("div", productDetailsSubRowContainer);
            productPriceDetails.setAttribute("id", "productPriceDetails");
            productPriceDetails.setAttribute("class", "col-5");

            let productPrice = allFunctions.createElement("div", productPriceDetails);
            productPrice.setAttribute("id", "productPrice");
            productPrice.setAttribute("class", "fs-2 fw-bold");
            productPrice.innerHTML = "₹" + response.products[i].price;

            let productPercentange = allFunctions.createElement("div", productPriceDetails);
            productPercentange.setAttribute("id", "productPercentange");
            productPercentange.setAttribute("class", " text-success fw-bold");
            productPercentange.innerHTML = response.products[i].discountPercentage + "% " + " off";

            container.addEventListener("click", function (e) {

                listcontainerDetails(e, response.products[i].id, response.products[i]);
            });
            function listcontainerDetails(e, idvalue, productDetails) {


                console.log(e.target.c);
                console.log(response.products[i]);

                $.ajax({
                    url: 'secondpage.php',
                    type: "post",
                    data: idvalue,
                    success: function (response) {
                        console.log(response);
                    },
                    error: function (errorMessage, status) {
                        console.log(errorMessage);
                        console.log(status);
                    }
                });
            }
        }
        // let gridRowSubContainer = allFunctions.createElement("div", gridTotalContainer);
        // gridRowSubContainer.setAttribute("id", "gridRowSubContainer");
        // gridRowSubContainer.setAttribute("class", "row");

        for (i = 0; i < 30; i++) {
            //    function grid(){
            let gridContainer = allFunctions.createElement("div", gridRowSubContainer);
            gridContainer.setAttribute("id", "gridContainer");
            gridContainer.setAttribute("class", "col-3  p-4");

            let gridProductImageContainer = allFunctions.createElement("div", gridContainer);
            gridProductImageContainer.setAttribute("id", "gridProductImageContainer");
            gridProductImageContainer.setAttribute("class", "text-center");

            let gridProductImage = allFunctions.createElement("img", gridProductImageContainer);
            gridProductImage.setAttribute("id", "gridProductImage");
            gridProductImage.setAttribute("class", "");
            gridProductImage.setAttribute("src", response.products[i].thumbnail);
            gridProductImage.setAttribute("width", "200px");
            gridProductImage.setAttribute("height", "200px");

            let gridwishlistContainer = allFunctions.createElement("div", gridContainer);
            gridwishlistContainer.setAttribute("id", "gridwishlistContainer");
            gridwishlistContainer.setAttribute("class", "");

            let gridwishlistHeartIcon = allFunctions.createElement("i", gridwishlistContainer);
            gridwishlistHeartIcon.setAttribute("id", "gridwishlistHeartIcon");
            gridwishlistHeartIcon.setAttribute("class", "bi bi-heart-fill");
            gridwishlistHeartIcon.addEventListener("click", function (e) {
                showRedClrWishlist(e);
            });

            let gridProductProductInformation = allFunctions.createElement("div", gridContainer);
            gridProductProductInformation.setAttribute("id", "gridProductProductInformation");
            gridProductProductInformation.setAttribute("class", "col-10  mx-auto p-2");

            let gridProductTitleName = allFunctions.createElement("div", gridProductProductInformation);
            gridProductTitleName.setAttribute("id", "gridProductTitleName");
            gridProductTitleName.setAttribute("class", "fs-4");
            gridProductTitleName.innerHTML = response.products[i].title;

            let gridProductRatings = allFunctions.createElement("div", gridProductProductInformation);
            gridProductRatings.setAttribute("id", "gridProductRatings");
            gridProductRatings.setAttribute("class", "");
            gridProductRatings.innerHTML = response.products[i].rating;

            let gridProductPrice = allFunctions.createElement("div", gridProductProductInformation);
            gridProductPrice.setAttribute("id", "gridProductPrice");
            gridProductPrice.setAttribute("class", "fs-4 fw-bold");
            gridProductPrice.innerHTML = "₹" + response.products[i].price;

            let gridProductDiscountPercentage = allFunctions.createElement("div", gridProductProductInformation);
            gridProductDiscountPercentage.setAttribute("id", "gridProductDiscountPercentage");
            gridProductDiscountPercentage.setAttribute("class", "text-success fw-bold fs-6");
            gridProductDiscountPercentage.innerHTML = response.products[i].discountPercentage + "% " + " off";
        }
        // }
        // return ajaxResultResponse;
    },
    error: function (errorMessage, status) {
        console.log(errorMessage);
        console.log(status);
    }

});

// console.log(ajaxResultResponse);