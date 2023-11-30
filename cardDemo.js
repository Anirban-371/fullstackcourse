
let arr= [];
for(let i =0;i<5;i++){
    let product={
        'productId': i,
        'productName': 'p'+1,
        'productCost': i*10
    }
    arr.push(product);
}
//function to get product arr from database
console.log(arr);
let card="";
for(let i=0; i<arr.length; i++){
    card+="<div class='card' style='width: 18rem;'><img class='card-img-top' src='...' alt='Card image cap'> <div class='card-body'>   <h5 class='card-title'>"+arr[i].productName+"</h5> <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div>";
}

//append this card html to the specific div on html using appendchild

let cartArr =[]
function fun(event){
    event.target.productId //(custom attribute )
   // <button productid="0" onclick="fun(event)">

   //productID =  1 

   for(let i=0; i<arr.length; i++){
        let selectedProduct ={};
        if(arr[i].productId ==event.target.productId){
            selectedProduct = arr[i];
            cartArr.push(selectedProduct);
        }
    }

    localStorage.setItem("cartArr",cartArr);

    //Inside the cart page
    localStorage.getItem(cartArr);
}