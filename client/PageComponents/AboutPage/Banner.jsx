import React from "react";

const Banner = () => {
  return (
    <div class="rn-about-banner-area rn-section-gapTop">
      <div class="container mb--30">
        <div class="row">
          <div class="col-12">
            <h2
              class="title about-title-m"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="150"
            >
              Direct Team. <br />
              For Your Dadicated Dreams
            </h2>
          </div>
        </div>
      </div>
      <div class="container-fluid about-fluidimg ">
        <div class="row">
          <div class="img-wrapper">
            <div class="bg_image--22 bg_image"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <div class="h--100">
              <div class="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                <div class="inner">
                  <h2
                    class="title"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Why We Do This
                  </h2>
                  <p
                    class="about-disc"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                   Most property buyers don’t like to connect with property owners and realtors via agents or other mediators. Traditionally, it was not possible, though; it will become handy with the introduction of Homyz into the real estate business. with Homyz Most property buyers and renters can use smartphones and search for  property owners using their mobile phones instead of connecting with realtors via agents.
                  </p>
                  {/* <a
                    href="blog.html"
                    class="btn btn-primary-alta btn-large sal-animate mt--20"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    See Our Blog
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="rn-about-card transparent-bg">
              <div class="inner">
                <h3
                  class="title"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="150"
                >
                  Helping You <br />
                  to get your desired home.
                </h3>
                <p
                  class="about-disc mb--0"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="150"
                >
                 Most property buyers don’t like to connect with property owners and realtors via agents or other mediators. Traditionally, it was not possible, though; it will become handy with the introduction of Homyz into the real estate business. with Homyz Most property buyers and renters can use smartphones and search for  property owners using their mobile phones instead of connecting with realtors via agents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
