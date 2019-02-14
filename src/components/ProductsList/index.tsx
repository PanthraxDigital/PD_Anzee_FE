//import "./scss/index.scss";
import "../../vendor/bootstrap/css/bootstrap.css";
import "../../css/util.min.css";
import "../../css/main.min.css";

import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Dropdown, ProductListItem } from "..";

import Loader from "../Loader";
import { Filters } from "../ProductFilters";

import { Product } from "../ProductListItem";

interface ProductsListProps {
  displayLoader: boolean;
  filters: Filters;
  hasNextPage: boolean;
  notFound?: string | React.ReactNode;
  onLoadMore: () => void;
  onOrder: (order: string) => void;
  products: Product[];
  totalCount: number;
}

export const ProductList: React.FC<ProductsListProps> = ({
  displayLoader,
  filters,
  hasNextPage,
  notFound,
  onLoadMore,
  onOrder,
  products,
  totalCount
}) => {
  const filterOptions = [
    { value: "price", label: "Price Low-High" },
    { value: "-price", label: "Price High-Low" },
    { value: "name", label: "Name Increasing" },
    { value: "-name", label: "Name Decreasing" }
  ];
  const sortValues = filterOptions.find(
    option => option.value === filters.sortBy
  );
  const hasProducts = !!totalCount;

  return (
    <div className="bgwhite p-t-55 p-b-65">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 p-b-50">
            <div className="flex-sb-m flex-w p-b-35">
              {hasProducts && (
                <span className="s-text8 p-t-5 p-b-5">
                  {totalCount} Products
                </span>
              )}
              {displayLoader && (
                <div className="products-list__loader">
                  <Loader />
                </div>
              )}
              <span className="flex-w">
                <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                  {hasProducts && (
                    <>
                      {/* <span>Sort by:</span>{" "} */}
                      <Dropdown
                        className="selection-2 select2-hidden-accessible"
                        options={filterOptions}
                        value={sortValues || ""}
                        isSearchable={false}
                        onChange={event => onOrder(event.value)}
                      />
                    </>
                  )}
                </div>
              </span>
            </div>
            {hasProducts ? (
              <>
                <div className="row">
                  {products.map(product => (
                    <ProductListItem product={product} key={product.id} />
                  ))}
                </div>
                <div
                  className="products-list__products__load-more"
                  style={{ margin: "auto 0", textAlign: "center" }}
                >
                  {displayLoader ? (
                    <Loader />
                  ) : (
                    hasNextPage && (
                      <Button secondary onClick={onLoadMore}>
                        Load more products
                      </Button>
                    )
                  )}
                </div>
              </>
            ) : (
              <div className="products-list__products-not-found">
                {notFound}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductList.defaultProps = {
  notFound: "We couldn't find any product matching these conditions"
};

export default ProductList;
