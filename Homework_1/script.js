const navItem = [
  {
    name: "Item 1",
    children: ["Item 1.1", "Item 1.2", "Item 1.3"],
  },
  {
    name: "Item 2",
    children: [
      "Item 1.1",
      "Item 1.2",
      "Item 1.3",
      "Item 1.4",
      "Item 1.5",
      "Item 1.6",
    ],
  },
  { name: "Item 3" },
  { name: "Item 4" },
  { name: "Item 5" },
];


window.onload = function(){
  let i = 0
for(let x of navItem ) {
document.getElementsByClassName("navbar")[0].innerHTML +=`<span>${x.name}\n<div class="navbar_dropdown"></div></span>`
if(x.hasOwnProperty("children")) {
for(let y of x.children){
document.getElementsByClassName("navbar_dropdown")[i].innerHTML +=`<span>${y}</span>`
} i++
 }
}
  }

