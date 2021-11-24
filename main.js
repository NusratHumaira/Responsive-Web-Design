let carts = document.querySelectorAll('.buy-btn');
let products =[
    {
        name : 'T-shirt',
        tag : 'T-shirt',
        price : 15,
        inCart :0
    },
    {
        name : 'Leather Backpack',
        tag : 'LeatherBackpack',
        price : 20,
        inCart :0
    },
    {
        name : 'sports boots',
        tag : 'sportsboots',
        price : 15,
        inCart :0
    },
    {
        name : 'Cap',
        tag : 'cap',
        price : 20,
        inCart :0
    },
    {
        name : 'Sports shoes',
        tag : 'sportsshoes',
        price : 15,
        inCart :0
    },
    {
        name : 'Sneakers',
        tag : 'sneakers',
        price : 15,
        inCart :0
    },
    {
        name : 'Side Bag',
        tag : 'sidebag',
        price : 15,
        inCart :0
    },
    {
        name : 'Regular Shoes',
        tag : 'regularshoes',
        price : 15,
        inCart :0
    }
];
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers =localStorage.getItem('cartNumbers');
    if(productNumbers){
        
        document.querySelector('.cart span').textContent =productNumbers;
    }

}
function cartNumbers(product)
{
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent =productNumbers +  1;
    }
    else
    {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
//code for adding total value
/*function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null)
    {
         if(cartItems[product.tag] == undefined){
             cartItems ={
                 ...cartItems,
                 [product.tag] :product
             }
         }
        cartItems[product.tag].inCart +=1;
    }
     else{ 
        product.inCart = 1;
         cartItems ={
            [product.tag] :product
        }
     }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}*/
/*function totalCost(product){
    
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null)
    {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+product.price);
    }
    else{
    localStorage.setItem("totalCost",product.price);
    }
}*/
//display on cart
//function displayCart()
//{
  //  let cartItems = localStorage.getItem("productsInCart");
   // cartItems = JSON.parse(cartItems);
   // let cartContainer = document.querySelector("#cart-container");

   // if(cartItems && cartContainer){
     //   cartContainer.innerHTML='';
       // object.values(cartItems).map(
          //  items=>{
           //     cartContainer+=
             //   <div class ="">

//                </div>

//            }
//        )
//    }
//}
onLoadCartNumbers();
//displayCart();