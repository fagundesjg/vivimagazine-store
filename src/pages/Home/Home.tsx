import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import { Container, ProductsContainer, SeeMore } from './styles';
import { withHome } from './withHome';
import { Navbar, Footer, Card } from '../../components';
import { IHome, IProduct } from './types';

import './styles.css';

const HomeComponent = (props: IHome) => {
  const { products, loading, fetchMoreProcucts } = props;
  const history = useHistory();

  return (
    <Container>
      <Navbar />
      <ProductsContainer>
        {products.map((product: IProduct, i: number) => (
          <Card
            product={product}
            onClick={() => history.push(`/details/${product.id}`)}
          />
        ))}
      </ProductsContainer>
      <SeeMore onClick={fetchMoreProcucts} disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : 'Ver mais'}
      </SeeMore>
      <Footer />
    </Container>
  );
};

const Home = withHome(HomeComponent);

export { Home };
