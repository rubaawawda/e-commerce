  //list of all product in this Ecommerce website
  var list = [
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/64/P00608983.jpg' , price:400},
    {id:'men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-00yKnsjQNyQezlJCTjx2fdL8qNGnqauriQ&usqp=CAU', price:120 },
    {id:'Kids', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/A79234s.jpg', price:85},
    {id:'men', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHD8Fadev2VFPxoQgCnymcud0OXuI_TGCVjQ&usqp=CAU' , price:170},
    {id:'women', image: 'https://litb-cgis.rightinthebox.com/images/640x853/201811/mqzw1541666505306.jpg?fmt=webp&v=1' , price:300},
    {id:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202107/bps/product/inc/vrgqcu1626145495474.jpg?fmt=webp&v=1', price:95 },
    {id:'Kids', image: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/530344s2.jpg' , price: 140 },
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/75/P00572979.jpg', price:100 },
    {id:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202006/jjlpxs1592220968880.jpg?fmt=webp&v=1', price:250 },
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2d/P00593536.jpg' , price:220},
    {id:'Kids', image: 'https://cdn.shopify.com/s/files/1/0074/6402/6227/t/8/assets/girloutfits-1585254146587.jpg' , price:40 },
    {id:'women', image: 'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/91/P00489427.jpg' , price:50},
    {id:'Kids', image: 'https://n.nordstrommedia.com/id/sr3/9dfbf6ec-293b-4ee7-ad6f-4f20d16e4511.jpeg?h=365&w=240&dpr=2' , price:75},
    {id:'women', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC1_0JhUhEveqD7hUfmeojQ5LoL6y88jEnQ&usqp=CAU' , price:210 },
    {id:'Kids', image: 'https://sc02.alicdn.com/kf/Hdc0419fa5eb34791b4f5e23692743344O/223189865/Hdc0419fa5eb34791b4f5e23692743344O.jpg' , price:160 },
    {id:'men', image: 'https://litb-cgis.rightinthebox.com/images/640x853/201909/xonpta1568974170777.jpg?fmt=webp&v=1' , price:150 },
    {id:'Kids', image: 'https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G25/shotview-315x472/4709/491-213s.jpg' , price:80 },
    {id:'women', image: 'https://litb-cgis.rightinthebox.com/images/640x853/202112/bps/product/inc/klyidb1639989879988.jpg', price:180 },
    { id:'men',image: 'https://contents.mediadecathlon.com/p2010290/k$3291ed52a6496aa3a55ef2aa30791924/sq/250x250/Mens-NH500-Regular-off-road-hiking-trousers.jpg' , price:120},
    {id:'Kids', image: 'https://4.imimg.com/data4/SL/TD/MY-14695632/meenakshi-kids-wear-500x500.jpg' , price:60 }
    
    
];

//This function print any list of objects as a card
function printCard(array){
  array.forEach(list=>{
    const card = `<div class="card" style="float:left; width:15%; height:200px;margin-top:10px;margin-left:10px;">

    <div class="card-body">
        <img class="card-img-top" style="width:70%; height:100px;" src=${list.image} alt="image">
        <h4 class="card-text" style="width:100%; height:20px;  ">${list.price}</h4>
        <button  type="submit"  class="Addbtn">Add to Cart</button>
     </div>
 </div>`

const newCard = document.createElement('div');
newCard.innerHTML = card;
document.body.appendChild(newCard.firstChild);
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
printCard(MenfilterList);


//filter list of objects to be contain only Women objects
const WomenfilterList= list.filter(function(el){
  return el.id == "women";
  
  });


//print list of objects (WomenfilterList) that contain only Women products
printCard(WomenfilterList);


//filter list of objects to be contain only Kids objects
const KidsfilterList= list.filter(function(el){
  return el.id == "Kids";
  
  });


//print list of objects (KidsfilterList) that contain only Kids products
printCard(KidsfilterList);



//sort list of objects ascending according to price value
const ascendingOrderList = list.sort(function(a,b){
  return a.price - b.price;
});

//print list of objects (list) in ascending order according to price
printCard(ascendingOrderList);

$('.menu').on('click',printCard(list));