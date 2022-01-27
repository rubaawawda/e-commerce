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
    {type:'kids', image: 'https://4.imimg.com/data4/SL/TD/MY-14695632/meenakshi-kids-wear-500x500.jpg' , price:60 , numCard:0, id:19}

];

//storing list of object in local storage
if ("list" in localStorage) {

} else {
    let listStorage=JSON.stringify(list);
    localStorage.setItem('list',listStorage);
  }
  ///////////////////////////////////////////////////////////////
 
//////////////////////////////////////////////////////////////////
/*function printCard(array){
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
  }*/

  //////////////////////////////////////////////////////////////
  let listStored =JSON.parse(localStorage.getItem("list"));
function printFromLocal(array)
{
  
  //let listStored =JSON.parse(localStorage.getItem("list"));
  array.forEach(list=>{
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
btn.innerHTML = "Add to Cart";
btn.className = "Addbtn";
card.appendChild(btn);


  let container = document.querySelector("#product");
  container.appendChild(card);
  });

}

printFromLocal(listStored);
///////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
/*listStored.forEach(res => {
  let card = document.createElement("div");
  card.classList.add('card');

  let img = document.createElement('img');
   img.src = res.image;
   img.classList.add('imageJS');
  card.appendChild(img);
  
  let header = document.createElement('h3');
  let Price = document.createTextNode(res.price );
  header.classList.add('PriceJS');
  header.appendChild(Price);
  card.appendChild(header);

  let btn = document.createElement("button");
btn.innerHTML = "Add to Cart";
btn.className = "Addbtn";
card.appendChild(btn);


  let container = document.querySelector("#product");
  container.appendChild(card);
});*/
///////////////////////////////////////////////////////
function asc()
{

    const BtnASC = document.querySelector(".ascendingbtn");
    document.getElementById("product").innerHTML="";
    BtnASC.addEventListener("click",printFromLocal(listStored.sort(function(a,b){
      return a.price - b.price;
    })));

}

function des()
{

    const BtnASC = document.querySelector(".desendingbtn");
    document.getElementById("product").innerHTML="";
    BtnASC.addEventListener("click",printFromLocal(listStored.sort(function(a,b){
      return b.price - a.price;
    })));

}

function allProduct()
{
  
  
    const BtnA= document.querySelector(".btna");
    document.getElementById("product").innerHTML="";
    BtnA.addEventListener("click",printFromLocal(listStored));
    
     
}

  
 
function men()
{
  
   const BtnM = document.querySelector(".btnm");
   document.getElementById("product").innerHTML="";
   BtnM.addEventListener("click",printFromLocal(listStored.filter(function(el){
    return el.type == "men";
    
    
    })));
    
    
}

function women()
{
  
  const BtnW = document.querySelector(".btnw");
  document.getElementById("product").innerHTML="";
  BtnW.addEventListener("click",printFromLocal(listStored.filter(function(el){
    return el.type == "women";
    
    
    })));
    
    
}

function kids()
{
  const BtnK = document.querySelector(".btnk");
  document.getElementById("product").innerHTML="";
  BtnK.addEventListener("click",printFromLocal(listStored.filter(function(el){
    return el.type == "Kids";
    
    })));
  
 
}

/////////////////////////////////////////////////////////
let ADDbutton = document.querySelectorAll('.Addbtn')

for(let i=0; i<ADDbutton.length;i++){
  ADDbutton[i].addEventListener('click',()=>{
    numberofCards(listStored[i]);
    Tcost(listStored[i]);
    //play();
    
    
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
  
}//
var hj =[{ image:'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00608983.jpg' , price:16, id:90}];

let listStoragehj=JSON.stringify(hj);
localStorage.setItem('new',listStoragehj);

/*listStoragehj.push({
  

})*/





function SetElementToCard(product){
  
  


   CardElement = localStorage.getItem('CardInCart')
  CardElement = JSON.parse(CardElement);
  var existingEntries = JSON.parse(localStorage.getItem("new"));
 
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
     [product.id]: product
  }
  //console.log(CardElement.id);
  //CardElement[product.id].numCard+=1;
  product.numCard+=1;
  
  
   
    
    
    
}

if(existingEntries.some(e=>e.id === product.id))
{
  console.log("yes");
 //product. numCard+=1;
 
 
 //console.log("y");
}else
{console.log("no")
//product.numCard=1;
existingEntries.push({
    
 // type:product.type,
 id:product.id,
 image:product.image,
 price:product.price
 //numCard:product.numCard,

});
}


    

    
    
let cv = Object.entries(CardElement);
cv=JSON.stringify(cv);
localStorage.setItem('cv',cv);

 
  

localStorage.setItem("new", JSON.stringify(existingEntries));
  localStorage.setItem("CardInCart", JSON.stringify (CardElement));
  //console.log(JSON.stringify (CardElement));
  
}



  

  
//////////////////////////////////////////////

CartProductNum();
/////////////////////////////////////////////////////











/*let addToCartButtons = document.getElementsByClassName('Addbtn')
let cartContainer = document.getElementsByClassName('tbody')[0]


// picking up all the Add-To-Cart buttons
/*for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}*/
// This function helps to add items to our cart
//function addToCart(event){

    
   /* let itemContainer = document.createElement('div')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let itemImage = btnGrandParent.children[0].image
    //let itemName = btnParent.children[0].innerHTML
    let itemPrice = btnParent.children[1].innerText
  
    
    itemContainer.innerHTML = `
    <div class="card" style="float:left; width:15%; height:200px;margin-top:50px;margin-left:10px;">
  
      <div class="card-body">
          <img class="card-img-top" style="width:70%; height:100px;" src=${itemImage} alt="image">
          <h4 class="card-text" style="width:100%; height:20px;  ">${itemPrice}</h4>
          <button  type="submit"  class="Addbtn" >Add to Cart</button>
       </div>
   </div>
`

    cartContainer.append(itemContainer)
}*/


/*const cartBox = document.querySelector('.cartdiv');
	//adding cartbox data in table
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	//tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>item Price</th><th></th></tr>';
	if(JSON.parse(localStorage.getItem('CardInCart'))[0] === null){
	//	tableData += '<tr><td colspan="5">No items found</td></tr>'
  
	}else{
		JSON.parse(localStorage.getItem('CardInCart')).forEach(data=>{
     
			//tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>'+`<img class="card-img-top" style="width:70%; height:100px;" src=${data.src} alt="image">`;
			tableData += `<div class="card" style="float:left; width:15%; height:200px;margin-top:50px;margin-left:10px;">

			<div class="card-body">
			  <img class="card-img-top" style="width:70%; height:100px;" src=${data.image} alt="image">
			  <h4 class="card-text" style="width:100%; height:20px;  ">${data.price}</h4>
			  <h4 class="card-text" style="width:100%; height:20px;  ">${data.numCard}</h4>
			  <button  type="submit"  class="Addbtn" >Add to Cart</button>
			 </div>
		   </div>`
		});
	}
	cardBoxTable.innerHTML = tableData;*/
  /*function play()
  {
    let cartCost = localStorage.getItem('totalCost');
    
    let v =localStorage.getItem("totalCost");
  v =JSON.parse(v);
  let cartItem=localStorage.getItem("CardInCart");
  cartItem = JSON.parse(cartItem);
  let product = document.querySelector(".cartdiv");
  if(cartItem&&product){
  
  product.innerHTML='';
  Object.values(cartItem). forEach(item=>{
    product.innerHTML+=`<div class="card" style="float:left; width:15%; height:200px;margin-top:90px;margin-left:10px;">
    
    <div class="card-body">
        <img class="card-img-top" style="width:70%; height:100px;" src=${item.image} alt="image">
        <h4 class="card-text" style="width:100%; height:20px;  ">Price: ${item.price}</h4>
        <h4 class="card-text" style="width:100%; height:20px;  ">Quantity: ${item.numCard}</h4>
        <h4 class="card-text" style="width:100%; height:20px;  ">total: ${item.numCard*item.price}</h4>
        <button  type="submit"  class="removebtn" >remove</button>
       
     </div>
  </div>`
  });
   product.innerHTML +=`<div class="cardcost" style="float:left; width:15%; height:200px;margin-top:90px;margin-right:100%;">
    <h4>TotalOfAllProduct</h4>
    <h4>${cartCost}</h4>
  
  </div>`
  }
  
  }
  play();/*
  ////////////////////////////////////////////////////////////////////////////////////

 /* let Removebutton = document.querySelectorAll('.removebtn');
  Removecard.forEach(btn=>{
    btn.addEventListener("click")
  })*/
  //Removebutton.addEventListener("click",);

  let cartItem=localStorage.getItem("CardInCart");
 // cartItem = JSON.parse(cartItem);
 
  /*function Removecard(id){
    let product = document.querySelector(".cartdiv");
  if(cartItem&&product){
  
  product.innerHTML='';
    cartItem = cartItem.filter(e => e.id != id);
  
   Object.values(cartItem).forEach( e => {
    product.innerHTML+=`<div class="card" style="float:left; width:15%; height:200px;margin-top:90px;margin-left:10px;">
    
    <div class="card-body">
        <img class="card-img-top" style="width:70%; height:100px;" src=${e.image} alt="image">
        <h4 class="card-text" style="width:100%; height:20px;  ">Price: ${e.price}</h4>
        <h4 class="card-text" style="width:100%; height:20px;  ">Quantity: ${e.numCard}</h4>
        <h4 class="card-text" style="width:100%; height:20px;  ">total: ${e.numCard*item.price}</h4>
        <button  type="submit"  class="removebtn" onclick="del(${e.id})" >remove</button>
       
     </div>
  </div>`

 })
  
  }
}*/






var removeCartItemButtons = document.getElementsByClassName('removebtn')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    function removeCartItem(event) {
      
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
    
     
  }

/*function remove(){
  cartItem= cartItem.filter(item=>item.id!== id);
  console.log("hg");
  

}*/
    //remove();
//////////////////////////////////////////////////////////////////////



  





  /*const card = `<div class="card" style="width:15%; height:200px;">
   
  <div class="card-body">
    <h4 class="card-title" style="width:100%; height:25px;margin-top: 0px;">${e.image}</h4>
    <img class="card-img-top" style="width:100%; height:110px; " src=${e.price} alt="Book">
    <h4 class="card-text" style="width:100%; height:25px; padding-bottom: 25px; ">${e.newCard}</h4>
  </div>
</div>`
 
  const newCard = document.createElement('div');
  newCard.innerHTML = card;
  document.body.appendChild(newCard.firstChild);*/