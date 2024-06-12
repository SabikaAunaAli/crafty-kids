"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link"; // Assuming you're using Next.js
import { GetBlog } from "@/app/services/colouring";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface BlogDetail {
  metaTitle: string;
  shortDescription: string;
  fullFileUrl: string;
  metaDescription: string;
  // Add other properties if there are any
}

const Detail = () => {
  const searchParams = useSearchParams();
  const [blogsDetails, setBlogsDetails] = useState([]);
  const [blogDetail, setBlogDetail] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

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

  const fetchColouringDetails = async (id: any) => {
    try {
      const response = await GetBlog({ id });
      if (response.statusCode === 200) {
        setBlogsDetails(response.data.items);
        setBlogDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false once fetch is complete
    }
  };

  useEffect(() => {
    const id = pathname.split("/").pop();
    fetchColouringDetails(id);
  }, [pathname]);

  return (
    <div>
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
                      src="/images/Vector.png"
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

      <div className="kids-breadcrumb container pb-4  ">
              <Link href="/">Home</Link> <img alt="" src="/images/brd.svg" />
              <a className="active" href="/activities">
                Activites
              </a>
            </div>


      {/* Your other JSX content */}
      <div className="craft paper">
        <div className="craft-slider">
          <div className="container">
            {loading ? (
              <p>Loading...</p>
            ) : blogDetail ? (
              <div>
                <h1>{blogDetail.metaTitle}</h1>
                <div className="crausel">
                  <div className="row">
                    <div className="col">
                      <div className="slide-bg">
                        <div className="slide ">
                          <h2>
                            {blogDetail.metaTitle}
                            <img
                              alt=""
                              className="p-one"
                              src="/images/Frame.svg"
                            />
                            <img
                              alt=""
                              className="p-two"
                              src="/images/circles.svg"
                            />
                          </h2>
                          <span className="p-three-top">
                            <img alt="" src="/images/p3.svg" />
                          </span>
                          <p>{blogDetail.shortDescription}</p>
                          <div className="d-flex justify-content-center">
                            <img
                            className="w-75"
                              alt=""
                              src={blogDetail.fullFileUrl}
                              // style={{ height: "350px", width: "500px" }}
                            />
                          </div>
                          <br />
                          <div
                            className="d-flex justify-content-center flex-column mb-4"
                            dangerouslySetInnerHTML={{
                              __html: blogDetail.metaDescription,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="p-bottom">
                        <img
                          alt=""
                          className="p-top"
                          src="/images/seasonal-left.svg"
                        />
                        <img
                          alt=""
                          className="p-top right"
                          src="/images/p-seven.svg"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img
                        alt=""
                        className="p-right"
                        src="/images/paper-red.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>No details available.</p>
            )}
          </div>
        </div>
      </div>
      {/* Your other JSX content */}
    </div>
  );
};

export default Detail;
