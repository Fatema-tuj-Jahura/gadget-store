const getStoredWishList = () =>{
    const storedListStr = localStorage.getItem('Wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
} 

const wishCart = (id) =>{
   const storedList = getStoredWishList();
   if(storedList.includes(id)){
     console.log("already added");
     
   }
   else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('Wish-list', storedListStr);
   }
}

export {wishCart, getStoredWishList};