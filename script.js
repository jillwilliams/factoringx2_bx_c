const myProblem = ( ) => {
    var str = "x<sup>2</sup>";
    var myA = document.getElementById("varA").value;
    var myB = document.getElementById("varB").value;
    var a = parseFloat(myA);
    var b = parseFloat(myB);

    if (a+b === 5 && a*b === 6) {
        return ("Good Job!");
    } else  
        return ("Please try again.");
}
const myCalc = ( ) => {
document.getElementById("demo").innerHTML = myProblem( );
}

// TEXT-BOX: SOLUTIONS TO EXAMPLE 
const getImage = ( ) =>  {
const solution = ("(x + 2)(x + 3)" + " or " + 
    "(x + 3)(x + 2)");
    document.getElementById("solutionPic").value;
        return solution;
}
const revealAnswer = ( ) => {
    document.getElementById("demo2").innerHTML = getImage( );
}


// for image click to reveal solution png
// function showImage (src, width, height, alt);
// var blackhelmet = document.createElement("player");
//     img.src = .win_the_day_player.png,
//     img.width = auto;
//     img.height = auto;
//     img.alt = alt;
//     document.body.appendChild (img.png);
// }
//     <!-- /* // This next line will just add it to the <body> tag -->
//     <!-- // but you can adapt to make it append to the element you want. */ -->