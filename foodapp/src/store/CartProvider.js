import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemHandler = (item) => {};

    const removeHandler = (id) => {};
    const cartContext = {
        items:[],
        totalAmount : 0,
        addItem : addItemHandler,
        removeItem: removeHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;