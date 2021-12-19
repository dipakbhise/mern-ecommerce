import * as actionNames from "./shopping-actiontNames"

export const addToCart = (itemID)=>{
    return{
        type: actionNames.ADD_TO_CART,
        payload:{
            id:itemID
        }
    }
}

export const removeFromCart = (itemID)=>{
    return{
        type: actionNames.REMOVE_FROM_CART,
        payload:{
            id:itemID
        }
    }
}

export const adjustQty = (itemID, value)=>{
    return{
        type: actionNames.ADJUST_QTY,
        payload:{
            id:itemID,
            qty:value
        }
    }
}

export const loadCurrentItem = (item)=>{
    return{
        type: actionNames.LOAD_CURRENT_ITEM,
        payload:item
    }
}