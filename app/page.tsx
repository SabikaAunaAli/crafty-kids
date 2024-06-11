"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetAllAge, GetAllBlog } from "./services/colouring";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [age, setAge] = useState([]);
  const [activities, setActivities] = useState([]);
  const [colouring, setColouring] = useState([]);
  const [craft, setCraft] = useState([]);
  const [colouringName, setColouringName] = useState("");
  const [colouringNameSecond, setColouringNameSecond] = useState("");
  const [colouringNameThird, setColouringNameThird] = useState("");
  const [activityName, setActivityName] = useState("");
  const [activityNameSecond, setActivityNameSecond] = useState("");
  const [activityNameThird, setActivityNameThird] = useState("");
  const [craftName, setCraftName] = useState("");
  const [craftNameSecond, setCraftNameSecond] = useState("");
  const [craftNameThird, setCraftNameThird] = useState("");
  const [activityDetail, setActivityDetail] = useState("");
  const [activityDetailSecond, setActivityDetailSecond] = useState("");
  const [activityDetailThird, setActivityDetailThird] = useState("");
  const [colouringDetail, setColouringDetail] = useState("");
  const [colouringDetailSecond, setColouringDetailSecond] = useState("");
  const [colouringDetailThird, setColouringDetailThird] = useState("");
  const [craftDetail, setCraftDetail] = useState("");
  const [craftDetailSecond, setCraftDetailSecond] = useState("");
  const [craftDetailThird, setCraftDetailThird] = useState("");

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

  const fetchActivity = async () => {
    try {
      const response = await GetAllBlog({
        pageNumber: 1,
        pageSize: 3,
        type: "Activity",
      });
      if (response.statusCode === 200) {
        setActivities(response.data.items);
        if (response.data.items && response.data.items.length > 0) {
          setActivityName(response.data.items[0].metaTitle);
          setActivityDetail(response.data.items[0].shortDescription);
        }
        if (response.data.items && response.data.items.length > 0) {
          setActivityNameSecond(response.data.items[1].metaTitle);
          setActivityDetailSecond(response.data.items[1].shortDescription);
        }
        if (response.data.items && response.data.items.length > 0) {
          setActivityNameThird(response.data.items[2].metaTitle);
          setActivityDetailThird(response.data.items[2].shortDescription);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchColouring = async () => {
    try {
      const response = await GetAllBlog({
        pageNumber: 1,
        pageSize: 3,
        type: "Colouring Page",
      });
      if (response.statusCode === 200) {
        setColouring(response.data.items);
        if (response.data.items && response.data.items.length > 0) {
          setColouringName(response.data.items[0].metaTitle);
          setColouringDetail(response.data.items[0].shortDescription);
        }
        if (response.data.items && response.data.items.length > 0) {
          setColouringNameSecond(response.data.items[1].metaTitle);
          setColouringDetailSecond(response.data.items[1].shortDescription);
        }
        if (response.data.items && response.data.items.length > 0) {
          setColouringNameThird(response.data.items[2].metaTitle);
          setColouringDetailThird(response.data.items[2].shortDescription);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCraft = async () => {
    try {
      const response = await GetAllBlog({
        pageNumber: 1,
        pageSize: 3,
        type: "Craft",
      });
      if (response.statusCode === 200) {
        setCraft(response.data.items);
        if (response.data.items && response.data.items.length > 0) {
          setCraftName(response.data.items[0].metaTitle);
          setCraftDetail(response.data.items[0].shortDescription);
        }
        if (response.data.items && response.data.items.length > 0) {
          setCraftNameSecond(response.data.items[1].metaTitle);
          setCraftDetailSecond(response.data.items[1].shortDescription);
        }
        if (response.data.items && response.data.items.length > 0) {
          setCraftNameThird(response.data.items[2].metaTitle);
          setCraftDetailThird(response.data.items[2].shortDescription);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAge = async () => {
    try {
      const response = await GetAllAge({
        pageNumber: 1,
        pageSize: 100,
        filters: "",
        query: "",
      });
      if (response.statusCode === 200) {
        setAge(
          response.data.items.map((item: any) => {
            return {
              label: item.name,
              value: item.id,
            };
          })
        );
      }
    } catch (error: any) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchActivity();
    fetchColouring();
    fetchCraft();
    fetchAge();
  }, []);

  return (
    <React.Fragment>
      <header>
      <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo d-flex justify-content-between">
                  <Link href="/">
                  <img
                      alt="image"
                      className="img-fluid"
                      src="images/Vector.png"
                    />
                    <span className="text-nowrap">Crafty Childhood</span>
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
                      <Link href="/categories">Craft</Link>
                    </div>
                    <span
                      style={{ fontSize: "30px", cursor: "pointer", display: "inline-block"  }}
                      onClick={openNav}
                    >
                      &#9776;
                    </span>
                  </div>
                  {/* end */}
                </div>
              </div>
              <div className="col-md-10 mt-2 ">
                <ul className="">
                  <li className="active">
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
                    <Link href="/categories">Craft</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                </ul>
              </div>
             
            </div>
           
          </div>
        </div>

       
      </header>
      <div className="home">
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="homepage-heading">Where Playful Learning Takes Center Stage</h1>
                <span className="sub-tittle ">Discover fun activities for kids of all age</span>
                <Link href="/activities">
                  <button>Explore Activities</button>
                </Link>
              </div>
              <div className="col-md-6">
                <div className="banner-img">
                  <img
                    src="/images/banner-rightimg.png"
                    alt="Banner Right Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="activities text-center">
          <div className="container">
            <div className="_activity_images">
              <img
                src="/images/dots.png"
                className="_first"
                alt="Activities Icon"
              />
              <img
                src="/images/_second.png"
                className="_second"
                alt="Activities Icon"
              />
            </div>
            <h1>Latest Activities</h1>
            <span className="sub-tittle ">Engage Kids with New and Exciting Projects</span>
            <div className="_activity_right_images">
              <img
                src="/images/cloud.png"
                className="_first"
                alt="Activities Icon"
              />
              <img
                src="/images/half_circle.png"
                className="_second"
                alt="Activities Icon"
              />
            </div>
            <img className="ac" src="/images/XMLID_932_.png" alt="Activities" />

            <div className="view-all">
              <Link href="/activities">
                View All
                <img
                  src="/images/viewall.svg"
                  className="ml-2"
                  alt="View All Icon"
                />
              </Link>
            </div>
            <div className="row position-relative">
              <img
                src="/images/triangles.png"
                className="position-absolute triangles"
                alt="Arrow Ic position-relativeon"
              />
              <img
                src="/images/multiple_circles.png"
                className="position-absolute circles"
                alt="Arrow Ic position-relativeon"
              />
              <img
                src="/images/yellow-cross.png"
                className="position-absolute cross"
                alt="cross icon"
              />
              <img
                src="/images/dotted.png"
                className="position-absolute dotted"
                alt="cross icon"
              />
              <div className="col-md-4 mb-3">
                <Link href="/activities/paper-craft">
                  <div className="actvity-inner orange">
                    <div className="act-top">
                      <img src="/images/art1.png" alt="Paper Art" />
                    </div>
                    <h3>{activityName}</h3>
                    <span>{activityDetail}</span>
                    <a href="javascript:void()" className="mb-3 mr-3">
                      View Details
                      <img
                        src="/images/arrow.svg"
                        className="ml-2"
                        alt="Arrow Icon"
                      />
                    </a>
                  </div>
                  <img
                    src="/images/p3.svg"
                    className="scissors"
                    alt="Paper Art"
                  />
                </Link>
              </div>

              <div className="col-md-4 mb-3">
                <Link href="/activities/paper-craft">
                  <div className="actvity-inner yellow">
                    <div className="act-top">
                      <img src="/images/art2.png" alt="Card Painting" />
                    </div>
                    <h3>{activityNameSecond}</h3>
                    <span>{activityDetailSecond} </span>
                    <a href="javascript:void()" className="mb-3 mr-3">
                      View Details
                      <img
                        src="/images/arrow.svg"
                        className="ml-2"
                        alt="Arrow Icon"
                      />
                    </a>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 mb-3">
                <Link href="/activities/craft">
                  <div className="actvity-inner blue">
                    <div className="act-top">
                      <img src="/images/art3.png" alt="Craft" />
                    </div>
                    <h3>{activityNameThird}</h3>
                    <span>{activityDetailThird}</span>
                    <a href="javascript:void()" className="mb-3 mr-3">
                      View Details
                      <img
                        src="/images/arrow.svg"
                        className="ml-2"
                        alt="Arrow Icon"
                      />
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="category  text-center">
          <div className="catbtn-bg">
            <div className="container">
              <h1>Top Colouring Pages</h1>
              <span className="sub-tittle ">Explore Our Most Popular Coloring Sheets</span>
              <div className="view-all">
                <Link href="/activities">
                  View All
                  <img
                    src="/images/viewall.svg"
                    className="ml-2"
                    alt="View All Icon"
                  />
                </Link>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-first">
                    <img
                      src="/images/card_image1.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <svg
                        className="wave"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,400 L 0,150 C 128,113.19999999999999 256,76.39999999999999 442,97 C 628,117.60000000000001 872,195.60000000000002 1048,214 C 1224,232.39999999999998 1332,191.2 1440,150 L 1440,400 L 0,400 Z"></path>
                      </svg>
                      <h5 className="card-title">{colouringName}</h5>
                      <div className="d-flex align-items-center ">
                        <p className="card-text">{colouringDetail}</p>
                        <Link
                          href="/activities/paper-craft"
                          className="card_link_btn stretched-link"
                        >
                          <i className="fa-solid fa-arrow-right text-light "></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-second">
                    <img
                      src="/images/card_image2.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <svg
                        className="wave"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,400 L 0,150 C 128,113.19999999999999 256,76.39999999999999 442,97 C 628,117.60000000000001 872,195.60000000000002 1048,214 C 1224,232.39999999999998 1332,191.2 1440,150 L 1440,400 L 0,400 Z"></path>
                      </svg>
                      <h5 className="card-title">{colouringNameSecond}</h5>
                      <div className="d-flex align-items-center ">
                        <p className="card-text">{colouringDetailSecond}</p>
                        <Link
                          href="/activities/paper-craft"
                          className="card_link_btn stretched-link"
                        >
                          <i className="fa-solid fa-arrow-right text-light "></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-third">
                    <img
                      src="/images/card_image3.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <svg
                        className="wave"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,400 L 0,150 C 128,113.19999999999999 256,76.39999999999999 442,97 C 628,117.60000000000001 872,195.60000000000002 1048,214 C 1224,232.39999999999998 1332,191.2 1440,150 L 1440,400 L 0,400 Z"></path>
                      </svg>
                      <h5 className="card-title">{colouringNameThird}</h5>
                      <div className="d-flex align-items-center ">
                        <p className="card-text">{colouringDetailThird}</p>
                        <Link
                          href="/activities/paper-craft"
                          className="card_link_btn stretched-link"
                        >
                          <i className="fa-solid fa-arrow-right text-light "></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="latest_craft text-center">
          <div className="container">
            <img
              className="circle_image"
              src="/images/circleImage.png"
              alt="Activities"
            />
            <h1>Latest Crafts</h1>
            <span className="sub-tittle ">Discover Creative Crafts to Spark Imagination
            </span>
            <img className="cImage" src="/images/c.png" alt="Activities" />

            <div className="view-all">
              <Link href="/activities">
                View All
                <img
                  src="/images/viewall.svg"
                  className="ml-2"
                  alt="View All Icon"
                />
              </Link>
            </div>
            <div className="row position-relative">
              <div className="col-md-4 mb-3 mb-3">
                <Link href="/activities/paper-craft">
                  <div className="latest_craft-inner orange">
                    <div className="act-top">
                      <img src="/images/art1.png" alt="Paper Art" />
                    </div>
                    <h3>{craftName}</h3>
                    <span>{craftDetail} </span>
                    <a href="javascript:void()" className="mb-3 mr-3">
                      View Details
                      <img
                        src="/images/arrow.svg"
                        className="ml-2"
                        alt="Arrow Icon"
                      />
                    </a>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 mb-3 mb-3">
                <Link href="/activities/paper-craft">
                  <div className="latest_craft-inner yellow">
                    <div className="act-top">
                      <img src="/images/art2.png" alt="Card Painting" />
                    </div>
                    <h3>{craftNameSecond}</h3>
                    <span>{craftDetailSecond}</span>
                    <a href="javascript:void()" className="mb-3 mr-3">
                      View Details
                      <img
                        src="/images/arrow.svg"
                        className="ml-2"
                        alt="Arrow Icon"
                      />
                    </a>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 mb-3">
                <Link href="/activities/craft">
                  <div className="latest_craft-inner blue">
                    <div className="act-top">
                      <img src="/images/art3.png" alt="Craft" />
                    </div>
                    <h3>{craftNameThird}</h3>
                    <span>{craftDetailThird}</span>
                    <a href="javascript:void()" className="mb-3 mr-3">
                      View Details
                      <img
                        src="/images/arrow.svg"
                        className="ml-2"
                        alt="Arrow Icon"
                      />
                    </a>
                    <img
                      className="actvt"
                      src="/images/ac3.svg"
                      alt="Activity"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="category  text-center">
          <div className="catbtn-bg">
            <div className="container">
              <h1>Top Colouring Pages</h1>
              <span className="sub-tittle ">Explore Our Most Popular Coloring Sheets</span>
              <div className="view-all">
                <Link href="/activities">
                  View All
                  <img
                    src="/images/viewall.svg"
                    className="ml-2"
                    alt="View All Icon"
                  />
                </Link>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-first">
                    <img
                      src="/images/card_image1.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <svg
                        className="wave"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,400 L 0,150 C 128,113.19999999999999 256,76.39999999999999 442,97 C 628,117.60000000000001 872,195.60000000000002 1048,214 C 1224,232.39999999999998 1332,191.2 1440,150 L 1440,400 L 0,400 Z"></path>
                      </svg>
                      <h5 className="card-title">{colouringName}</h5>
                      <div className="d-flex align-items-center ">
                        <p className="card-text">{colouringDetail}</p>
                        <Link
                          href="/activities/paper-craft"
                          className="card_link_btn stretched-link"
                        >
                          <i className="fa-solid fa-arrow-right text-light "></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-second">
                    <img
                      src="/images/card_image2.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <svg
                        className="wave"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,400 L 0,150 C 128,113.19999999999999 256,76.39999999999999 442,97 C 628,117.60000000000001 872,195.60000000000002 1048,214 C 1224,232.39999999999998 1332,191.2 1440,150 L 1440,400 L 0,400 Z"></path>
                      </svg>
                      <h5 className="card-title">{colouringNameSecond}</h5>
                      <div className="d-flex align-items-center ">
                        <p className="card-text">{colouringDetailSecond}</p>
                        <Link
                          href="/activities/paper-craft"
                          className="card_link_btn stretched-link"
                        >
                          <i className="fa-solid fa-arrow-right text-light "></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-third">
                    <img
                      src="/images/card_image3.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <svg
                        className="wave"
                        viewBox="0 0 1440 390"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        preserveAspectRatio="none"
                      >
                        <path d="M 0,400 L 0,150 C 128,113.19999999999999 256,76.39999999999999 442,97 C 628,117.60000000000001 872,195.60000000000002 1048,214 C 1224,232.39999999999998 1332,191.2 1440,150 L 1440,400 L 0,400 Z"></path>
                      </svg>
                      <h5 className="card-title">{colouringNameThird}</h5>
                      <div className="d-flex align-items-center ">
                        <p className="card-text">{colouringDetailThird}</p>
                        <Link
                          href="/activities/paper-craft"
                          className="card_link_btn stretched-link"
                        >
                          <i className="fa-solid fa-arrow-right text-light "></i>
                        </Link>
                      </div>
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
}
