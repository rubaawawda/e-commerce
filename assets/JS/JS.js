  //list of all product in this Ecommerce website
  var list = [
    {type:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00608983.jpg' , price:400, numCard:0, id:0},
    {type:'men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-00yKnsjQNyQezlJCTjx2fdL8qNGnqauriQ&usqp=CAU', price:120, numCard:0 ,id:1},
    {type:'Kids', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/A79234s.jpg', price:85, numCard:0, id:2},
    {type:'men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHD8Fadev2VFPxoQgCnymcud0OXuI_TGCVjQ&usqp=CAU' , name:"white training",price:170, numCard:0,id:3},
    {type:'women', image: 'https://litb-cgis.rightinthebox.com/images/640x853/201811/mqzw1541666505306.jpg?fmt=webp&v=1' ,price:300, numCard:0, id:4},
    {type:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202107/bps/product/inc/vrgqcu1626145495474.jpg?fmt=webp&v=1', price:95, numCard:0,id:5 },
    {type:'Kids', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/530344s2.jpg' , price: 140, numCard:0 ,id:6 },
    {type:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/75/P00572979.jpg',price:100, numCard:0, id:7 },
    {type:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202006/jjlpxs1592220968880.jpg?fmt=webp&v=1', price:250, numCard:0, id:8 },
    {type:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2d/P00593536.jpg' , price:220, numCard:0, id:9},
    {type:'Kids', image: 'https://cdn.shopify.com/s/files/1/0074/6402/6227/t/8/assets/girloutfits-1585254146587.jpg' , price:40 , numCard:0, id:10},
    {type:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00489427.jpg' , price:50, numCard:0, id:11},
    {type:'Kids', image: 'https://n.nordstrommedia.com/id/sr3/9dfbf6ec-293b-4ee7-ad6f-4f20d16e4511.jpeg?h=365&w=240&dpr=2' , price:75, numCard:0 ,id:12},
    {type:'women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC1_0JhUhEveqD7hUfmeojQ5LoL6y88jEnQ&usqp=CAU' , price:210, numCard:0, id:13 },
    {type:'Kids', image: 'https://sc02.alicdn.com/kf/Hdc0419fa5eb34791b4f5e23692743344O/223189865/Hdc0419fa5eb34791b4f5e23692743344O.jpg' , price:160, numCard:0, id:14 },
    {type:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/201909/xonpta1568974170777.jpg?fmt=webp&v=1' , price:150 , numCard:0, id:15},
    {type:'Kids', image: 'https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G25/shotview-315x472/4709/491-213s.jpg' , price:80, numCard:0, id:16 },
    {type:'women', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202112/bps/product/inc/klyidb1639989879988.jpg', price:180, numCard:0, id:17 },
    {type:'men',image: 'https://contents.mediadecathlon.com/p2010290/k$3291ed52a6496aa3a55ef2aa30791924/sq/250x250/Mens-NH500-Regular-off-road-hiking-trousers.jpg', price:120, numCard:0, id:18},
    {type:'Kids', image: 'https://4.imimg.com/data4/SL/TD/MY-14695632/meenakshi-kids-wear-500x500.jpg' , price:60 , numCard:0, id:19}
    
    
    
];


//This function print any list of objects as a card


//storing list of object in local storage
if ("list" in localStorage) {

} else {
    let listStorage=JSON.stringify(list);
    localStorage.setItem('list',listStorage);
  }
//////////////////////////////////////////////////////////////////
function printCard(array){
  array.forEach(list=>{
    const card = `<div class="card" style="float:left; width:15%; height:200px;margin-top:50px;margin-left:10px;">

    <div class="card-body">
        <img class="card-img-top" style="width:70%; height:100px;" src=${list.image} alt="image">
        <h4 class="card-text" style="width:100%; height:20px;  ">${list.price}</h4>
        <button  type="submit"  class="Addbtn" >Add to Cart</button>
     </div>
 </div>`

const newCard = document.createElement('div');
newCard.innerHTML = card;
document.getElementById("product").appendChild(newCard.firstChild);
  });
}


////////////////////////////////////////////////////////////////
let listStored =JSON.parse(localStorage.getItem("list"));
function printFromLocal()
{
  //let listStored =JSON.parse(localStorage.getItem("list"));
  listStored.forEach(list=>{
    const card = `<div class="card" style="float:left; width:15%; height:200px;margin-top:50px;margin-left:10px;">

    <div class="card-body">
        <img class="card-img-top" style="width:70%; height:100px;" src=${list.image} alt="image">
        <h4 class="card-text" style="width:100%; height:20px;  ">${list.price}</h4>
        <button  type="submit"  class="Addbtn" >Add to Cart</button>
     </div>
 </div>`

const newCard = document.createElement('div');
newCard.innerHTML = card;
document.getElementById("product").appendChild(newCard.firstChild);
  });

}
printFromLocal();

 /////////////////////////////////////////////////////////////////////////


//printFromLocal();
//print the content of list array that contain all element



//filter list of objects to be contain only men objects
/*const MenfilterList= listStored.filter(function(el){
return el.id == "men";

});

//print list of objects (MenfilterList) that contain only men products
//printCard(MenfilterList);


//filter list of objects to be contain only Women objects
const WomenfilterList= listStored.filter(function(el){
  return el.id == "women";
  
  
  });
  


//print list of objects (WomenfilterList) that contain only Women products
//printCard(WomenfilterList);


//filter list of objects to be contain only Kids objects
const KidsfilterList= listStored.filter(function(el){
  return el.id == "Kids";
  
  });


//print list of objects (KidsfilterList) that contain only Kids products
//printCard(KidsfilterList);



//sort list of objects ascending according to price value
const ascendingOrderList = listStored.sort(function(a,b){
  return a.price - b.price;
});*/

//print list of objects (list) in ascending order according to price
//printCard(ascendingOrderList);



function asc()
{

    const BtnASC = document.querySelector(".ascendingbtn");
    document.getElementById("product").innerHTML="";
    BtnASC.addEventListener("click",printCard(listStored.sort(function(a,b){
      return a.price - b.price;
    })));

}

function allProduct()
{
  
  
    const BtnA= document.querySelector(".btna");
    document.getElementById("product").innerHTML="";
    BtnA.addEventListener("click",printCard(listStored));
    
     
}

function men()
{
  
   const BtnM = document.querySelector(".btnm");
   document.getElementById("product").innerHTML="";
   BtnM.addEventListener("click",printCard(listStored.filter(function(el){
    return el.type== "men";
    
    })));
    
    
}

function women()
{
  
  const BtnW = document.querySelector(".btnw");
  document.getElementById("product").innerHTML="";
  BtnW.addEventListener("click",printCard(listStored.filter(function(el){
    return el.type == "women";
    
    
    })));
    
    
}

function kids()
{
  const BtnK = document.querySelector(".btnk");
  document.getElementById("product").innerHTML="";
  BtnK.addEventListener("click",printCard(listStored.filter(function(el){
    return el.type == "Kids";
    
    })));
  
 
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
    if(CardElement[product.id]== undefined){
    CardElement={
     ...CardElement,
      [product.id]:product
    
    }
    
  }
  CardElement[product.id].numCard+=1;
  
  }
  else{
    
    product.numCard=1;
  CardElement = {
     [product.id]:product
  }
    
  
}
  localStorage.setItem("CardInCart", JSON.stringify (CardElement));
}

  

/*function moveToCart()
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
  }*/



CartProductNum();
//moveToCart();
/*const iconShopping = document.querySelector('.cartIcon');
const cartBox = document.querySelector('.products');
iconShopping.addEventListener("click",function(){
  cartBox.classList.add('active');
});
	// adding data to shopping cart 
	const iconShoppingP = document.querySelector('.products');
	let no = 0;
	JSON.parse(localStorage.getItem('CardInCart')).map(data=>{
		no = no+data.no
;	});
	iconShoppingP.innerHTML = no;


	//adding cartbox data in table
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>item Price</th><th></th></tr>';
	if(JSON.parse(localStorage.getItem('CardInCart'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{
		JSON.parse(localStorage.getItem('CardInCart')).map(data=>{
			tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
		});
	}
	cardBoxTable.innerHTML = tableData;*/






//when click checkOut btn
/*const ChBtn = document.querySelector(".checkOutBtn");
ChBtn.addEventListener("click",Boxinformation);

function Boxinformation()
{
      const Box=
      `<h2 >First Name</h2>
      <input type="text">
      <h2>Last Name</h2>
      <input type="text" >
      <h2>Phone Number</h2>
      <input type="text" >
      <h2>City</h2>
      <input type="text" >
      <h2>Street Address</h2>
      <input type="text">
      <h2>Visa Number</h2>
      <input type="text" >
      <h2>Visa Password</h2>
      <input type="password" >
      
      <button type="submit" class="save">Save</button>
 `
 const newBox = document.createElement('div');
newBox.innerHTML = Box;
document.getElementById("BoxInfo").appendChild(newBox);
}

let saveBtn = document.querySelector('.save');
let inputs = document.querySelectorAll('input');

saveBtn.addEventListener('click', function(){
  inputs.forEach(input => input.value="");
})*/


////////////////////SELLER/////////////////////////////////////////


//////////////////////////////////
function SellerprintCard(array){
  array.forEach(list=>{
    const card = `<div class="card" style="float:left; width:15%; height:300px;margin-top:20px;margin-left:10px; background-color:rgb(252, 248, 248);">

    <div class="card-body" stylr" background-color:rgb(62, 28, 248);">
        <img class="card-img-top" style="width:70%; height:100px;" src=${list.image} alt="image">
        <h4 class="card-text" style="width:100%; height:10px;  ">${list.price}</h4>
        <h4 class="card-text" style="width:100%; height:10px;  ">${list.name}</h4>
        <button  type="submit"  class="edit" >Edit</button>
        <button  type="submit"  class="delete"   >Delete</button>
     </div>
 </div>`

const newCard = document.createElement('div');
newCard.innerHTML = card;
document.getElementById("showproduct").appendChild(newCard.firstChild);
  });
}




function SHallProduct()
{
  
  
    const SHBtnA= document.querySelector(".SHbtna");
    document.getElementById("showproduct").innerHTML="";
    SHBtnA.addEventListener("click",SellerprintCard(listStored));
    
     
}

function SHmen()
{
  
   const SHBtnM = document.querySelector(".SHbtnm");
   document.getElementById("showproduct").innerHTML="";
   SHBtnM.addEventListener("click",SellerprintCard(listStored.filter(function(el){
    return el.type == "men" })));
    
    
}


function SHwomen()
{
  
  const SHBtnW = document.querySelector(".SHbtnw");
  document.getElementById("showproduct").innerHTML="";
  SHBtnW.addEventListener("click",SellerprintCard(listStored.filter(function(el){
    return el.type == "women" })));
    
    
}

function SHkids()
{
  const SHBtnK = document.querySelector(".SHbtnk");
  document.getElementById("showproduct").innerHTML="";
  SHBtnK.addEventListener("click",SellerprintCard(listStored.filter(function(el){
    return el.type == "Kids";
    
    })));
  
 
}

 function Nothing()
 {
   document.getElementById("showproduct").innerHTML="";
 } 

//////////////////////

//add product/////////////////////////////////////////////////////////////////////////

/*function pushToList(){
  var existingEntries = JSON.parse(localStorage.getItem("list"));
 
  existingEntries.push({
    id:document.getElementById("Addid").value,
      image:document.getElementById("Addsrc").value,
      name:document.getElementById("Addname").value,
      price:document.getElementById("Addprice").value,
      numCard:0
  });
  localStorage.setItem("list", JSON.stringify(existingEntries));
  

  };
  const ADDBTN = document.querySelector(".AddProduct");
ADDBTN.addEventListener("click",pushToList);*/






