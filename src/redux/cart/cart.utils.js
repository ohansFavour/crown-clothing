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

export const removeQuantity=(cartItems, itemToRemove)=>{
    const itemInCart = cartItems.find(
        item => item.id === itemToRemove.id
        );
    if(itemInCart.quantity == 1){
      return cartItems.filter(item=> item.id !== itemInCart.id);
    }
    return cartItems.map(item=>
        item.id===itemInCart.id ? ({...item, quantity: item.quantity-1}): item
        )
}