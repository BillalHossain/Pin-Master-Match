

var pin = document.querySelector(".generate-btn")
var pinMatcher = document.getElementById("form-input")

pin.addEventListener("click", function () {

    var random = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById("form-input").value = random;

})


var numbers = document.getElementById("number")

function number(x) {
    numbers.value = numbers.value + x;

}
function clean() {
    numbers.value = ""
}

var submit = document.getElementById("submit")
var trueA = document.getElementById("true")
var falseA = document.getElementById("false")

submit.addEventListener("click", function () {

    if (numbers.value == pinMatcher.value) {
        
        trueA.style.display = "block"
        // trueA.style.display = "none"
    }
    else {
        falseA.style.display = "block"
        
    }
    numbers.value="";
})














