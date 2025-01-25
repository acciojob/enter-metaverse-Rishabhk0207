//your JS code here. If required.

const display = document.querySelector("#status");
const btn = document.querySelector("#enterBtn");

btn.addEventListener("click",()=>{
	display.innerHTML = `<h1> ${display.innerText} </h1>` ;
})