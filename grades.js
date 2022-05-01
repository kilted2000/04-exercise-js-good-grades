//script should subtract points missed by the total points possible and divide the result by the total possible points. 

let pointsPoss = 50;
let pointsMissed = prompt("How many points did you miss?")
console.log(((pointsPoss - pointsMissed) / pointsPoss ) * 100 + "%");