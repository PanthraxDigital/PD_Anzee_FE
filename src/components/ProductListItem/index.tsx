//import "./scss/index.scss";
import "../../vendor/bootstrap/css/bootstrap.css";
import "../../css/util.min.css";
import "../../css/main.min.css";
import { generateProductUrl } from "../../core/utils";
import * as React from "react";
import { Link } from "react-router-dom";
import { CachedThumbnail } from "..";
import { BasicProductFields } from "../../views/Product/types/BasicProductFields";

import noPhotoImg from "../../images/no-photo.svg";

export interface Product extends BasicProductFields {
  category?: {
    id: string;
    name: string;
  };
  price: {
    localized: string;
  };
}

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { price, category } = product;
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 p-b-50">
      <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
          <CachedThumbnail source={product}>
            <img src={noPhotoImg} alt={product.thumbnail.alt} />
          </CachedThumbnail>
        </div>
        <div className="block2-txt p-t-20" style={{ textAlign: "center" }}>
          <Link
            className="block2-name dis-block s-text3 p-b-5"
            to={generateProductUrl(product.id, product.name)}
          >
            {product.name} <br />
            {price.localized}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
