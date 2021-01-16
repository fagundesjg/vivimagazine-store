import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import './styles.css';
import { Navbar, Footer, Card } from 'components';
import { IProduct } from 'services/products/types';
import * as S from './styles';
import { ProductServices } from 'services';

const Home = () => {
  const history = useHistory();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await ProductServices.index();
      setProducts(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Container>
      <Navbar />
      <S.ProductsContainer>
        {products.map((product: IProduct, index: number) => (
          <Card
            key={index}
            product={product}
            onClick={() => history.push(`/details/${product.id}`)}
          />
        ))}
      </S.ProductsContainer>
      <S.SeeMore onClick={() => {}} disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : 'Ver mais'}
      </S.SeeMore>
      <Footer />
    </S.Container>
  );
};

export { Home };
