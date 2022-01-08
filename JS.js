  //list of all product in this Ecommerce website
  var list = [
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00608983.jpg',name:"Pink Dress" , price:400, numCard:0},
    {id:'men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-00yKnsjQNyQezlJCTjx2fdL8qNGnqauriQ&usqp=CAU',name:"Black Pants", price:120, numCard:0 },
    {id:'Kids', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/A79234s.jpg',name:"Yellow Dress", price:85, numCard:0},
    {id:'men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHD8Fadev2VFPxoQgCnymcud0OXuI_TGCVjQ&usqp=CAU' , name:"white training",price:170, numCard:0},
    {id:'women', image: 'https://litb-cgis.rightinthebox.com/images/640x853/201811/mqzw1541666505306.jpg?fmt=webp&v=1' , name:"Red Dress",price:300, numCard:0},
    {id:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202107/bps/product/inc/vrgqcu1626145495474.jpg?fmt=webp&v=1',name:"Shirt", price:95, numCard:0 },
    {id:'Kids', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/530344s2.jpg' ,name:"Black Jacket", price: 140, numCard:0 },
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/75/P00572979.jpg', name:"Wide  Leg Pants",price:100, numCard:0 },
    {id:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202006/jjlpxs1592220968880.jpg?fmt=webp&v=1',name:"Brown Jacket", price:250, numCard:0 },
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2d/P00593536.jpg' ,name:"Pink Jacket", price:220, numCard:0},
    {id:'Kids', image: 'https://cdn.shopify.com/s/files/1/0074/6402/6227/t/8/assets/girloutfits-1585254146587.jpg' ,name:"Blouse & Pants", price:40 , numCard:0},
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00489427.jpg' ,name:"White Pants", price:50, numCard:0},
    {id:'Kids', image: 'https://n.nordstrommedia.com/id/sr3/9dfbf6ec-293b-4ee7-ad6f-4f20d16e4511.jpeg?h=365&w=240&dpr=2' ,name:"Overhaul", price:75, numCard:0},
    {id:'women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC1_0JhUhEveqD7hUfmeojQ5LoL6y88jEnQ&usqp=CAU' ,name:"Sport Jacket", price:210, numCard:0 },
    {id:'Kids', image: 'https://sc02.alicdn.com/kf/Hdc0419fa5eb34791b4f5e23692743344O/223189865/Hdc0419fa5eb34791b4f5e23692743344O.jpg' ,name:"Shirt & Jeans", price:160, numCard:0 },
    {id:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/201909/xonpta1568974170777.jpg?fmt=webp&v=1' ,name:"Jacket", price:150 , numCard:0},
    {id:'Kids', image: 'https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G25/shotview-315x472/4709/491-213s.jpg' ,name:"Pajamas", price:80, numCard:0 },
    {id:'women', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202112/bps/product/inc/klyidb1639989879988.jpg',name:"Women Jacket", price:180, numCard:0 },
    { id:'men',image: 'https://contents.mediadecathlon.com/p2010290/k$3291ed52a6496aa3a55ef2aa30791924/sq/250x250/Mens-NH500-Regular-off-road-hiking-trousers.jpg' ,name:"Beige Pants", price:120, numCard:0},
    {id:'Kids', image: 'https://4.imimg.com/data4/SL/TD/MY-14695632/meenakshi-kids-wear-500x500.jpg' ,name:"Girl Pajamas", price:60 , numCard:0}
    
    
];

//This function print any list of objects as a card
function printCard(array){
  array.forEach(list=>{
    const card = `<div class="card" style="float:left; width:15%; height:200px;margin-top:50px;margin-left:10px;">

    <div class="card-body">
        <img class="card-img-top" style="width:70%; height:100px;" src=${list.image} alt="image">
        <h4 class="card-text" style="width:100%; height:20px;  ">${list.price}</h4>
        <h4 class="card-text" style="width:100%; height:20px;  ">${list.name}</h4>
        <button  type="submit"  class="Addbtn" >Add to Cart</button>
     </div>
 </div>`

const newCard = document.createElement('div');
newCard.innerHTML = card;
document.getElementById("product").appendChild(newCard.firstChild);
  });
}

//storing list of object in local storage
if ("list" in localStorage) {

} else {
    let listStorage=JSON.stringify(list);
    localStorage.setItem('list',listStorage);
  }

//print the content of list array that contain all element
printCard(list);
  

//filter list of objects to be contain only men objects
const MenfilterList= list.filter(function(el){
return el.id == "men";

});

//print list of objects (MenfilterList) that contain only men products
//printCard(MenfilterList);


//filter list of objects to be contain only Women objects
const WomenfilterList= list.filter(function(el){
  return el.id == "women";
  
  });


//print list of objects (WomenfilterList) that contain only Women products
//printCard(WomenfilterList);


//filter list of objects to be contain only Kids objects
const KidsfilterList= list.filter(function(el){
  return el.id == "Kids";
  
  });


//print list of objects (KidsfilterList) that contain only Kids products
//printCard(KidsfilterList);



//sort list of objects ascending according to price value
const ascendingOrderList = list.sort(function(a,b){
  return a.price - b.price;
});

//print list of objects (list) in ascending order according to price
//printCard(ascendingOrderList);



function asc()
{

    const BtnASC = document.querySelector(".ascendingbtn");
    document.getElementById("product").innerHTML="";
    BtnASC.addEventListener("click",printCard(ascendingOrderList));

}

function allProduct()
{
  
  
    const BtnA= document.querySelector(".btna");
    document.getElementById("product").innerHTML="";
    BtnA.addEventListener("click",printCard(list));
    
     
}

function men()
{
  
   const BtnM = document.querySelector(".btnm");
   document.getElementById("product").innerHTML="";
   BtnM.addEventListener("click",printCard(MenfilterList));
    
    
}

function women()
{
  
  const BtnW = document.querySelector(".btnw");
  document.getElementById("product").innerHTML="";
  BtnW.addEventListener("click",printCard(WomenfilterList));
    
    
}

function kids()
{
  const BtnK = document.querySelector(".btnk");
  document.getElementById("product").innerHTML="";
  BtnK.addEventListener("click",printCard(KidsfilterList));
  
 
}
 

/////////////////////////////////////
let ADDbutton = document.querySelectorAll('.Addbtn')
for(let i=0; i<ADDbutton.length;i++){
  ADDbutton[i].addEventListener('click',()=>{
    numberofCards(list[i]);
    Tcost(list[i]);
    
})
}




//to calculate number of cards
function numberofCards(product){
  
  let NumProducts = localStorage.getItem('CardNumber');
 
  NumProducts = parseInt(NumProducts);
  if(NumProducts){
     localStorage.setItem('CardNumber',NumProducts + 1);
    document.querySelector('.cartIcon span').textContent = NumProducts+1;
  }

  else{
    localStorage.setItem('CardNumber',1);
    document.querySelector('.cartIcon span').textContent = 1;
  }

  SetElementToCard(product);

}




//to change number in cart
function CartProductNum(){
  let NumOfProducts = localStorage.getItem('CardNumber');
  if(NumOfProducts){
    document.querySelector('.cartIcon span').textContent = NumOfProducts ;
  }
}

//to calculate total Price of products in cart
function Tcost(product)
{
 
  let cartCost = localStorage.getItem('totalCost');
  
  if(cartCost==null){
    
    localStorage.setItem("totalCost",product.price);
    
  }
    else{
      cartCost=parseInt(cartCost);
      localStorage.setItem("totalCost", (cartCost + product.price));
     
  }
  
}


function SetElementToCard(product){
  let CardElement = localStorage.getItem('CardInCart')
  CardElement = JSON.parse(CardElement);
 
  if(CardElement !=null){
    if(CardElement[product.name]== undefined){
    CardElement={
     ...CardElement,
      [product.name]:product
    
    }
    
  }
  CardElement[product.name].numCard+=1;
  
  }
  else{
    
    product.numCard=1;
  CardElement = {
     [product.name]:product
  }
    
  
}
  localStorage.setItem("CardInCart", JSON.stringify (CardElement));
}

  

function moveToCart()
{
  let CardElement= localStorage.getItem("CardInCart");
  CardElement = JSON.parse(CardElement);
 let CartProduct = document.querySelector(".products");
  
    CardElement.forEach(e=>{
     // CartProduct.innerHTM = 
     const CardC=
      `<div class="product" style="float:left; width:15%; height:200px;margin-top:10px;margin-left:10px;">
         
      <div class="product-body">
          <img class="card-img-top" style="width:70%; height:100px;" src=${e.image} alt="image">
          
          <h4 class="card-text" style="width:100%; height:20px;  ">${e.name}</h4>
          <h4 class="card-text" style="width:100%; height:20px;  ">${e.price}</h4>
          <button  type="submit"  class="remove" >Remove</button>
       </div>
   </div>
 <dive class="price">${e.price}</div>
 <dive class="quantity">${e.numCard}<span></span></div>
 
 `
 const newCardc= document.createElement('div');
newCardc.innerHTML = Cardc;
document.getElementById("products").appendChild(newCardc);
    });
  }



CartProductNum();
moveToCart();

//when click checkOut btn
const ChBtn = document.querySelector(".checkOutBtn");
ChBtn.addEventListener("click",Boxinformation);

function Boxinformation()
{
      const Box=
      `<h2>First Name</h2>
      <input type="text" value="">
      <h2>Last Name</h2>
      <input type="text" value="">
      <h2>Phone Number</h2>
      <input type="number" value="">
      <h2>City</h2>
      <input type="text" value="">
      <h2>Street Address</h2>
      <input type="text" value="">
      <h2>Visa Number</h2>
      <input type="number" value="">
      <h2>Visa Password</h2>
      <input type="password" value="">
      <button type="submit">Save</button>
 `
 const newBox = document.createElement('div');
newBox.innerHTML = Box;
document.getElementById("BoxInfo").appendChild(newBox);
}
 

////////////////////SELLER/////////////////////////////////////////
var ListObject = JSON.parse(localStorage.getItem('list'));
ListObject.push ({
  

});
