// favorite page

// Add products
let wishlist=JSON.parse(localStorage.getItem("wishlist"))
 for(let favprod of wishlist){
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
  let tdaction = document.createElement("td")

  
  img.setAttribute("src",favprod.img);
  tdimg.append(img);
  img.style=`width:45%;`
  checkbox.setAttribute("type","checkbox");
  tdname.innerText = favprod.name;
  tdname.style=`font-size: 20px;
  color: #c9af08;
  font-weight: 700;`
  tdprice.innerText = favprod.price;
  tdprice.style = `font-size: 20px; color: #37373a; font-weight: 700;`
  tdcheckbox.append(checkbox);
  tdstock.innerHTML = `<p style="color: green; font-size:20px; font-weight: 700;">Instock</p>`;
  tdaction.innerHTML = 
  `<a style="padding: 3px 7px;
  color: #060505;
  background-color: #5dd35d;
  font-weight: 500;
  border-radius: 30px;
  cursor:pointer;">
  Add to Cart</a>`;
  removeicn.innerHTML = `<i class="fa-solid fa-trash-can remove" style="cursor:pointer; font-size:18px;"></i>`;

  tr.append(tdcheckbox,tdimg,tdname,tdprice,tdstock,tdaction,removeicn)
  tbody.append(tr)
}

// Remove Product from Wishlist
let remove = document.querySelectorAll(".remove")
for(let removeicon of remove){
  removeicon.addEventListener("click",function(){
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].price == removeicon.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText) {
        wishlist.splice(i, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        window.location.reload();
      }
    }
  })
}


// Message
MessageFav();
function MessageFav(){
  if(document.querySelector(".tbody").children.length == 0){
    let message = document.createElement("div")
    let text = document.createElement("h2")
    text.innerText="You have no favorited products yet"
    message.append(text)
    document.querySelector(".tbody").append(message)
  }
}
// Wishlist