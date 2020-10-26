let mainPro = document.getElementById("showList");
function soProduct(pic, name, des, price, id) {
    mainPro.insertAdjacentHTML('beforeEnd',
      `
      <div class="productItem">
        <div class="productPic"><img src="./media/img/./${pic}" alt=""></div>
        <div class="productTit">
          <b>${name}</b> <br>
          <span>${des}</span>
        </div>
        <div class="productPrice">₫.${price}</div>
        <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn">Thêm vào giỏ hàng</button></div>
        <div class="showde>
       </div>
      
      `
    )
  }
mainPro.innerHTML = "";
for (let i = 0; i < product.length; i++) {
  soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
}

let itemNew = document.getElementById("new");

function soProductNew(pic, name, des, price, id) {
  itemNew.insertAdjacentHTML('beforeEnd',
    `
    <div class="productItem">
      <div class="productPic"><img src="./Multi/img/${pic}" alt=""></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${des}</span>
      </div>
      <div class="productPrice">${price}</div>
      <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn">Thêm vào giỏ hàng</button></div>
      <div class="showde>
     </div>
    
    `
  )
}
//show sp mới nhất

let itemTrend = document.getElementById("trend");

function soProductTrend(pic, name, des, price, id) {
  itemTrend.insertAdjacentHTML('beforeEnd',
    `
    <div class="productItem">
      <div class="productPic"><img src="./Multi/img/${pic}" alt=""></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${des}</span>
      </div>
      <div class="productPrice">${price}</div>
      <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn">Thêm vào giỏ hàng</button></div>
      <div class="showde>
     </div>
    
    `
  )
}
itemTrend.innerHTML = "";
soProductTrend(
  product[2].pic,
  product[2].name,
  product[2].des,
  product[2].price
);
soProductTrend(
  product[3].pic,
  product[3].name,
  product[3].des,
  product[3].price
);
soProductTrend(
  product[4].pic,
  product[4].name,
  product[4].des,
  product[4].price
);

let itemCaretory = document.getElementById("caretory");

function soProductCaretory(pic, name, des, price, id) {
 itemCaretory.insertAdjacentHTML('beforeEnd',
    `
    <div class="productItem">
      <div class="productPic"><img src="./Multi/img/${pic}" alt=""></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${des}</span>
      </div>
      <div class="productPrice">${price}</div>
      <div class="AddProduct"><button onclick="AddProduct(${id})" class="btn">Thêm vào giỏ hàng</button></div>
      <div class="showde>
     </div>
    
    `
  )
}
itemCaretory.innerHTML = " ";
soProductCaretory(
  product[1].pic,
  product[1].name,
  product[1].des,
  product[1].price
);
soProductCaretory(
  product[3].pic,
  product[3].name,
  product[3].des,
  product[3].price
);

function changeProductList(type, element) {
  let tabs = document.getElementsByClassName("tab-item");
  for (let x = 0; x < tabs.length; x++) {
    tabs[x].style.background = "orangered";
  }
  element.style.background = "navy";
  document.getElementById(type).style.display = "flex";
  switch (type) {
    case "showList":
      document.getElementById("new").style.display = "none";
      document.getElementById("trend").style.display = "none";
      document.getElementById("caretory").style.display = "none";
      break;
    case "new":
      document.getElementById("trend").style.display = "none";
      document.getElementById("showList").style.display = "none";
      document.getElementById("caretory").style.display = "none";
      break;
    case "trend":
      document.getElementById("new").style.display = "none";
      document.getElementById("showList").style.display = "none";
      document.getElementById("caretory").style.display = "none";
      break;
    case "caretory":
      document.getElementById("new").style.display = "none";
      document.getElementById("showList").style.display = "none";
      document.getElementById("trend").style.display = "none";
      break;
  }
}


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}
// show giỏ h
var LIST_PRODUCT=[];
let carts = document.querySelectorAll('.btn');

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumber();
    console.log(carts[i]);
  });
}
function cartNumber() {
  let pro = localStorage.getItem('cartNumber');
  localStorage.setItem('cartNumber', 1);
  console.log(pro);
}



function AddProduct(id) {
  var myProduct = product.filter(pr => pr.id == id);
  LIST_PRODUCT.push(myProduct);
  console.log(LIST_PRODUCT);

  document.getElementById("totalCardProduct").innerHTML = LIST_PRODUCT.length;
}
//login
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
