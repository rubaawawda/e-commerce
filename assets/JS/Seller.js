////////////////////SELLER/////////////////////////////////////////
let listStored =JSON.parse(localStorage.getItem("list"));

//////////////////////////////////
function SellerprintCard(array){
  
    array.forEach(list=>{
      const card= `<div class="card" style="float:left; width:15%; height:300px;margin-top:20px;margin-left:10px; background-color:rgb(252, 248, 248);">
  
      <div class="card-body" stylr" background-color:rgb(62, 28, 248);">
      <img class="card-img-top" style="width:70%; height:100px;" src=${list.image} alt="image">
          <h4 class="card-price" style="width:100%; height:10px;  ">${list.price}</h4>
          <h4 class="card-name" style="width:100%; height:10px;  ">${list.name}</h4>
          <button  type="submit"  class="edit" onclick="Edit(${list.id})" >Edit</button>
          <button  type="submit"  class="delete" onclick="deletFromProductList(${list.id})"  >Delete</button>
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
  
  function pushToList(){
    var existingEntries = JSON.parse(localStorage.getItem("list"));
   
    existingEntries.push({
      type:document.getElementById("Addtype").value,
      id:document.getElementById("Addid").value,
        image:document.getElementById("Addsrc").value,
        name:document.getElementById("Addname").value,
        price:document.getElementById("Addprice").value,
        numCard:0
    });
    localStorage.setItem("list", JSON.stringify(existingEntries));

    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value="");
    };
    const ADDBTN = document.querySelector(".AddProduct");
  ADDBTN.addEventListener("click",pushToList);

////////////////////////////Delete Element///////////////////////////////////////////
function deletFromProductList(id)
{
  let list = JSON.parse(localStorage.getItem('list'));
  let newlist =list.filter(item=>item.id!== id)
  localStorage.setItem('list',JSON.stringify(newlist))
  document.getElementById("showproduct").innerHTML="";
  SellerprintCard(newlist);
}

//////////////////////////Edit////////////////////////////////////////////////////////
/*function editProductInfo(){
  const editBox=
      `<h2 >Product type</h2>
      <input type="text" id="Ptype">
      <h2>Product Id</h2>
      <input type="text" id="Pid"  >
      <h2>Product src Image</h2>
      <input type="url" id="Pimg">
      <h2>Product Price</h2>
      <input type="text" id="Pprice">
  
      <button type="submit" class="saveEdit" >SaveEdit</button>
 `
 const newBox = document.createElement('div');
newBox.innerHTML = editBox;
document.getElementById("editBox").appendChild(newBox);
}*/

/*listStored.forEach(list=>{
  let Ebutton = document.querySelectorAll('.edit');
  Ebutton.addEventListener('click',Edit(list))
   /* document.getElementById('Ptype').setAttribute('value',list.type);
    document.getElementById('Pid').setAttribute('value',list.id);
    document.getElementById('Pimg').setAttribute('value',list.image);
    document.getElementById('Pprice').setAttribute('value',list.price);
    console.log(list.type);
  })*/
//let n=document.getElementsByClassName("card-price").value
function Edit(id){
 
 //listStored.forEach(list=>{
  document.getElementById('Ptype').setAttribute('value',listStored[id].type);
  document.getElementById('Pid').setAttribute('value',id);
  document.getElementById('Pimg').setAttribute('value',listStored[id].image);
  document.getElementById('Pprice').setAttribute('value',listStored[id].price);
  

// })

}
function saveEdit()
{ 
let EditList=JSON.parse(localStorage.getItem("list"));
let id=document.getElementById('Pid').value;
EditList[id].type = document.getElementById('Ptype').value;
EditList[id].image = document.getElementById('Pimg').value;
EditList[id].price = document.getElementById('Pprice').value;
console.log(EditList[id].price);
localStorage.setItem('list',JSON.stringify(EditList))
}

/*console.log(listStored[0].type);
let ADDbutton = document.querySelectorAll('.edit')
for(let i=0; i<ADDbutton.length;i++){
  ADDbutton[i].addEventListener('click',()=>{
    document.getElementById('Ptype').setAttribute('value',listStored[i].type);
  document.getElementById('Pid').setAttribute('value',listStored[i].id);
  document.getElementById('Pimg').setAttribute('value',listStored[i].image);
  document.getElementById('Pprice').setAttribute('value',listStored[i].price);
  console.log(listStored[i].type);

  })
}*/

/*function saveEdit(id){
listStored=listStored.filter(id === a.id);
id.setAttribute('value', document.getElementById("Pid").value);

}
let n=document.getElementById("Pid").value;
console.log(n);*/