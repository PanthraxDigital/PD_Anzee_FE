import * as React from "react";
import { Link } from "react-router-dom";

import { Carousel, Loader, ProductListItem } from "..";
import { generateProductUrl, maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );

        if (products.length) {
          return (
            <div className="products-featured" style={{ textAlign: "center" }}>
              <div className="container">
                <h3>{title}</h3>
                {/* <Carousel> */}
                <div className="row">
                  {products.map(({ node: product }) => (
                    // <Link
                    //   to={generateProductUrl(product.id, product.name)}
                    //   key={product.id}
                    // >
                    <ProductListItem product={product} />
                    // </Link>
                  ))}
                </div>
                {/* </Carousel> */}
              </div>
            </div>
          );
        }
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsFeatured.defaultProps = {
  title: "Latest Products"
};

export default ProductsFeatured;
