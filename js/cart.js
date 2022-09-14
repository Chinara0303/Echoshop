let basket=JSON.parse(localStorage.getItem("basket"))
 for(let product of basket){
 
  let tbody = document.querySelector(".tbody");

  let tr = document.createElement("tr");
  let checkbox = document.createElement("input");
  let tdcheckbox = document.createElement("td")
  let tdimg = document.createElement("td")
  let img = document.createElement("img")
  let tdprice = document.createElement("td")
  let tdname = document.createElement("p")
  let removeicn = document.createElement("td")
  let tdstock = document.createElement("td")
  let tdquantity = document.createElement("td")

  
  img.setAttribute("src",product.img);
  tdimg.append(img);
  img.style=`width:45%;`
  checkbox.setAttribute("type","checkbox");
  tdname.innerText = product.name;
  tdquantity.innerText=product.count
  tdquantity.style = `font-weight:600;`
  tdname.style=`font-size: 20px;
  color: #c9af08;
  font-weight: 700;`
  tdprice.innerText = product.price;
  tdprice.style = `font-size: 20px; color: #37373a; font-weight: 700;`
  tdcheckbox.append(checkbox);
  tdstock.innerHTML = `<p style="color: green; font-size:20px; font-weight: 700;">Instock</p>`;
  removeicn.innerHTML = `<i class="fa-solid fa-trash-can remove" style="cursor:pointer"></i>`;

  tr.append(tdcheckbox,tdimg,tdname,tdprice,tdstock,tdquantity,removeicn)
  tbody.append(tr)
}

let remove = document.querySelectorAll(".remove")
for(let removeicon of remove){
  removeicon.addEventListener("click",function(){
    for (let i = 0; i < basket.length; i++) {
      if (basket[i].price == removeicon.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText) {
        basket.splice(i, 1);
        localStorage.setItem("basket", JSON.stringify(basket));
        window.location.reload();
      }
    }
  })
}


function MessageCart(){
  if(document.querySelector(".tbody").children.length == 0){
    let message = document.createElement("div")
    let text = document.createElement("h2")
    text.innerText="No products in your cart"
    message.append(text)
    document.querySelector(".tbody").append(message)
  }
}
MessageCart();

function countBasket() {
  let bucket = JSON.parse(localStorage.getItem("basket"));
  document.getElementById("productCount").innerText=bucket.length;
}

countBasket();