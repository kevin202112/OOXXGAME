// let btnAry = new Array(3);
let isO = true;

// for (var i = 0; i < m; i++) {
//     btnAry[i] = new Array(3);
// }

// for(var r = 0; r < 3; r ++){
//     for(var c = 0; c < 3; c ++){
//         btnAry[r][c] = document.getElementById("btn" + r + c);
//     }
// }

function btn(r,c){
    if(isO){
        isO = false;
        // btnAry[r][c].innerHTML = "O";
        document.getElementById("btn"+r+c).innerHTML = "O";
    }else{
        isO = true;
        document.getElementById("btn"+r+c).innerHTML = "O";
    }
}
        


// for (var i = 0; i < m; i++) {
//     btnAry[i] = new Array(3);
// }

// for(var r = 0; r < 3; r ++){
//     for(var c = 0; c < 3; c ++){
//         btnAry[r][c] = document.getElementById("btn" + r + c);
//     }
// }

// // for(var r = 0; r < 3; r ++){
// //     for(var c = 0; c < 3; c ++){
// //         function btn() {
// //             document.getElementById("btn00").innerHTML = "Hello World";
// //         }
// //     }
// // }
// function btn00() {
//     document.getElementById("btn00").innerHTML = "Hello World";
// }  