<?php

header("Access-Control-Allow-Origin: *");

print_r($_POST);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flipkart</title>
    <link rel="stylesheet" href="../json-ajax-flipkart-task/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../json-ajax-flipkart-task/bootstrap/js/bootstrap.min.js">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <!-- <link rel="stylesheet" href="../json-ajax-flipkart-task/css/style.css"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>
<style>
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    p {
        padding: 0px;
        margin: 0px;
    }

    body {
        font-size: 14px;
        background-color: #f1f3f6;
        color: #212121;
        line-height: 1.4;
    }

    .s,
    .a {
        overflow: hidden;
    }

    .buyNow {
        width: 40%;
        float: right;
        margin-left: 10px;
        background-color: #fb641b;
    }

    #buyNowBtnContainer {
        width: 40%;
        float: right;
        margin-left: 10px;
        background-color: #fb641b;
    }

    .imgContainer {
        position: relative;
    }

    #wishListHeartIconContainer {
        position: absolute;
        cursor: pointer;
        top: 15px;
        right: 15px;
        background-color: white;
        padding: 10px;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .1);
    }

    #wishlisticon {
        color: #cdcccc;
    }

    .addCart {
        width: 40%;
        float: right;
        margin-right: 10px;
        background-color: #ff9f00;
    }

    #addToCartBtnContainer {
        width: 40%;
        float: right;
        margin-right: 10px;
        background-color: #ff9f00;
    }

    #sliderContainer {
        border: 1px solid #e0e0e0;
    }

    #sliderContainer:hover {
        border: 2px solid #2874f0;
    }

    #productBigImagesTotalContainer {
        border: 1px solid #e0e0e0;
    }

    #productBigImagesSubContainer {
        position: relative;
    }

    #productRatings {
        vertical-align: middle;
        font-size: 15px;
    }
</style>

<body>
    <div class="container-fluid" id="totalContainer">
        <div class="container bg-white p-4" id="productContainer">
            <div class="row" id="productRowContainer">
                <div class="col-5" id="productTotalImagesContainer">
                    <div class="row" id="productTotalImagesSubContainer">
                        <div class="col-2" id="productSliderImagesContainer">
                            <!-- <div class="row  text-center  p-2" id="sliderContainer">
                                <img src="../json-ajax-flipkart-task/images/image7-700x374.png" width="50px" height="50px" id="sliderImage">
                            </div>
                            <div class="row  text-center  p-2" id="sliderContainer">
                                <img src="../json-ajax-flipkart-task/images/image7-700x374.png" width="50px" height="50px" id="sliderImage">
                            </div> -->
                        </div>
                        <div class="col-10" id="productBigImagesTotalContainer">
                            <div id="productBigImagesSubContainer">
                                <div class="text-center p-3" id="productBigImagesContainer">
                                    <img width="400px" height="500px" id="productBigImage">
                                </div>
                                <div id="wishListHeartIconContainer">
                                    <i class="bi bi-heart-fill" id="wishlisticon" onclick="showRedClrWishlist(event)"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="buttonBuyCartContainer" class="mt-3">
                        <div class=" text-center text-white p-3 fw-bold rounded-1" id="buyNowBtnContainer">
                            <div id="buyNowBtn">
                                <i class="bi bi-lightning-fill ms-1 me-1" id="buyNowIcon"></i>BUY NOW
                            </div>
                        </div>
                        <div class="text-center  text-white  fw-bold p-3 rounded-1" id="addToCartBtnContainer">
                            <div id="addToCartBtn">
                                <i class="bi bi-cart-fill ms-1 me-1" id="addToCartIcon"></i>ADD TO CART
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 p-3" id="productInformationContainer">
                    <div class="p-3" id="productDetailsContainer">
                        <div class="fs-3 mb-2" id="productTitleName"></div>
                        <div class="bg-success text-white text-center mb-2 col-1 rounded">
                            <span id="productRatings"></span>
                            <span> <i class="bi bi-star-fill text-white" id="ratingStarIcon"></i></span>

                        </div>
                        <div class="row mb-2" id="productPriceDetailsContainer">
                            <div class="fs-2 col-4" id="productPrice"></div>
                            <div class="col-4 p-1 text-success" id="productDiscountPercentageContainer">
                                <p class="mt-3 fw-bold" id="productDiscountPercentage"> </p>
                            </div>
                        </div>
                        <div id="productDescription" class="mb-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <img src="../json-ajax-flipkart-task/server.php" alt=""> -->
    <script src="../json-ajax-flipkart-task/js/secondpage.js"></script>
</body>

</html>

<script type="text/javascript">
    var dataPost = {};
    dataPost.age = 30;
    // var dataString = JSON.stringify(dataPost);
    $.ajax({
        type: 'GET',
        url: 'server.php',
        // data: { myData: "dataPost" },
        dataType: 'json',
        // async: true,
        crossDomain: true,
        data: dataPost,
        success: function(res) {
            // alert(res);
            console.log(res);
        },
        error: function(xhr, errorMessage, status) {
            console.log(xhr);
            console.log(errorMessage);
            console.log(status);
        },
    });
</script>