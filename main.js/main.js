let link = document.querySelector(".links");
let icon = document.querySelector(".links .icon span:nth-child(2)");
let nav = document.querySelector(".links .nav");

let year = document.querySelector(".footer #year");


// navBar
link.onclick = ()=>{
    nav.classList.toggle("active");
    icon.style.width = nav.classList.contains("active") ? "100%" : "50%";
}
//add Year
year.textContent = new Date().getFullYear();

// scroller
let ele = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

document.addEventListener("scroll", ()=>{
    let scrollTop = document.documentElement.scrollTop;
    ele.style.width =`${(scrollTop/height)*100}%`
});
console.log(document.documentElement.scrollHeight)
console.log(document.documentElement.clientHeight)
// console.log(document.documentElement.scrollTop)