import React from "react";
import { FaSpinner } from "react-icons/fa";

import { Container, ProductsContainer, SeeMore } from "./styles";
import { withHome } from "./withHome";
import { Navbar, Footer, Card } from "../../components";
import { IHome, IProduct } from "./types";

import "./styles.css";

const HomeComponent = (props: IHome) => {
  const { products, loading, fetchMoreProcucts } = props;
  console.log(products);
  return (
    <Container>
      <Navbar />
      <ProductsContainer>
        {products.map((product: IProduct, i: number) => (
          <Card {...product} />
        ))}
      </ProductsContainer>
      <SeeMore onClick={fetchMoreProcucts} disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : "Ver mais"}
      </SeeMore>
      <Footer />
    </Container>
  );
};

const Home = withHome(HomeComponent);

export { Home };
