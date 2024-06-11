"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link"; // Assuming you're using Next.js
import { GetAllAge, GetBlog } from "@/app/services/colouring";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface BlogDetail {
  metaTitle: string;
  shortDescription: string;
  fullFileUrl: string;
  metaDescription: string;
  imageFullFileUrl: string;
}

const Detail = () => {
  const searchParams = useSearchParams();
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
        setBlogDetail(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false once fetch is complete
    }
  };

  const downloadImage = (url: any) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "image.jpg"; // Set the image file name
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(() => alert("Failed to download image."));
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
      {/* Your other JSX content */}
      <div className="craft paper">
        <div className="craft-slider">
          <div className="container">
            {loading ? (
              <p>Loading...</p>
            ) : blogDetail ? (
              <div className="">
                <h1>{blogDetail.metaTitle}</h1>
                <div className="crausel">
                  <div className="row">
                    <div className="col-md-9 filter">
                      <div className="slide-bg">
                        <div className="slide">
                          <h2>
                            {blogDetail.metaTitle}
                            <div >
                            <img className="w-50" src={blogDetail.fullFileUrl} alt="Dynamic Image" />

                            </div>
                          


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
                          <p className="mb-5">{blogDetail.shortDescription}</p>

                          <br />
                          <div
                            dangerouslySetInnerHTML={{
                              __html: blogDetail.metaDescription,
                            }}
                          ></div>
                       
                       <div className="slide-btn">
                            <Link href="">
                              <button
                                onClick={() =>
                                  downloadImage(blogDetail.imageFullFileUrl)
                                }
                              >
                                Download
                              </button>{" "}
                            </Link>
                            <img
                              alt=""
                              className="d-p"
                              src="/images/p-four.svg"
                            />
                            <img
                              alt=""
                              className="p-five"
                              src="/images/preview.svg"
                            />
                          </div>
                       
                       
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
