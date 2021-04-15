
export const cartReducer = (state: GlobalState, action: any) => {
    switch (action.type) {

        case 'SET_PRODUCTS':
            return {
                ...state,
                cart: [...state.cart, action.item], // add item to the cart.
                cartCount: state.cartCount + 1
            };

        case 'FILTER_PRODUCTS':
            return {
                ...state,
                cart: state.cart.filter((item, index) => index !== action.index),// filter cart by id passed into the reducer.
                cartCount: state.cartCount - 1,

            };


        default:
            return state;
    }
};