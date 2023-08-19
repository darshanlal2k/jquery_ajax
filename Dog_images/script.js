let img = document.getElementById("images");
function randomImages() {
    $.ajax({
        url: "https://dog.ceo/api/breeds/image/random",
        datatype: "text",
        success: function (result) {
            img.src = result.message;
        },
        error: function (status, errorMessage) {
            console.log(errorMessage);
            console.log(status);
        },
    })
}