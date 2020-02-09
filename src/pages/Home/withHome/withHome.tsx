import React, { useState, useEffect } from "react";

import { IWithHome, IProduct } from "../types";
import productsJSON from "./products.json";

const withHome = (WrappedComponent: React.ElementType) => {
  const WithHomeHOC = (props: IWithHome) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [limit, setLimit] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
      function fetchProducts() {
        const productsData: IProduct[] = productsJSON
          .map(p => ({
            brand: p.brand[0],
            img_url: p.images[0][0],
            friendly_name: p.friendly_name[0],
            price: parseFloat(p.sale_price[0]),
            discount: 0
          }))
          .slice(0, limit);
        setProducts(productsData);
      }

      fetchProducts();
    }, [limit]);

    async function fetchMoreProcucts() {
      try {
        setLoading(true);
        setTimeout(() => {
          setLimit(oldLimit => oldLimit + 10);
          setLoading(false);
        }, 2000);
      } catch (err) {}
    }

    return (
      <WrappedComponent
        products={products}
        loading={loading}
        fetchMoreProcucts={fetchMoreProcucts}
        {...props}
      />
    );
  };

  return WithHomeHOC;
};

export { withHome };
