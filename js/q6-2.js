const txt2 = document.getElementById("userinput2");
const btn2 = document.getElementById("btn2");
const out2 = document.getElementById("output2");


function convertToList() {
    const inputText = txt2.value;
    const splitText = inputText.split(",");
    return splitText
    
}

function missing(arr) {
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        x = x + 1;
        if (arr[i] != x) {
            return(x);
        }
}}

// function getMissingNo(a, n) {
//     let total = Math.floor((n + 1) * (n + 2) / 2);
//     for (let i = 0; i < n; i++)
//         total -= a[i];
//     return total;
// }

function fun2() {
    userInput = convertToList()
    // length = userInput.length;
    const missingValue = missing(userInput) //getMissingNo(userInput, length);
    out2.innerHTML = `<p>${missingValue}</p>`
}

btn2.addEventListener("click", fun2);