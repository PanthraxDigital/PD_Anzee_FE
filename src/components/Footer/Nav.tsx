import * as React from "react";

import { NavLink } from "..";
import { TypedSecondaryMenuQuery } from "./queries";

class Nav extends React.PureComponent {
  render() {
    return (
      <>
        <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">GET IN TOUCH</h4>

          <div>
            <p className="s-text7 w-size27">
              Any questions? Let us know in store at 8th floor, 379 Park street,
              West Bengal, or call us on (+91) 996 716 6879
            </p>

            <div className="flex-m p-t-30">
              <a href="#" className="fs-18 color1 p-r-20 fa fa-facebook" />
              <a href="#" className="fs-18 color1 p-r-20 fa fa-instagram" />
              <a href="#" className="fs-18 color1 p-r-20 fa fa-pinterest-p" />
              <a
                href="#"
                className="fs-18 color1 p-r-20 fa fa-snapchat-ghost"
              />
              <a href="#" className="fs-18 color1 p-r-20 fa fa-youtube-play" />
            </div>
          </div>
        </div>
        <TypedSecondaryMenuQuery>
          {({ data }) => {
            return data.shop.navigation.secondary.items.map(item => (
              <div
                className="w-size7 p-t-30 p-l-15 p-r-15 respon4"
                key={item.id}
              >
                <h4 className="s-text12 p-b-30">
                  {/* <NavLink item={item} /> */}
                  {item.name}
                </h4>
                <ul>
                  {item.children.map(subItem => (
                    <li key={subItem.id} className="p-b-9">
                      <NavLink item={subItem} />
                    </li>
                  ))}
                </ul>
              </div>
            ));
          }}
        </TypedSecondaryMenuQuery>

        <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">Newsletter</h4>

          <form>
            <div className="effect1 w-size9">
              <input
                className="s-text7 bg6 w-full p-b-5"
                type="text"
                name="email"
                placeholder="email@example.com"
              />
              <span className="effect1-line" />
            </div>

            <div className="w-size2 p-t-20">
              <button
                className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4"
                style={{ transform: "skew(0deg)", boxShadow:"0" }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Nav;

{
  /* <footer className="footer-nav">
        <div className="container">
          <TypedSecondaryMenuQuery>
            {({ data }) => {
              return data.shop.navigation.secondary.items.map(item => (
                <div className="footer-nav__section" key={item.id}>
                  <h4 className="footer-nav__section-header">
                    <NavLink item={item} />
                  </h4>
                  <div className="footer-nav__section-content">
                    {item.children.map(subItem => (
                      <p key={subItem.id}><NavLink item={subItem} /></p>
                    ))}
                  </div>
                </div>
              ));
            }}
          </TypedSecondaryMenuQuery>
        </div>
      </footer> */
}
