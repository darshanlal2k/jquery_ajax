<?php
//  headers(
//     Access-Control-Allow-Origin, '*',
//  );
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
</head>

<body>
    <h1>kfhbad</h1>
</body>
<script type="text/javascript">
    var emp = [];
    var emp1 = {};
    var emp2 = {};

    emp1.id = 2;
    emp1.name = "darshan Lal";
    emp1.age = 22;
    emp1.address = "darshan lal street";
    emp.push(emp1);
    // console.log(emp1);


    emp2.id = 3;
    emp2.name = "darshan Lal";
    emp2.age = 22;
    emp2.address = "darshan lal street";
    emp.push(emp2);
    console.log(emp);

    $.ajax({
        headers: {
            "accept": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        url: "file:///D:/JavaScript-DOM-My-workouts/json-ajax-flipkart-task/sample.php",
        type: "get",
        dataType: "json",

        data: {
            emp: JSON.stringify(emp),
        },
        crossDomain: true,
        success: function(response) {
            console.log(response);
        },
        error: function(errorMessage, status) {
            console.log(status);
            console.log(errorMessage);
        }
    });
</script>