function modifyInto() {
    document.getElementById("combo").innerHTML = "Wow, changed!";
}

function validate() {
    var val = document.getElementById("number").value;

    if(val >= 10 && val <= 15)
        document.getElementById("output").textContent = "Input is OK"
    else
        document.getElementById("output").textContent = "Input is not valid"
}