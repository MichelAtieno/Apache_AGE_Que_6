const txt = document.getElementById("userinput");
const btn = document.getElementById("btn1");
const out = document.getElementById("output1");

function ReverseString(str) {
    return str.split('').reverse().join('')
}

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
}

function fun1() {
    if (palindrome(txt.value) == true) {
        out.innerHTML = `<p>${txt.value} is a palindrome.</p>`
    }
    else {
        const NotPalindrome = ReverseString(txt.value);
        out.innerHTML = `<p>${NotPalindrome}</p>`
    }  
}

btn.addEventListener("click", fun1);