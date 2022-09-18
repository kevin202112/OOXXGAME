var isO = true;

function btn(r,c){
    if(isO){
        isO = false;
        document.getElementById("btn"+r+c).innerHTML = "O";
    }else{
        isO = true;
        document.getElementById("btn"+r+c).innerHTML = "X";
    }
}

function clearAll(){
    // console.log('kevin');
    // alert("kevin");
    for(var r = 0; r < 3; r ++){
        for(var c = 0; c < 3; c ++){
            
            document.getElementById("btn"+r+c).innerHTML = "click";
        }
    }
}


// let btnAry = new Array(3);

// for (var i = 0; i < m; i++) {
//     btnAry[i] = new Array(3);
// }

// for(var r = 0; r < 3; r ++){
//     for(var c = 0; c < 3; c ++){
//         btnAry[r][c] = document.getElementById("btn" + r + c);
//     }
// }

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