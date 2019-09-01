 export const addToCart = (currentCart, itemToAdd)=>{
 const doesItemExist = currentCart.find(
     item => item.id === itemToAdd.id
     );
 
 if(doesItemExist){
        return currentCart.map(item=>
        item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item
     )
}
return [...currentCart, {...itemToAdd, quantity:1 }]
};