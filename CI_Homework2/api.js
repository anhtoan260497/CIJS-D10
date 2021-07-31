async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}
// 
let rootProduct = document.getElementById("root")

const renderUI = async () => {
  let data = await getData("https://60ae0d5e80a61f00173324bc.mockapi.io/products"
  );
  let newData = data.filter(el =>{
      return el.id <= 20
  })
  console.log(newData);
  newData.map(el=>{
    let color = ""
    if(el.color == null) {color = 0} else {color = el.color}
    rootProduct.insertAdjacentHTML("beforeend",
    `<div class="product-container">
    <img src="${el.image}">
    <p class="product-name">${el.name}</p>
    <p>${el.errorDescription}</p>
    <p>ID: <span>${el.id}</span></p>
    <p>Color : <span>${color}</span></p>
    <h3>SKU: <span>${el.sku}</span></h3>
</div>`
    )
  })
};

renderUI();
