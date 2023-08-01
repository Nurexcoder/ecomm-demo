const initialState = {
    products: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET':
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case 'UPDATE':
            return {
                ...state,
                products: state.products.filter(task => task.id !== action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;