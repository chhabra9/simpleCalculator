var buttonz = document.querySelectorAll(".keys button");
console.log(buttonz[5].innerHTML);
var input = "";
var flag = 0;
var prevVal = "";
var operator = ['+', '-', '*', '/', '.'];

function find(c) {
    for (var i = 0; i < operator.length; i++) {
        if (c == operator[i])
            return true;
    }
    return false;
}

for (var i = 0; i < buttonz.length; i++) {
    buttonz[i].addEventListener("click", function() {
        var buttonClicked=this.name;
        console.log(buttonClicked);
        buttonAnimation(buttonClicked);
        var val = this.innerHTML;
        calculate(val);

    })
}
function buttonAnimation(buttnClicked){
    var clicked=document.getElementsByName(buttnClicked)[0];
    console.log(clicked);
    clicked.classList.add("pressed");
    console.log(clicked);
    setTimeout(function(){
        clicked.classList.remove("pressed")
    },30);
}

function calculate(val){
    if (!(find(prevVal) && find(val))) {

        if ((flag == 1) && (val == '+' || val == '-' || val == '*' || val == '/')) {
            flag = 0;
            input = input.replace(input, eval(input) + val);
            document.querySelector(".result").textContent = input;
            document.querySelector(".output").textContent = "";

        } else if (input == '0') {
            input = input.replace(input, val);
            document.querySelector(".result").textContent = input;

        } else if (val == 'C') {
            input = input.replace(input, '');
            document.querySelector(".result").textContent = "";
            document.querySelector(".output").textContent = "";
        } else if (val != '=') {
            input = input + val
            document.querySelector(".result").textContent = input;;
        } else if (val == '=') {
            document.querySelector(".output").textContent = eval(input);
            flag = 1;
        }
        prevVal = val;
    }
}
