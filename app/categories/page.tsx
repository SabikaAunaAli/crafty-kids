"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetAllAge, GetAllBlog } from "../services/colouring";

const Categories = () => {
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

  const fetchCarft = async () => {
    try {
      const response = await GetAllBlog({
        pageNumber: 1,
        pageSize: 10,
        type: "Craft",
      });
      if (response.statusCode === 200) {
        setBlogs(response.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCarft();
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
                  <li>
                    <Link href="/">Home</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li>
                    <Link href="/activities">Activities</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li >
                    <Link href="/colouring-pages">Colouring Pages</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li className="active">
                    <Link href="/categories">Craft</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                </ul>
              </div>
             
            </div>
           
          </div>
        </div>
      </header>
      <div className="home craft-page">
        <div className="text-center">
          <div className="container-fluid first-craft-section">
            <div className="container">
              <h2>CRAFT</h2>

              <h4 className="card_heading">Most Popular</h4>
              <div className="row ">
                {blogs.slice(0, 3).map((blog: any, index: any) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <Link href={`/categories/${blog.id}`}>
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
                        <Link href={`/categories/${blog.id}`}>
                          View Details
                          <img
                            alt=""
                            className="ml-2"
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
          <div className="container-fluid second-craft-section">
            <img
              src="/images/circleImage.png"
              className="circle_images"
              alt=""
            />

            <img alt="" className="actvt" src="/images/ac3.svg" />
            <div className="container pt-5">
              <h4 className="card_heading">Recent Post</h4>
              <div className="row pb-4">
                {blogs.slice(3).map((blog: any, index: any) => (
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
                          <img alt="" src="/images/art2.png" />
                          <img
                            src="/images/green-star.png"
                            className={`greenStar d-none ${
                              index == 1 ? "d-block" : ""
                            }`}
                            alt=""
                          />
                        </div>
                        <h3>{blog.metaTitle}</h3>
                        <span>{blog.shortDescription}</span>
                        <Link href={`/activities/${blog.id}`}>
                          View Details
                          <img
                            alt=""
                            className="ml-2"
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
      </div>
      <div className="copyright mt-0">
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

export default Categories;
