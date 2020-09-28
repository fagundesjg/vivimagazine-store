import React, { Fragment, useEffect, useState } from 'react';

import { IDetails, IProductInfo } from './types';
import * as S from './styles';
import { Navbar } from '../../components';

const Details = (props: IDetails) => {
  const { id } = props;
  const [productInfo, setProductInfo] = useState<IProductInfo>();
  const [selectedPhoto, setSelectedPhoto] = useState<string>();

  useEffect(() => {
    async function fetchProductInfo() {
      setTimeout(() => {
        const newProductInfo: IProductInfo = {
          brand: 'HOMEM',
          description:
            'O frescor da combinação de ervas aromáticas com o gengibre e noz moscada, em equilíbrio com um toque de madeiras quentes, desperta e renova as energias nessa fragrância que te acompanha em todos os momentos do seu dia. Para homens verdadeiros e inteiros, livres de padrões e estereótipos.',
          discount: 0.1,
          id: '1',
          max_parcels: 3,
          name: 'Natura Homem',
          photos: [
            'https://static.natura.com/sites/default/files/styles/product_detail_square/public/products/53255_1_15.jpg?itok=9RfgmVwc',
            'https://static.natura.com/sites/default/files/styles/product_detail_square/public/products/53255_2.jpg?itok=Jc0E0eCQ',
            'https://static.natura.com/sites/default/files/styles/product_detail_square/public/products/53255_3.jpg?itok=F0eiLbQz',
            'https://static.natura.com/sites/default/files/styles/product_detail_square/public/products/53255_4.jpg?itok=a-UG_io8',
          ],
          price: 128.9,
          quant: 1,
        };
        setProductInfo(newProductInfo);
        setSelectedPhoto(newProductInfo.photos[0]);
      }, []);
    }

    fetchProductInfo();
  }, []);

  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <S.PhotosContainer>
          <S.PhotoPreviewContainer>
            {productInfo ? (
              productInfo.photos.map((photo) => (
                <S.PhotoPreview
                  onClick={() => setSelectedPhoto(photo)}
                  src={photo}
                />
              ))
            ) : (
              <Fragment />
            )}
          </S.PhotoPreviewContainer>
          <S.PhotoView src={selectedPhoto} />
        </S.PhotosContainer>
        <S.DetailsContainer>
          <S.Brand>{productInfo?.brand}</S.Brand>
          <S.Title>{productInfo?.name}</S.Title>
          {/* <S.Description>{productInfo?.description}</S.Description> */}
        </S.DetailsContainer>
      </S.Content>
    </S.Container>
  );
};

export { Details };
