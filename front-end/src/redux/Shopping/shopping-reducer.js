import * as actionNames from "./shopping-actiontNames"

const initialState = {

    products:[
        {
            id:1,
            title:"Mobile",
            desc:"Mobile Description",
            price:7500,
            image:"https://source.unsplash.com/1600x900/?mobile",
            availableStock:12
            
        },
        {
            id:2,
            title:"headphones",
            desc:"Headphones Description",
            price:7400,
            image:"https://source.unsplash.com/1600x900/?headphones",
            availableStock:0
        },
        {
            id:3,
            title:"Laptop",
            desc:"Laptop Description",
            price:7200,
            image:"https://source.unsplash.com/1600x900/?laptop",
            availableStock:10
        },
        {
            id:4,
            title:"Shoes",
            desc:"Shoes Description",
            price:700,
            image:"https://source.unsplash.com/1600x900/?shoes",
            availableStock:10
            
        }
    ],

    cart:[],
    currentItem:null
}

const shopReducer = (state = initialState, action)=>{

    switch (action.type) {


        // Add to cart Action Reducer
        case actionNames.ADD_TO_CART:

        const item = state.products.find((prod)=> prod.id === action.payload.id);

        const inCart = state.cart.find((item)=> item.id === action.payload.id ? true : false);

        return {
            ...state,

            cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty:item.qty+1} : item ) : [...state.cart, {...item, qty:1}]
        }


        // Remove From cart Action Reducer
        case actionNames.REMOVE_FROM_CART:

        return{
            ...state,

            cart: state.cart.filter(item => item.id !== action.payload.id)
        }

        // // Adjust Quantity Action Reducer

        case actionNames.ADJUST_QTY:

        return{
            ...state,

            cart:state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item )        }


             // // Load Current Item Action Reducer

        case actionNames.LOAD_CURRENT_ITEM:

            return{
                ...state,

                currentItem : action.payload
    
            }
            
    
        default: return state;
            
    }

}

export default shopReducer;