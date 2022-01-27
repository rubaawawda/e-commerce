

//when click checkOut btn
const CheckBtn = document.querySelector(".checkOutBtn");
CheckBtn.addEventListener("click",Boxinformation);

function Boxinformation()
{
  

  let Fheader = document.createElement('h2');
  let Fname = document.createTextNode("First Name");
  Fheader.appendChild(Fname);
  document.getElementById("BoxInfo").appendChild(Fheader);

  let INfname=document.createElement("input");
  INfname.setAttribute("type","text");
  document.getElementById("BoxInfo").appendChild(INfname);




  let Sheader = document.createElement('h2');
  let Lname = document.createTextNode("Last Name");
  Sheader.appendChild(Lname);
  document.getElementById("BoxInfo").appendChild(Sheader);

  let INLname=document.createElement("input");
  INLname.setAttribute("type","text");
  document.getElementById("BoxInfo").appendChild(INLname);



  let Theader = document.createElement('h2');
  let phone = document.createTextNode("Phone Number");
  Theader.appendChild(phone);
  document.getElementById("BoxInfo").appendChild(Theader);

  let INphone=document.createElement("input");
  INphone.setAttribute("type","text");
  document.getElementById("BoxInfo").appendChild(INphone);


  let FOheader = document.createElement('h2');
  let city = document.createTextNode("City");
  FOheader.appendChild(city);
  document.getElementById("BoxInfo").appendChild(FOheader);

  let INcity=document.createElement("input");
  INcity.setAttribute("type","text");
  document.getElementById("BoxInfo").appendChild(INcity);



  let FIheader = document.createElement('h2');
  let street = document.createTextNode("Street Address");
  FIheader.appendChild(street);
  document.getElementById("BoxInfo").appendChild(FIheader);

  let INstreet=document.createElement("input");
  INstreet.setAttribute("type","text");
  document.getElementById("BoxInfo").appendChild(INstreet);


  let SIheader = document.createElement('h2');
  let visa = document.createTextNode("Visa Number");
  SIheader.appendChild(visa);
  document.getElementById("BoxInfo").appendChild(SIheader);

  let INvisa=document.createElement("input");
  INvisa.setAttribute("type","text");
  document.getElementById("BoxInfo").appendChild(INvisa);



  /*let header = document.createElement('h2');
  let name = document.createTextNode("Visa ");
  header.appendChild(name);
  document.getElementById("BoxInfo").appendChild(header);

  let INname=document.createElement("input");
  INname.setAttribute("type","text");
  document.getElementById("BoxInfo").appendChild(INname);*/



  let btn = document.createElement("button");
  btn.innerHTML = "Save";
  btn.className = "save";
  btn.onclick=WhenClickSave();
  document.getElementById("BoxInfo").appendChild(btn);
    /*  const Box=
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
      
      <button type="submit" class="save" onclick="WhenClickSave()">Save</button>
 `
 const newBox = document.createElement('div');
newBox.innerHTML = Box;
document.getElementById("BoxInfo").appendChild(newBox);*/
}

//let saveBtn = document.querySelector('.save');
let inputs = document.querySelectorAll('input');


function WhenClickSave()
{
  inputs.forEach(input => input.value="")
  let product = document.querySelector(".cartdiv");
  product.innerHTML="";
  localStorage.removeItem("CardInCart");
  localStorage.removeItem("CardNumber");
}

/////////////////////////////////////////////////////////////////////
let cartItem=localStorage.getItem("CardInCart");
  cartItem = JSON.parse(cartItem);
  
function AppearCardInCart()
  {
    let cartCost = localStorage.getItem('totalCost');
    let product = document.querySelector(".cartdiv");
    let v =localStorage.getItem("totalCost");
  v =JSON.parse(v);
  ///////////////////////////////////////////////////
  let cart = JSON.parse(localStorage.getItem('new'));
  ///////////////////////////////////////////////////
 /* <h4 class="card-text" style="width:100%; height:20px;  ">Quantity: ${item.numCard}</h4>
        <h4 class="card-text" style="width:100%; height:20px;  ">total: ${item.numCard*item.price}</h4>*/
  if(cartItem&&product){
   // Object.values(cartItem)
  product.innerHTML='';
  
 cart. forEach(item=>{
    product.innerHTML+=`<div class="newCard" style="float:left; width:15%; height:200px;margin-top:90px;margin-left:10px;">
    
    <div class="card-body">
        <img class="card-img-top" style="width:70%; height:100px;" src=${item.image} alt="image">
        <h4 class="card-text" style="width:100%; height:20px;  ">Price: ${item.price}</h4>
        
        <button  type="submit"  class="remove" onclick="deletfromcart(${item.id})" >remove</button>
       
     </div>
  </div>`
  });
 /*  product.innerHTML +=`<div class="cardcost" style="float:left; width:15%; height:200px;margin-top:90px;margin-right:100%;">
    <h4>TotalOfAllProduct</h4>
    <h4>${cartCost}</h4>
  
  </div>`*/
  }
  
  }
  AppearCardInCart();
 /* Object.values(cartItem). forEach(item=>{
  const BtnRemove = document.querySelector(".remove");
BtnRemove.addEventListener("click",printFromLocal(item.id));
  })*/

 /*function setup() {
      var els = document.getElementsByClassName("remove");
      for (var i = 0; i < els.length; i++) {
          els[i].addEventListener('click', function (e) {
              e.preventDefault();
              e.target.closest('div.newCard').remove();
          });
      }
  }
 setup();*/
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  let listStored =JSON.parse(localStorage.getItem("list"));
  let removebutton = document.querySelectorAll('.remove')

for(let i=0; i<removebutton.length;i++){
  removebutton[i].addEventListener('click',()=>{
   // UpdatenumberofCards(listStored[i]);
   let NumProducts = localStorage.getItem('CardNumber');
   NumProducts = parseInt(NumProducts);
   localStorage.setItem('CardNumber',NumProducts - 1);
    UpdateTcost(listStored[i])
   // UPSetElementToCard(listStored);
    //play(); 
})
}


  //to calculate number of cards
function UpdatenumberofCards(product){
  
      let NumProducts = localStorage.getItem('CardNumber');
     
      NumProducts = parseInt(NumProducts);
      if(NumProducts!=0){
         localStorage.setItem('CardNumber',NumProducts - 1);
        document.querySelector('.cartIcon span').textContent = NumProducts-1;
      }
    
      else{
        localStorage.setItem('CardNumber',0);
        document.querySelector('.cartIcon span').textContent = 0;
      }
    
      UPSetElementToCard(product);
    
    }
    
    
    
    
    //to change number in cart
    function CartProductNum(){
      let NumOfProducts = localStorage.getItem('CardNumber');
      if(NumOfProducts){
        document.querySelector('.cartIcon span').textContent = NumOfProducts ;
      }
    }
    
    //to calculate total Price of products in cart
    function UpdateTcost(product)
    {
     
      let cartCost = localStorage.getItem('totalCost');
      
      if(cartCost==null){
        
        localStorage.setItem("totalCost",product.price);
        
      }
        else{
          cartCost=parseInt(cartCost);
          localStorage.setItem("totalCost", (cartCost - product.price));
         
      }
      
    }
  ///////////////////////////////////////////////////////////////////////////////
  
    ////////////////////////////////////////////////////////////////////////
    function UPSetElementToCard(product){
      let CardElement = localStorage.getItem('CardInCart')
      CardElement = JSON.parse(CardElement);
     // var CardInCart = {};

     if(CardElement ==null){
      // if(CardElement[product.id]== undefined){
       product.numCard=1;
       CardElement={
          [product.id]:product
       }
       
      }
     else{
   
     CardElement = {
       ...CardElement,
        [product.id]:product
     }

     product.numCard+=1;
     console.log(CardElement.id);
     }
      if (CardElement.id !== undefined)
      {
            delete CardElement.id;
      }
      

    localStorage.setItem("CardInCart", JSON.stringify (CardElement));
   // console.log(JSON.stringify (CardElement));
    
}
    

  /*function Delete(product) {
      return JSON.parse(localStorage.getItem('CardInCart')).filter(e => e.id ===product. id);
  }
  
 //console.log(getUserById(2)) ;
 Delete(listStored);*/
 ////////////////////////////////////////////////////////////////////
 //let listStored =JSON.parse(localStorage.getItem("list"));
 
 
 

 
 /*function printFromLocal()
 {

  let container = document.querySelector(".cartdiv");
  container.innerHTML=' ';
  console.log("yes");
  let listStor =JSON.parse(localStorage.getItem("new"));
   listStor=listStor.filter(list=>list.id !== list.tar);
   

   listStor.forEach(list=>{
    console.log("no");
     let card = document.createElement("div");
   card.classList.add('card');
 
   let img = document.createElement('img');
    img.src = list.image;
    img.classList.add('imageJS');
   card.appendChild(img);
   
   let header = document.createElement('h3');
   let Price = document.createTextNode(list.price );
   header.classList.add('PriceJS');
   header.appendChild(Price);
   card.appendChild(header);
 
   let btn = document.createElement("button");
 btn.innerHTML = "removed";
 btn.className = "removed";
 //btn.onclick=appendChild(i.id);
 card.appendChild(btn);
 
  
   
   container.appendChild(card);
 });
 
 }*/

function deletfromcart(id)
{
  let cart = JSON.parse(localStorage.getItem('new'));
  let newcart =cart.filter(item=>item.id!== id)
  localStorage.setItem('new',JSON.stringify(newcart))
  AppearCardInCart();
}