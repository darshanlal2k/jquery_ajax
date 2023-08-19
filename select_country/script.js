let container = document.getElementById("container");
function checkname(e) {
    let eTargetText = e.target.value;
    if (eTargetText !== "") {
        $.ajax({
            url: "http://universities.hipolabs.com/search?country=" + eTargetText,
            datatype: "text",
            success: function (result) {
                console.log(result);
                console.log(result.length);
                let resultLength = result.length;
                let table = "<table><thead><tr>";
                let head;
                for (i = 0; i < 1; i++) {
                    for (const x in result[i]) {
                        head = "<th>" + x + "</th>";
                        table = table + head;
                    }
                }
                let text;
                let body = "<tbody>";

                for (i = 0; i < resultLength; i++) {
                    text = "<tr>";
                    for (const x in result[i]) {
                        if (x == "web_pages") {
                            text += "<td><a href=" + result[i][x] + ">" + result[i][x] + "</a></td>";
                        }
                        else {
                            text += "<td>" + result[i][x] + "</td>";
                        }
                    }
                    // console.log(text);
                    table = table + body + text;
                }
                container.innerHTML = table;
            },
            error(errorMessage, status) {
                console.log(errorMessage);
                console.log(status);
            }
        });
    }
    else {
        console.log("please Select");
    }
}
// console.log(countryName.value);

// countryName.addEventListener("click", check);

// function check(e) {
//     console.log(e.target.innerText);
// }

