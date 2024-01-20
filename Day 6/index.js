let array1 =["hello1", 14,24, "hello2"] 

let newArray1 = array1.filter((item1) => typeof item1 === "number")


console.log(newArray1);

let link = "https://google.com"

function cheekLInk(linkPart){
   return linkPart.indexOf("https://")  >= 0
   ? "it contain"
   :"not contain"
}

console.log(cheekLInk(link));

let array4 = [1, 2, 3, 4, 5];

let sum3 = 0

array4.forEach((numbers) => (sum3 += numbers))

console.log(sum3);

let languages = ['html', 'css', 'javascript', "python", 'php'];

let newItem = languages.filter(function(item) {
   return item.length > 3
});
console.log(newItem);

let words = ["madrid", "rome", "milan", "berlin"];

let filtredWords = words.filter((item5) =>
    item5.includes("m") && item5.includes("n")
);

console.log(filtredWords);

let array6 = [-1, -2, -3, 4].some((number) => number > 0);

console.log(array6);

let array7 = "12345"

let splitedNum = array7.split("").map(Number);

let sum = 0

for (let i = 0; i < splitedNum.length; i++) {
   sum += splitedNum[i]    
}
console.log(sum);