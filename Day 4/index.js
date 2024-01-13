"use strict";

let array1 = ["hello1", 14, 24, "hello2"];
let filteredArray1 = array1.filter((value) => typeof value == "number");
console.log(filteredArray1);

let array2 = [14, 150, "css", null, "javascript", 25];
let mappedArray2 = array2.map((value) =>
    typeof value == "number"
        ? value ** 2
        : typeof value == "string"
        ? value.toUpperCase()
        : value
);
console.log(mappedArray2);


let info = "good day";
let moddedInfo = info.split(" ").slice(1, 2);
console.log(moddedInfo);

let moddedInfo2 = info.split(" ")[1];

function stringLength(string) {
    return string.length;
}
console.log(stringLength(moddedInfo2));


function capital() {
    let correct = "tbilisi";
    // let answer = prompt("Capital of Georgia : ");
    // davakomentare imitom rom sul errors agdebs sxva shemtxvevashi
    // console.log(answer.toLowerCase === correct ? "correct" : "wrong");
}
capital();


let link = "https://google.com";
function containsHttps(string) {
    return string.indexOf("https://") >= 0
        ? "yes it contains 'https://'"
        : "no it doesnt contain 'https://'";
}
console.log(containsHttps(link));


let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(-2, 1, "strawberry");
console.log(fruits);



let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");
array.unshift("html", "css");
console.log(array.length);
array.shift();
array.pop();
console.log(array);



let fruit = ["orange", "banana", "kiwi"];
console.log(fruit.length);
fruit.push("apple", "pineapple");
fruit.unshift("watermelon");
console.log(fruit.length);
fruit.splice(2, 0, "mango");
fruit.shift();
fruit.pop();
console.log(fruit.length);



let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, "a", "b", "c");
console.log(array3);



let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach((value) => (sum += value));
console.log(sum);


let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let dividedArray = array5.map((value) => value / 3);
console.log(dividedArray);


let languages = ["html", "css", "javascript", "python", "php"];
console.log(languages.filter((l) => l.length > 3));


let words = ["madrid", "rome", "milan", "berlin"];
console.log(words.filter((l) => l.includes("m") && l.includes("n")));


let array6 = [-1, -2, -3, 4];
console.log(array6.some((e) => e > 0));


let array7 = [15, 100, 25, 10, 36];
array7.splice(array7.indexOf(10), 1);
console.log(array7);


let array8 = [1, 2, 3, 4, 5];
array8.splice(array8.indexOf(3), 1, "three");
console.log(array8);