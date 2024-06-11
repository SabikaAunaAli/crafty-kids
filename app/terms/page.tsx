"use client";
import Link from "next/link";
import React from "react";
// import { AGE_OPTIONS } from "../../common/utility";

const Terms = () => {
  const openNav = () => {
    const el = document.getElementById("mySidenav");
    if (el) {
      el.style.width = "250px";
    }
  };

  const closeNav = () => {
    const el = document.getElementById("mySidenav");
    if (el) {
      el.style.width = "0";
    }
  };
  return (
    <React.Fragment>
      <header>
        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo">
                  <Link href="/">
                    <img alt="" src="/images/logo.svg" />
                  </Link>
                  {/* mobile menu */}
                  <div className="mobile-nav">
                    <div id="mySidenav" className="sidenav">
                      <a
                        href="javascript:void(0)"
                        className="closebtn"
                        onClick={closeNav}
                      >
                        &times;
                      </a>
                      <Link href="/">Home</Link>
                      <Link href="/activities">Activities</Link>
                      <Link href="/colouring-pages">Colouring Pages</Link>
                      <Link href="/categories">Category</Link>
                    </div>
                    <span
                      style={{ fontSize: "30px", cursor: "pointer" }}
                      onClick={openNav}
                    >
                      &#9776;
                    </span>
                  </div>
                  {/* end */}
                </div>
              </div>
              <div className="col-md-7">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li>
                    <Link href="/activities">Activities</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li>
                    <Link href="/colouring-pages">Colouring Pages</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li>
                    <Link href="/categories">Category</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                </ul>
              </div>
              {/* <div className="col-md-2 filter">
                <div className="dropdown">
                  <button
                    className="dropdown_button"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Filter By Age <i className="fa-solid fa-chevron-down"></i>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {AGE_OPTIONS.map((opt, index) => (
                      <a className="dropdown-item" key={index} href="#">
                        {opt.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
            <div className="kids-breadcrumb">
              <Link href="/">Home</Link> <img alt="" src="./images/brd.svg" />
              <Link className="active" href="javascript:void()">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="privacy-policy terms">
        <div className="container">
          <h2>Terms Of Use</h2>
        </div>

        <div className="privacy-inner">
          <div className="container">
            <div className="terms-bg">
              <div className="privacy-bg-color term-shadow">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                      non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.
                    </p>

                    <div className="terms-btn">
                      <Link href="/">
                        <button className="decline">Decline</button>
                      </Link>
                      <Link href="/">
                        <button className="accept">Accept Terms Of Use</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left">
              <span>©2024 All Rights Reserved.</span>
            </div>
            <div className="col-md-6 text-right">
              <span>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </span>
              <span>
                <Link href="/terms">Terms Of Use</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Terms;
