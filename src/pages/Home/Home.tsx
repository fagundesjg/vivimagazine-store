import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import './styles.css';
import { Navbar, Footer, Card } from 'components';
import { IProduct } from 'services/products/types';
import * as S from './styles';
import { ProductServices } from 'services';
import { IPaginateProps, IPagination } from 'services/types';

const Home = () => {
  const history = useHistory();
  const [productsData, setProductsData] = useState<IPagination<IProduct>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [take, setTake] = useState<number>(24);

  const fetchProducts = useCallback(
    async (payload?: IPaginateProps | undefined) => {
      try {
        const data = await ProductServices.index(payload);
        setProductsData(data);
      } catch (err) {}
    },
    []
  );

  const handleChangePage = useCallback(async () => {
    setLoading(true);
    await fetchProducts({ page, take });
    setLoading(false);
  }, [page, take, fetchProducts]);

  useEffect(() => {
    handleChangePage();
  }, [handleChangePage]);

  return (
    <S.Container>
      <Navbar />
      {loading && <FaSpinner className="spinner" />}
      <S.ProductsContainer>
        {productsData?.results.map((product) => (
          <Card
            key={product.id}
            product={product}
            onClick={() => history.push(`/details/${product.id}`)}
          />
        ))}
      </S.ProductsContainer>
      <div>
        <S.SeeMore
          disabled={!productsData?.previous || loading}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Anterior
        </S.SeeMore>
        <S.SeeMore
          disabled={!productsData?.next || loading}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Próxima
        </S.SeeMore>
      </div>
      <Footer />
    </S.Container>
  );
};

export { Home };
