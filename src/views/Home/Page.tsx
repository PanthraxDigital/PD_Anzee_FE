import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Loader, ProductsFeatured } from "../../components";
import { ProductsList_categories } from "../../core/types/saleor";
import { generateCategoryUrl } from "../../core/utils";
import { ProductsList_shop_homepageCollection_backgroundImage } from "./types/ProductsList";

import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
}> = ({ loading, categories, backgroundImage }) => (
  <>
    <div
      className="home-page__hero"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage.url})` }
          : null
      }
    >
      <div className="home-page__hero-text">
        <div>
          <span className="home-page__hero__title">
            <h1>Final reduction</h1>
          </span>
        </div>
        <div>
          <span className="home-page__hero__title">
            <h1>Up to 70% off sale</h1>
          </span>
        </div>
      </div>
      <div className="home-page__hero-action">
        {loading && !categories ? (
          <Loader />
        ) : (
          <Link
            to={generateCategoryUrl(
              categories.edges[0].node.id,
              categories.edges[0].node.name
            )}
          >
            <Button>Shop sale</Button>
          </Link>
        )}
      </div>
    </div>
    <div className="banner bgwhite p-t-40 p-b-40">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
            <div className="block1 hov-img-zoom pos-relative m-b-30">
              <img
                src={require("../../images/banner-05.jpg")}
                alt="IMG-BENNER"
              />

              <div className="block1-wrapbtn w-size2">
                <a
                  href="#"
                  className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                >
                  Newborn
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
            <div className="block1 hov-img-zoom pos-relative m-b-30">
              <img
                src={require("../../images/banner-05.jpg")}
                alt="IMG-BENNER"
              />

              <div className="block1-wrapbtn w-size2">
                <a
                  href="#"
                  className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                >
                  Handcrafted
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
            <div className="block1 hov-img-zoom pos-relative m-b-30">
              <img
                src={require("../../images/banner-05.jpg")}
                alt="IMG-BENNER"
              />

              <div className="block1-wrapbtn w-size2">
                <a
                  href="#"
                  className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                >
                  Toys
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductsFeatured />

    <section
      className="parallax0 parallax100"
      style={{
        backgroundImage: `url(${"../../images/bg-video-01.jpg"}),backgroundPosition: center 13.3854px`
      }}
    >
      <div className="overlay0 p-t-190 p-b-200">
        <div className="flex-col-c-m p-l-15 p-r-15">
          <span className="m-text9 p-t-45 fs-20-sm">The Cutiest</span>

          <h3 className="l-text1 fs-35-sm">Lookbook</h3>

          <span
            className="btn-play s-text4 hov5 cs-pointer p-t-25"
            data-toggle="modal"
            data-target="#modal-video-01"
          >
            <i className="fa fa-play" aria-hidden="true" />
            Play Video
          </span>
        </div>
      </div>
    </section>

    <section className="instagram p-t-40">
      <div className="sec-title p-b-52 p-l-15 p-r-15">
        <h3 className="m-text5 t-center">@ follow us on Instagram</h3>
      </div>

      <div className="flex-w">
        <div className="block4 wrap-pic-w">
          <img
            src={require("../../images/gallery-07.jpg")}
            alt="IMG-INSTAGRAM"
          />

          <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
              <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
              <span className="p-t-2">39</span>
            </span>

            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p className="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span className="s-text9">Photo by @anzeeTeam</span>
            </div>
          </a>
        </div>

        <div className="block4 wrap-pic-w">
          <img
            src={require("../../images/gallery-09.jpg")}
            alt="IMG-INSTAGRAM"
          />

          <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
              <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
              <span className="p-t-2">39</span>
            </span>

            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p className="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span className="s-text9">Photo by @anzeeTeam</span>
            </div>
          </a>
        </div>

        <div className="block4 wrap-pic-w">
          <img
            src={require("../../images/gallery-13.jpg")}
            alt="IMG-INSTAGRAM"
          />

          <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
              <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
              <span className="p-t-2">39</span>
            </span>

            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p className="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span className="s-text9">Photo by @anzeeTeam</span>
            </div>
          </a>
        </div>

        <div className="block4 wrap-pic-w">
          <img
            src={require("../../images/gallery-15.jpg")}
            alt="IMG-INSTAGRAM"
          />

          <a href="#" className="block4-overlay sizefull ab-t-l trans-0-4">
            <span className="block4-overlay-heart s-text9 flex-m trans-0-4 p-l-40 p-t-25">
              <i className="icon_heart_alt fs-20 p-r-12" aria-hidden="true" />
              <span className="p-t-2">39</span>
            </span>

            <div className="block4-overlay-txt trans-0-4 p-l-40 p-r-25 p-b-30">
              <p className="s-text10 m-b-15 h-size1 of-hidden">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim
                iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare
                tellus, ac fringilla lacus. Ut sit amet enim orci. Nam eget
                metus elit.
              </p>

              <span className="s-text9">Photo by @anzeeTeam</span>
            </div>
          </a>
        </div>
      </div>
    </section>
    {/* <div className="home-page__categories">
      <div className="container">
        <h3>Shop by category</h3>
        <div className="home-page__categories__list">
          {categories.edges.map(({ node: category }) => (
            <div key={category.id}>
              <Link
                to={generateCategoryUrl(category.id, category.name)}
                key={category.id}
              >
                <div
                  className={classNames("home-page__categories__list__image", {
                    "home-page__categories__list__image--no-photo": !category.backgroundImage
                  })}
                  style={{
                    backgroundImage: `url(${
                      category.backgroundImage
                        ? category.backgroundImage.url
                        : noPhotoImg
                    })`
                  }}
                />
                <h3>{category.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div> */}
  </>
);

export default Page;
