let showTable = document.getElementById("showTable");
let stateName = document.getElementById("stateName");
let universityCounts = document.getElementById("universityCounts");

function chooseCountry(e) {
    let selectedCountryName = e.target.value;
    if (selectedCountryName !== "") {
        $.ajax({
            type: "GET",
            url: "http://universities.hipolabs.com/search?country=" + selectedCountryName,
            datatype: "text",
            success: function (result) {
                console.log(result);
                console.log(result.length);
                let copyResult = result, responseText = [], totalResponseStateName = "";

                stateName.style.display = "block";
                stateName.options.length = "";
                stateOptions = document.createElement("option");
                stateOptions.innerHTML = "Select Your State";
                stateOptions.setAttribute("hidden","");
                stateName.appendChild(stateOptions);
                universityCounts.innerHTML = "";
                showTable.innerHTML = "";
                // push string response in one array variable(testArray) except null
                for (i = 0; i < result.length; i++) {
                    totalResponseStateName = result[i]["state-province"];
                    if (result[i]["state-province"] !== null) {
                        responseText.push(totalResponseStateName);
                    }
                };
                // uniqueResponseText removes duplicate values using Set() methods
                let uniqueResponseText = [...new Set(responseText)];
                console.log(uniqueResponseText);

                // create option tag and appending in select tag
                for (i = 0; i < uniqueResponseText.length; i++) {
                    stateOptions = document.createElement("option");
                    stateOptions.innerHTML = uniqueResponseText[i];
                    stateOptions.value = uniqueResponseText[i];
                    stateName.appendChild(stateOptions);
                }
                // state options dropdown
                stateName.addEventListener("change", e => {
                    let selectedStateName = e.target.value;
                    let createTable = "<table><thead><tr>", createHead = "", createRow = "", createBody = "<tbody>";
                    // creating  head
                    for (i = 0; i < 1; i++) {
                        for (const x in copyResult[i]) {
                            createHead = "<th>" + x + "</th>";
                            createTable += createHead;
                        }
                    }
                    // creating rows
                    count = 0;
                    for (i = 0; i < copyResult.length; i++) {
                        if (copyResult[i]["state-province"] == selectedStateName) {
                            createRow = "<tr>";
                            count += 1;
                            for (const x in copyResult[i]) {
                                if (x == "web_pages") {
                                    createRow += "<td><a href=" + copyResult[i][x] + ">" + copyResult[i][x] + "</a></td>";
                                }
                                else {
                                    createRow += "<td>" + copyResult[i][x] + "</td>";
                                }
                            }
                            createTable += createBody + createRow;
                        }
                    }
                    universityCounts.innerHTML = "No of University : " + count;
                    showTable.innerHTML = createTable;
                });
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