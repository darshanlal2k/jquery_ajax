$.ajax({
    type: 'GET',
    // url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    url: "https://api.publicapis.org/entries",
    dataType: 'text',
    success: function (result) {
        console.log(result);
        let jsonObj = JSON.parse(result);
        let ele = document.getElementById("demo");
        let table = "<table><thead><tr>";
        let tableRow;
        let tableBody = "<tbody>";

        for (i = 0; i < 1; i++) {
            for (const x in jsonObj.entries[i]) {
                head = "<th>" + x + "</th>";
                table = table + head;
                
            }
        }
        for (i = 0; i < 100; i++) {
            tableRow = "<tr>";
            for (const x in jsonObj.entries[i]) {
                if (x == "Link") {
                    tableRow += "<td><a href = " + jsonObj.entries[i].Link + ">" + jsonObj.entries[i].Link + "</a></td>";
                }
                else {
                    tableRow += "<td>" + jsonObj.entries[i][x] + "</td>";
                }
            }
            console.log(jsonObj.entries[0].Link);
            table = table + tableBody + tableRow;
        }
        document.getElementById("table").innerHTML = table;
        console.log("end");
    },
    error: function (status, errorMessage) {
        console.log(errorMessage);
    },
});