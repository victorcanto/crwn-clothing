import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  QuantityContainer,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <QuantityContainer className="quantity">
        <div onClick={removeItemHandler}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={addItemHandler}>&#10095;</div>
      </QuantityContainer>
      <Price className="price">{price}</Price>
      <RemoveButton className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
