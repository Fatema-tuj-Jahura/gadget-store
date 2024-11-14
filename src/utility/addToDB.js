const getStoredAddList = () =>{
    const storedListStr = localStorage.getItem('Add-Cart');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
} 

const addCart = (id) =>{
   const storedList = getStoredAddList();
   if(storedList.includes(id)){
     console.log("already added");
     
   }
   else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('Add-Cart', storedListStr);
   }
}

export {addCart, getStoredAddList};