import classes from './HeaderCartButton.module.css';
import CartButton from '../Cart/CartButton';

const HeaderCartButton = props => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartButton />
            </span>
            <span >
                  Your Cart
            </span>
            <span className={classes.badge}>
                  2
            </span>
        </button>
    )
}

export default HeaderCartButton;