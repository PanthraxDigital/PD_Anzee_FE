import * as React from "react";
import { Link } from "react-router-dom";

import { ProductListItem } from "../../components";
import { generateProductUrl } from "../../core/utils";
import { ProductDetails_product_category_products_edges } from "./types/ProductDetails";

const OtherProducts: React.FC<{
  products: ProductDetails_product_category_products_edges[];
}> = ({ products }) => (
  <div className="relateproduct bgwhite p-t-45 p-b-138">
    <div className="container">
      <div className="sec-title p-b-60">
        <h4 className="m-text5 t-center">Related Products</h4>
      </div>
      <div>
        <div className="row">
          {products.map(({ node: product }) => (
            <ProductListItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OtherProducts;
