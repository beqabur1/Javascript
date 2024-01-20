let div1 = document.createElement("div");

div1.classList.add("div1Clas");

let childEl =document.createElement("img");

childEl.setAttribute("src", "https://rb.gy/ucvhsw");

childEl.setAttribute("alt", "img");

div1.appendChild(childEl);

let div2 = document.createElement("h2");

div2.classList.add("title");

div2.innerText = "image title";

div2.style.color = "red";

div2.style.fontSize = "30px";

div1.appendChild(div2);

document.getElementById("parentId").appendChild(div1);