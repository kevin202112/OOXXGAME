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
            <td><button onclick="btn(0,0)" id="btn00"></button></td><td><button onclick="btn(0,1)" id="btn01"></button></td><td><button onclick="btn(0,2)" id="btn02"></button></td>
        </tr>
        <tr>
            <td><button onclick="btn(1,0)" id="btn10"></button></td><td><button onclick="btn(1,1)" id="btn11"></button></td><td><button onclick="btn(1,2)" id="btn12"></button></td>
        </tr>
        <tr>
            <td><button onclick="btn(2,0)" id="btn20"></button></td><td><button onclick="btn(2,1)" id="btn21"></button></td><td><button onclick="btn(2,2)" id="btn22"></button></td>
        </tr>
    </table>
    <script>
        let btnAry = new Array(3);

        for (var i = 0; i < m; i++) {
            btnAry[i] = new Array(3);
        }

        for(var r = 0; r < 3; r ++){
            for(var c = 0; c < 3; c ++){
                btnAry[r][c] = document.getElementById("btn" + r + c);
            }
        }
       
       function
        
    </script>
</body>
</html>

 <!-- for (var i = 0; i < m; i++) {
            btnAry[i] = new Array(3);
        }

        for(var r = 0; r < 3; r ++){
            for(var c = 0; c < 3; c ++){
                btnAry[r][c] = document.getElementById("btn" + r + c);
            }
        }

        for(var r = 0; r < 3; r ++){
            for(var c = 0; c < 3; c ++){
                function btn() {
                    document.getElementById("btn00").innerHTML = "Hello World";
                }
            }
        }
        <!-- function btn00() {
            document.getElementById("btn00").innerHTML = "Hello World";
        }  --> -->