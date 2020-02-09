import React from "react";

import {
  Container,
  Brand,
  Preview,
  Name,
  OldPrice,
  Price,
  Buy
} from "./styles";
import { IProduct } from "../../pages/Home/types";
import { FiShoppingBag } from "react-icons/fi";

const Card = (props: IProduct) => {
  const { brand, img_url, friendly_name, price, discount } = props;
  return (
    <Container>
      <Brand>{brand}</Brand>
      <Preview src={`https:${img_url}`} alt={`Product ${friendly_name}`} />
      <Name>{friendly_name}</Name>
      <OldPrice>{`R$ ${price.toFixed(2).replace(".", ",")}`}</OldPrice>
      <Price>{`R$ ${(price * (1 - discount))
        .toFixed(2)
        .replace(".", ",")}`}</Price>
      <Buy>
        Comprar <FiShoppingBag size={15} />
      </Buy>
    </Container>
  );
};

export { Card };
