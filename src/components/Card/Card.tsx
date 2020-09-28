import React from 'react';

import {
  Container,
  Brand,
  Preview,
  Name,
  OldPrice,
  Price,
  Buy,
} from './styles';

import { FiShoppingBag } from 'react-icons/fi';
import { ICard } from './types';

const Card = (props: ICard) => {
  const { product, onClick } = props;
  const { brand, img_url, friendly_name, price, discount } = product;

  return (
    <Container>
      <Brand>{brand}</Brand>
      <Preview src={`https:${img_url}`} alt={`Product ${friendly_name}`} />
      <Name>{friendly_name}</Name>
      <OldPrice>{`R$ ${price.toFixed(2).replace('.', ',')}`}</OldPrice>
      <Price>{`R$ ${(price * (1 - discount))
        .toFixed(2)
        .replace('.', ',')}`}</Price>
      <Buy onClick={onClick}>
        Comprar <FiShoppingBag size={15} />
      </Buy>
    </Container>
  );
};

export { Card };
