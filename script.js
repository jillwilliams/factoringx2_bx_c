const myProblem = () => {
    var a = document.getElementById("varA").value;
    var b = document.getElementById("varB").value;
    if (a == "2" && b == "3") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc = () => {
    document.getElementById("demo1").innerHTML = myProblem();
}

const myProblem2 = () => {
    return "(x + 2)(x + 3) or (x + 3)(x + 2)";
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}

const myProblem3 = () => {
    var a2 = document.getElementById("varA2").value;
    var b2 = document.getElementById("varB2").value;
    if (a2 == "4" && b2 == "5") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
}

const myProblem4 = () => {
    return "(x + 4)(x + 5) or (x + 5)(x + 4)";
};
const myCalc4 = () => {
    document.getElementById("demo4").innerHTML = myProblem4();
}

const myProblem5 = () => {
    var a3 = document.getElementById("varA3").value;
    var b3 = document.getElementById("varB3").value;
    if (a3 == "3" && b3 == "8") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc5 = () => {
    document.getElementById("demo5").innerHTML = myProblem5();
}

const myProblem6 = () => {
    return "(x + 3)(x + 8) or (x + 8)(x + 3)";
};
const myCalc6 = () => {
    document.getElementById("demo6").innerHTML = myProblem6();
}

const myProblem7 = () => {
    var a4 = document.getElementById("varA4").value;
    var b4 = document.getElementById("varB4").value;
    if (a4 == "4" && b4 == "6") {
        return "Good Job!";
    } else
        return "Try Again!";
};
const myCalc7 = () => {
    document.getElementById("demo7").innerHTML = myProblem7();
}

const myProblem8 = () => {
    return "(x + 4)(x + 6) or (x + 6)(x + 4)";
};
const myCalc8 = () => {
    document.getElementById("demo8").innerHTML = myProblem8();
}

