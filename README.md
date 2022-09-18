<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OOXX Game</title>
    <style>
        .box {width: 453px; margin: 20px auto;}
        .box tr td{ width: 150px; height: 150px;
        border: 1px solid #000; color: #333; font-size: 20px;
        line-height: 100px; text-align: center;}
    </style>
</head>
<body>
    <table class="box">
        <tr>
            <td><button onclick="btn00()" id="btn11"></button></td><td><button onclick="btn12()" id="btn12"></button></td><td><button onclick="btn13()" id="btn13"></button></td>
        </tr>
        <tr>
            <td><button onclick="btn21()" id="btn21"></button></td><td><button onclick="btn22()" id="btn22"></button></td><td><button onclick="btn23()" id="btn23"></button></td>
        </tr><tr>
            <td><button onclick="btn31()" id="btn31"></button></td><td><button onclick="btn32()" id="btn32"></button></td><td><button onclick="btn33()" id="btn33"></button></td>
        </tr>
    </table>
    <script>
        let btnAry = new Array(3);

        for (var i = 0; i < m; i++) {
            btnAry[i] = new Array(3);
        }

        for(var r = 0; r < 3; r ++){
            for(var c = 0; c < 3; c ++){
                btnAry[r][c] = document.getElementById("btn");
            }
        }
        btn11 = document.getElementById("demo");

        function myFunction() {
            document.getElementById("demo").innerHTML = "Hello World";
        }
        
    </script>
</body>
</html>

