"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetAllAge, GetAllBlog } from "../services/colouring";

const Activities = () => {
  const [blogs, setBlogs] = useState([]);
  const [age, setAge] = useState([]);

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
        pageSize: 10,
        type: "Activity",
      });
      if (response.statusCode === 200) {
        setBlogs(response.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

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
                  <li >
                    <Link href="/">Home</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li className="active">
                    <Link href="/activities">Activities</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li >
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
      <div className="home activities-page  py-0">
        <div className="activities position-relative">
          <img
            src="images/half_circle.png"
            className="half_circle img-fluid position-absolute end-0 mb-5"
            alt=""
          />
          <img
            src="images/half_circle.png"
            className="half_circle2 img-fluid position-absolute end-0 mb-5"
            alt=""
          />

          <div className="container">
            <h1 className="app-heading position-relative text-center">
              Activities
            </h1>
            <div className="decor_image position-relative">
              <img src="images/XMLID_932_.png" className="triangle" alt="" />
              <img src="images/dots.png" className="dots img-fluid" alt="" />
              <img src="images/cloud.png" className="cloud img-fluid" alt="" />
            </div>
            <h4 className="card_heading ml-3">Most Popular</h4>
            <div className="row ">
              {blogs.slice(0, 3).map((blog: any, index: any) => (
                <div className="col-md-4 mb-4" key={index}>
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
                        <img alt="" src="/images/art1.png" />
                      </div>
                      <h3>{blog.metaTitle}</h3>
                      <span>{blog.shortDescription}</span>
                      <Link href={`/activities/${blog.id}`}>
                        View Details
                        <img alt="" className="ml-2" src="/images/arrow.svg" />
                      </Link>
                    </div>
                    <img
                      src="/images/p3.svg"
                      className={`scissors mt-5 ${
                        index > 0 ? "d-none" : "d-block"
                      }`}
                      alt="Paper Art"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <h4 className="card_heading position-relative mt-5 pt-5 ml-2">
              Recent Posts
              <div className="position-relative">
                <img
                  src="/images/multi_triangles.png"
                  className="img-fluid position-absolute end-0 multi_triangles"
                  alt=""
                />

                <img
                  src="/images/cloud.png"
                  className="img-fluid position-absolute end-0 cloud2"
                  alt=""
                />
              </div>
            </h4>
            <div className="row">
              {blogs.slice(1).map((blog: any, index: any) => (
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
                        <img alt="" className="ml-2" src="/images/arrow.svg" />
                      </Link>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="position-relative p-5">
            <div className="position-relative">
              <img
                src="images/multiple_circles.png"
                alt=""
                className="position-absolute img-fluid bottom_circles "
              />
              <img src="images/cloud.png" className="cloud3 img-fluid" alt="" />
              <img
                src="images/yellow-cross.png"
                className="cross img-fluid"
                alt=""
              />
            </div>
          </div>
          <img src="/images/left_lines.png" className="left_lines" alt="" />
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

export default Activities;
