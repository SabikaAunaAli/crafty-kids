"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GetAllAge, GetAllBlog } from "../services/colouring";

const ColouringPages = () => {
  const [blogs, setBlogs] = useState([]);
  const [mySlug, setMySlug] = useState("");
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

  const fetchColouring = async () => {
    try {
      const response = await GetAllBlog({
        pageNumber: 1,
        pageSize: 10,
        type: "Colouring Page",
      });
      if (response.statusCode === 200) {
        setBlogs(response.data.items);
        setMySlug(response.data.items.slug);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchColouring();
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
      <div className="navigation nav-bg">
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
                  <li>
                    <Link href="/activities">Activities</Link>
                    <img src="/images/nav-active.svg" alt="Navigation Active" />
                  </li>
                  <li className="active">
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


  

      <div className="home coloring py-0">
        <div className="coloring-inner">
          <div className="container">
            <h1 className="text-center">Colouring Pages</h1>
            <h4 className="card_heading">Most Popular</h4>
            <div className="row">
              {blogs.slice(0, 3).map((blog: any, index: any) => (
                <div className="col-md-4" key={index}>
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
                      className="card-img-top object-fit-cover"
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
            <h4 className="card_heading">Recent Posts</h4>
            <div className="row">
              {blogs.slice(3).map((blog: any, index: any) => (
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

export default ColouringPages;
