import React from "react";

const Blog = () => {
  return (
    <div class="rn-blog-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--50 align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3
              class="title mb--0"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Our Recent Blog
            </h3>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div
              class="view-more-btn text-start text-sm-end"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <a class="btn-transparent" href="#">
                VIEW ALL
              </a>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div
            class="col-xl-3 col-lg-4 col-md-6 col-12"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="150"
          >
            <div
              class="rn-blog"
              data-toggle="modal"
              data-target="#exampleModalCenters"
            >
              <div class="inner">
                <div class="thumbnail">
                  <a href="#">
                    <img
                      src="/blog/blog-02.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div class="content">
                  <div class="category-info">
                    <div class="category-list">
                      <a href="#">Development</a>
                    </div>
                    <div class="meta">
                      <span>
                        {/* <i class="feather-clock"></i>  */}2 hour read
                      </span>
                      
                    </div>
                  </div>
                  <h4 class="title">
                    <a>
                      We have the best Development team
                      {" "}
                      {/* <i class="feather-arrow-up-right"></i> */}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-lg-4 col-md-6 col-12"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div
              class="rn-blog"
              data-toggle="modal"
              data-target="#exampleModalCenters"
            >
              <div class="inner">
                <div class="thumbnail">
                  <a>
                    <img
                      src="/blog/blog-03.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div class="content">
                  <div class="category-info">
                    <div class="category-list">
                      <a href="#">Design</a>
                    </div>
                    <div class="meta">
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h4 class="title">
                    <a >
                      Homyz is a platform with topnotch design
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-lg-4 col-md-6 col-12"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="250"
          >
            <div
              class="rn-blog"
              data-toggle="modal"
              data-target="#exampleModalCenters"
            >
              <div class="inner">
                <div class="thumbnail">
                  <a href="#">
                    <img
                      src="/blog/blog-04.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div class="content">
                  <div class="category-info">
                    <div class="category-list">
                      <a>Marketing</a>
                    
                    </div>
                    <div class="meta">
                      <span>10 min read</span>
                    </div>
                  </div>
                  <h4 class="title">
                    <a>
                    Our Marketing team are always active
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-lg-4 col-md-6 col-12"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="300"
          >
            <div
              class="rn-blog"
              data-toggle="modal"
              data-target="#exampleModalCenters"
            >
              <div class="inner">
                <div class="thumbnail">
                  <a>
                    <img
                      src="/blog/blog-05.jpg"
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div class="content">
                  <div class="category-info">
                    <div class="category-list">
                      <a href="#">Homes</a>
                    </div>
                    <div class="meta">
                      <span>1 min read</span>
                    </div>
                  </div>
                  <h4 class="title">
                    <a>
                      Homyz is the best place to get your desired house
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
