// navbar
let li = document.querySelectorAll("li")
li.forEach(element => {
    element.addEventListener("click",function(){
        li.forEach((e)=>{
            e.classList.remove("active")
        })
        this.classList.add("active")
    })
});


// Slick slider

$(document).ready(function(){
// slider products
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
// slider intro
  $('.slider-intro').slick({
    dots:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000
  });
});

// Up button
  $('#topbtn').click(function(){
    $('html').animate({
      scrollTop:0
    },900)

  })

// header

$(window).scroll(function(){
  var header = $('#Header');
  scroll = $(window).scrollTop();
  if(scroll >= 100) header.css({
    'position':'fixed',
    'top':'0',
    'left':'0',
    'right':'0',
    'z-index':'9999',
    'background-color':'#fff',
    'box-shadow': '0 8px 20px 0 rgba(0, 0, 0, 0.05)',
  })
  else header.css({
    'position':'relative',
    'box-shadow':'none'
  })

  
})
$(window).scroll(function(){
  var header = $('#Phone-header');
  scroll = $(window).scrollTop();
  if(scroll >= 150) header.css({
    'position':'fixed',
    'top':'0',
    'left':'0',
    'right':'0',
    'z-index':'9999',
    'background-color':'#fff',
    'box-shadow': '0 8px 20px 0 rgba(0, 0, 0, 0.05)',
  })
  else header.css({
    'position':'relative',
    'box-shadow':'none'
  })

  
})
// sidebar

let openicon=document.getElementById("openicon");
let closeicon=document.getElementById("closeicon");
let sidebar=document.getElementById("sidebar");
let overlay=document.querySelector(".overlay")

openicon.addEventListener("click",function(){
  sidebar.style.width="100%";
  sidebar.style.opacity="1";
  overlay.style.opacity="1"
  overlay.style.visibility="visible"

  sidebar.style.visibility="visible";

})
closeicon.addEventListener("click",function(){
  sidebar.style.width="0%";
  sidebar.style.opacity="0";
  overlay.style.opacity="0";
  overlay.style.visibility="hidden";

  sidebar.style.visibility="hidden";
  
})
// sidebar

// basket
if ((localStorage.getItem("basket")) == null){
  localStorage.setItem("basket",JSON.stringify([]))
}

// Arrival section
let addbutton = document.querySelectorAll(".addbutton")
for(let btn of addbutton){
  btn.onclick = function(e){
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("basket")) == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    
    let id = this.parentElement.parentElement.getAttribute("data-id")
    let img = this.parentElement.parentElement.querySelector("img").getAttribute("src")
    let name = this.parentElement.nextElementSibling.querySelector("a").innerText
    let price = this.parentElement.parentElement.querySelector("span small").innerText

    let existProduct = basket.find((p)=>p.id==id)
    if(existProduct === undefined){
      basket.push({
        id:id,
        img:img,
        name:name,
        price:price,
        count:1
      });
    }
    else{
      existProduct.count += 1;
    }
    localStorage.setItem("basket",JSON.stringify(basket))
    countBasket();
  }
}

// Popular products section
let addbtn = document.querySelectorAll(".addbtn")
for(let btn of addbtn){
  btn.onclick = function(e){
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("basket")) == null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }
    let basket = JSON.parse(localStorage.getItem("basket"));
    
    let id = this.parentElement.parentElement.parentElement.parentElement.getAttribute("data-id")
    let img = this.parentElement.parentElement.previousElementSibling.getAttribute("src")
    let name = this.parentElement.parentElement.parentElement.nextElementSibling.querySelector("a").innerText
    let price = this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.querySelector("span").innerText

    let existProduct = basket.find((p)=>p.id==id)
    if(existProduct === undefined){
      basket.push({
        id:id,
        img:img,
        name:name,
        price:price,
        count:1
      });
    }
    else{
      existProduct.count += 1;
    }
    localStorage.setItem("basket",JSON.stringify(basket))
    countBasket();
  }
}

function countBasket() {
  let bucket = JSON.parse(localStorage.getItem("basket"));
  document.getElementById("productCount").innerText=bucket.length;
}
countBasket();

// Basket

// Wishlist-favorite
if ((localStorage.getItem("wishlist")) == null){
  localStorage.setItem("wishlist",JSON.stringify([]))
}

let favbtn = document.querySelectorAll(".addfav")
 for(let btn of favbtn){
  btn.onclick = function(e){
    e.preventDefault();

    if ((localStorage.getItem("wishlist")) == null){
      localStorage.setItem("wishlist",JSON.stringify([]))
    }

    let wishlist = JSON.parse(localStorage.getItem("wishlist"))
    let id = this.parentElement.parentElement.parentElement.parentElement.getAttribute("data-id")
    let img = this.parentElement.parentElement.parentElement.querySelector("img").getAttribute("src")
    let name = this.parentElement.parentElement.parentElement.nextElementSibling.querySelector("a").innerText
    let price = this.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.querySelector("span").innerText
    
    let existFavProd = wishlist.find((p)=>p.id==id)
    if(existFavProd===undefined){
      wishlist.push({
        id:id,
        img:img,
        name:name,
        price:price,
        count:1
      });
    }
    else{
      existFavProd.count += 1
    }
    localStorage.setItem("wishlist",JSON.stringify(wishlist))

  }
 
}



