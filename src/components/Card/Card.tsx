import React, { memo } from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import * as S from './styles';
import { ICard } from './types';

const CardComponent = (props: ICard) => {
  const { product, onClick } = props;
  const { category, image1, name, price, discount } = product;

  return (
    <S.Container>
      <S.Brand>{category.name}</S.Brand>
      <S.Preview src={image1} alt={`Product ${name}`} onClick={onClick} />
      <S.Name>{name}</S.Name>
      {discount && discount > 0 ? (
        <>
          <S.Discount>{`- ${discount}%`}</S.Discount>
          <S.OldPrice>{`R$ ${price.toFixed(2).replace('.', ',')}`}</S.OldPrice>
          <S.Price>{`R$ ${(price * ((100 - discount) / 100))
            .toFixed(2)
            .replace('.', ',')}`}</S.Price>
        </>
      ) : (
        <S.Price>{`R$ ${price.toFixed(2).replace('.', ',')}`}</S.Price>
      )}
      <S.Buy onClick={onClick}>
        Comprar <FiShoppingBag size={15} />
      </S.Buy>
    </S.Container>
  );
};

const Card = memo(CardComponent);

export { Card };
