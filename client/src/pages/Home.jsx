import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import carousel1 from "../assets/vegan-jerky.avif";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Web Design UX/UI",
      desc: "Create stunning and user-friendly websites with our expert web design UX/UI services. From intuitive layouts to seamless navigation, we ensure your online presence leaves a lasting impression.",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/093d37143583403.627cff7c8373b.jpg",
    },
    {
      id: 2,
      title: "Packaging Design",
      desc: "Transform your products into eye-catching masterpieces with our innovative packaging design solutions. From concept to creation, we craft packaging that not only protects but also captivates your target audience.",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/df0c00123835827.614d3b3e4e994.jpg",
    },
    {
      id: 3,
      title: "Logo Design",
      desc: "Establish your brand identity with our custom logo design services. We create logos that resonate with your audience and leave a lasting impression, helping you stand out in a crowded market.",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b56c24195264535.6615cf485b48a.jpg",
    },
    {
      id: 4,
      title: "Interior Design",
      desc: "Elevate your space with our innovative interior design solutions. From residential to commercial projects, we blend functionality with aesthetics to create environments that inspire and delight.",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/844bcc193172503.65e76c1ba5a5e.jpg",
    },
    {
      id: 5,
      title: "Product Design",
      desc: "Bring your ideas to life with our product design expertise. From concept sketches to prototyping, we turn your vision into tangible products that stand out in the market and resonate with your audience.",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/65f746193589531.65eec3c947132.png",
    }
  ];
  
  const scrollToCarousel = () => {
    const carouselElement = document.querySelector('.carousel');
    carouselElement.scrollIntoView({ behavior: 'smooth' });
  };
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  return (
    <div className="home">
        <div className="design-section">
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/61dbd9190764067.65faeea6e4c5a.jpg" alt="Design Example 1" />
          </div>
          <div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4dc5db194510451.65fd0ded038df.png" alt="Design Example 2" />
          </div>
          <div>
            <img src="https://payload.cargocollective.com/1/2/81943/1068541/splash1_1000.jpg" alt="Design Example 3" />
          </div>
        </Slider>
      </div>
      <div className="content">
        <h2>Grow with great design</h2>
        <p>
          No matter what your business needs, we can connect you with a creative expert to make your business look and feel professional. Because good design makes great business.
        </p>
        <button class="button-18" role="button">Get Strated</button>
        <div className="popular-services">
          <span>Popular:</span>
          <ul>
            <li>Logo design</li>
            <li>Website</li>
            <li>Branding</li>
          </ul>
        </div>
      </div>
    </div>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button onClick={() => scrollToCarousel()}>Get Yours</button>
            </div>
          </div>
        ))}
      </div>
        <div className="responsiveSection">
      <img src=" https://start-image-proxy.imgix.net/https%3A%2F%2F99designs-start-static.imgix.net%2Fhomepage%2Fcategories-cta-banner.png?auto=format&ch=Width%2CDPR&dpr=1&s=116dda1cd86ae74b5c0bd15a604af415" alt="Decorative" />
      <div className="sectionContent">
        <h2>Ready to level up your look with a great design?</h2>
        <button className="browseButton">Browse design categories</button>
      </div>
    </div>
    </div>
  );
};

export default Home;
