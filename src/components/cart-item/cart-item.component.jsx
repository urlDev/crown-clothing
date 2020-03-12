import React from "react";

import { CartItemDiv, ItemDetails, Name } from "./cart-item.styles";

// import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemDiv>
    <img src={imageUrl} style={{ width: "30%" }} alt="item" />
    <ItemDetails>
      <Name>{name}</Name>
      <Name>
        {quantity} x ${price}
      </Name>
    </ItemDetails>
  </CartItemDiv>
);

export default CartItem;
