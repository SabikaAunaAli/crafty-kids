"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetAllAge, GetAllBlog } from "./services/colouring";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);



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

  // const fetchActivity = async () => {
  //   try {
  //     const response = await GetAllBlog({
  //       pageNumber: 1,
  //       pageSize: 10,
  //       type: "Activity",
  //     });
  //     if (response.statusCode === 200) {
  //       setBlogs(response.data.items);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchActivity();
   
  // }, []);

  const [activities, setActivities] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [colourings, setColourings] = useState([]);
  const [mySlug, setMySlug] = useState(null);

  const fetchAllBlogs = async () => {
    try {
      const [activitiesResponse, craftsResponse, colouringsResponse] = await Promise.all([
        GetAllBlog({ pageNumber: 1, pageSize: 10, type: 'Activity' }),
        GetAllBlog({ pageNumber: 1, pageSize: 10, type: 'Craft' }),
        GetAllBlog({ pageNumber: 1, pageSize: 10, type: 'Colouring Page' }),
      ]);

      setActivities(activitiesResponse.data.items);
      setCrafts(craftsResponse.data.items);
      setColourings(colouringsResponse.data.items);

      // Assuming slug is only available in colouring pages
      if (colouringsResponse.data.items.length > 0) {
        setMySlug(colouringsResponse.data.items[0].slug);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
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
                      style={{
                        fontSize: "30px",
                        cursor: "pointer",
                        display: "inline-block",
                      }}
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
                <h1 className="homepage-heading">
                  Where Playful Learning Takes Center Stage
                </h1>
                <span className="sub-tittle ">
                  Discover fun activities for kids of all age
                </span>
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
            <span className="sub-tittle ">
              Engage Kids with New and Exciting Projects
            </span>
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

              <div className="row">
                {activities.slice(1, 4).map((blog: any, index: number) => (
                  <div className="col-md-4 mb-5" key={index}>
                    <Link href={`/activities/${blog.id}`}>
                      <div
                        className={`actvity-inner  ${
                          index % 3 == 0
                            ? "orange"
                            : index % 3 == 1
                            ? "yellow"
                            : "blue"
                        }`}
                      >
                        <div className="act-top">
                          <img alt="" src="/images/art2.png" />
                        </div>
                        <h3>{blog.metaTitle}</h3>
                        <span>{blog.shortDescription}</span>
                        <Link href={`/activities/${blog.id}`}>
                          View Details
                          <img
                            alt=""
                            className="mr-2 p-2"
                            src="/images/arrow.svg"
                          />
                        </Link>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="latest_craft text-center">
          <div className="container">
            <img
              className="circle_image"
              src="/images/circleImage.png"
              alt="Activities"
            />
            <h1>Latest Crafts</h1>
            <span className="sub-tittle ">
              Discover Creative Crafts to Spark Imagination
            </span>
            <img className="cImage" src="/images/c.png" alt="Activities" />

            <div className="view-all">
              <Link href="/categories">
                View All
                <img
                  src="/images/viewall.svg"
                  className="ml-2"
                  alt="View All Icon"
                />
              </Link>
            </div>
            {/* <div className="row position-relative">
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
            </div> */}


<div className="row pb-4">
                {crafts.slice(3-6).map((blog: any, index: any) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <Link href={`/categories/${blog.id}`}>
                      <div
                        className={`actvity-inner  ${
                          index % 3 == 0
                            ? "blue"
                            : index % 3 == 1
                            ? "orange"
                            : "yellow"
                        }`}
                      >
                        <div className="act-top">
                          <img alt="" src="/images/art2.png" />
                        </div>
                        <h3>{blog.metaTitle}</h3>
                        <span>{blog.shortDescription}</span>
                        <Link href={`/categories/${blog.id}`}>
                          View Details
                          <img
                            alt=""
                            className="mr-2 p-2"
                            src="/images/arrow.svg"
                          />
                        </Link>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>



          </div>
        </div>

        <div className="category  text-center">
          <div className="catbtn-bg">
            <div className="container">
              <h1>Top Colouring Pages</h1>
              <span className="sub-tittle ">
                Explore Our Most Popular Coloring Sheets
              </span>
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
              {colourings.slice(0-3).map((blog: any, index: any) => (
                <div className="col-md-4 mb-5" key={index}>
                  <div
                    className={`card ${
                      index % 3 == 0
                        ? "card-first"
                        : index % 3 == 1
                        ? "card-second"
                        : "card-third"
                    }`}
                  >
                    <img
                      src={blog.fullFileUrl || "/images/default_image.png"}
                      className="card-img-top"
                      alt="Blog image"
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
                      <h5 className="card-title">{blog.metaTitle}</h5>
                      <div className="d-flex align-items-center">
                        <p className="card-text">{blog.shortDescription}</p>
                        <Link
                          href={`/colouring-pages/${blog.id}`}
                          className="card_link_btn stretched-link"
                        >
                          <i className="fa-solid fa-arrow-right text-light"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
