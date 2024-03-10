import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaHistory,
  FaClock,
  FaThumbsUp,
  FaVideo,
} from "react-icons/fa";

import "../style/Home.css";

function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is 768px or below
      if (window.innerWidth <= 768) {
        setShowMenu(false); // Close sidebar if screen width is 768px or below
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  ////////////////////////////////////// Video Play Dimanicaly ////////////////

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const playImgRef = useRef(null);
  const posterImgRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;
    const playImg = playImgRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      playImg.style.display = "none";
    } else {
      video.pause();
      setIsPlaying(false);
      playImg.style.display = "block"; // Show play image when paused
    }
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    const playImg = playImgRef.current;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      playImg.style.display = "block"; // Show play image when paused
    } else {
      video.play();
      setIsPlaying(true);
      playImg.style.display = "none";
    }
  };

  const handleVideoEnd = () => {
    const video = videoRef.current;
    const playImg = playImgRef.current;

    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
    playImg.style.display = "block"; // Show play image when video ends
  };

  const handleVideoPause = () => {
    const video = videoRef.current;
    const playImg = playImgRef.current;

    setIsPlaying(false);
    playImg.style.display = "block"; // Show play image when video is paused
  };

  /////////////////////////////////////////////// play video 2 /////////////////////

  const [isPlaying2, setIsPlaying2] = useState(false);
  const videoRef2 = useRef(null);
  const playImgRef2 = useRef(null);
  const posterImgRef2 = useRef(null);

  const handlePlay2 = () => {
    const video2 = videoRef2.current;
    const playImg2 = playImgRef2.current;

    if (video2.paused) {
      video2.play();
      setIsPlaying2(true);
      playImg2.style.display = "none";
    } else {
      video2.pause();
      setIsPlaying2(false);
      playImg2.style.display = "block"; // Show play image when paused
    }
  };

  const handleVideoClick2 = () => {
    const video2 = videoRef2.current;
    const playImg2 = playImgRef2.current;

    if (isPlaying2) {
      video2.pause();
      setIsPlaying2(false);
      playImg2.style.display = "block"; // Show play image when paused
    } else {
      video2.play();
      setIsPlaying2(true);
      playImg2.style.display = "none";
    }
  };

  const handleVideoEnd2 = () => {
    const video2 = videoRef2.current;
    const playImg2 = playImgRef2.current;

    video2.pause();
    video2.currentTime = 0;
    setIsPlaying2(false);
    playImg2.style.display = "block"; // Show play image when video ends
  };

  const handleVideoPause2 = () => {
    const video2 = videoRef2.current;
    const playImg2 = playImgRef2.current;

    setIsPlaying(false);
    playImg2.style.display = "block"; // Show play image when video is paused
  };

  return (
    <div className="container_div">
      <div className="header_div">
        <header>
          <nav>
            <div>
              <img src="../public/Group-1758.svg" alt="" />
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Service Us</a>
                </li>
                <li>
                  <a href="#">Why Us</a>
                </li>
                <li>
                  <a href="#">Our Goals</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <div className="toggle-button" onClick={toggleMenu}>
                <span>
                  <FaBars size={25} />
                </span>
              </div>
            </div>
            {/* ///////////////////// SideBar ////////////////////////// */}
            <div className={`sidebar ${showMenu ? "active" : ""}`}>
              <div className="sidebar-content">
                <button className="close-button" onClick={closeMenu}>
                  <span>
                    <FaTimes size={25} />
                  </span>
                </button>
                <div className="sidebar-logo">
                  <img src="../public/Group-1758.svg" alt="" />
                  <div className="sidebar_link">
                    <div>
                      <div>Home</div>
                      <div>Service Us</div>
                      <div>Why Us</div>
                      <div>Our Goals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /////////////////////////////////////////////// */}
          </nav>
          <main>
            <div>
              <div>
                <h2>We create Learning Experience with excellent technology</h2>
                <p>
                  unlimited access to 100+ world-class course, handle on project
                  and job ready certificate programs-all included in your
                  subscription
                </p>
              </div>
              <div className="book_explore">
                <div>
                  <a href="#">
                    <img src="../public/Btg-1.svg" alt="Book Demo Class" />
                  </a>
                </div>
                <div>
                  <span>
                    <a href="#">
                      Explore More
                      <img
                        src="../public/arrow_right_alt-24px.svg"
                        alt="right->"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  id="play_img"
                  ref={playImgRef2}
                  src="../public/next.svg"
                  alt="play"
                  onClick={handlePlay2}
                />
                <video
                  ref={videoRef2}
                  id="videoPlayer"
                  poster="../public//Group 1760.png"
                  onClick={handleVideoClick2}
                  onEnded={handleVideoEnd2}
                  onPause={handleVideoPause2}
                >
                  <source
                    src="../public/dummy_Video.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </div>
          </main>
        </header>
        <div className="sub_header_div">
          <img
            src="../public/woman-in-blue-crew-neck-shirt-using-black-laptop-computer-3994051@2x.png"
            alt="woman-in-blue-crew-neck-shirt-using-black-laptop-computer-3994051@2x"
          />
        </div>
      </div>
      <div className="typeOf_div">
        <div>
          <h2>We Provide you Various Kind of Learning modules for you</h2>
          <p>
            It is A long Established fact that a Render will be Distracted by
            the readable content of a page when looking at its layout .The point
            of using lorem
          </p>
        </div>
        <div>
          <div>
            <div className="module_img">
              <img src="../public/smartphone (1).svg" alt="Image" />
            </div>
            <div>
              <h3>Learning Anything</h3>
            </div>
            <div>
              <p>
                It is A long Established fact that a Render will be Distracted
                by the readable
              </p>
            </div>
          </div>
          <div>
            <div className="module_img">
              <img src="../public/Dashboard.svg" alt="Image" />
            </div>
            <div>
              <h3>Flexible Learning </h3>
            </div>
            <div>
              <p>
                It is A long Established fact that a Render will be Distracted
                by the readable content of a page when
              </p>
            </div>
          </div>
          <div>
            <div className="module_img">
              <img src="../public/layout.svg" alt="Image" />
            </div>
            <div>
              <h3>Expert Connect</h3>
            </div>
            <div>
              <p>
                It is A long Established fact that a Render will be Distracted
                by the readable
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why_us">
        <div>
          <h2>Why Us</h2>
          <p>
            at learning exp. we are committed to providing you with a superior
            learning experience that empowers you to achieve your goals. join us
            today and embark on a journey of discovery, growth and success.
          </p>
        </div>
        <div>
          <div>
            <img
              id="play_img"
              ref={playImgRef}
              src="../public/next.svg"
              alt="play"
              onClick={handlePlay}
            />
            <video
              ref={videoRef}
              id="videoPlayer"
              poster="../public//Group 1760.png"
              onClick={handleVideoClick}
              onEnded={handleVideoEnd}
              onPause={handleVideoPause}
            >
              <source src="../public/dummy_Video.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div>
            <h2>
              Crafting Your Dream Career: Building a Path you love with Us
            </h2>
            <p>
              at learning exp. we are committed to providing you with a superior
              learning experience that empowers you to achieve your goals. join
              us today and embark on a journey of discovery, growth and success.
            </p>
            <p>
              our platform design to empower learners like you to excel in
              Today's oynamic world.
            </p>
            <a href="#">
              <img src="../public/btg.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="sucess_div">
        <div>
          <h2>
            we completed 1200+ certification program successfully & Counting
          </h2>
          <p>
            at learning exp. we are committed to providing you with a superior
            learning experience that empowers you to achieve your goals. join us
            today and embark on a journey of discovery, growth and success.
          </p>
        </div>
        <div className="sucessNumber">
          <div>
            <div>
              <img src="../public/assignment_turned_in-24px.svg" alt="" />
              <div>
                <p>100+</p>
                batch Completed
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="../public/assignment_turned_in-24px.svg" alt="" />
              <div>
                <p>50+</p>
                active batches
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="../public/supervised_user_circle-24px (2)-1.svg"
                alt=""
              />
              <div>
                <p>10000+</p>
                student satisfied
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="../public/supervised_user_circle-24px (2)-1.svg"
                alt=""
              />
              <div>
                <p>10+</p>
                course module
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback_div">
        <div className="sub_Feedback_1">
          <div>
            <h2>Our students feedback</h2>
            <p>
              {" "}
              at learning exp. we are committed to providing you with a superior
              learning experience that empowers you to achieve your goals. join
              us today and embark on a journey of discovery, growth and success.
            </p>
          </div>
          <div className="arro_right_feedback">
            <button>
              {" "}
              Read More
              <img src="../public/arrow_right_alt-24px (1).svg" alt="" />
            </button>
          </div>
        </div>
        <div className="sub_feedback_2">
          <div>
            <img
              src="../public/photography-of-a-guy-wearing-green-shirt-1222271.png"
              alt=""
            />
          </div>
          <div className="star_feedback_parent">
            <div className="star_feedback">
              <div>
                <img src="../public/grade-24px (1)-1.svg" alt="" />
                <img src="../public/grade-24px (1)-1.svg" alt="" />
                <img src="../public/grade-24px (1)-1.svg" alt="" />
                <img src="../public/grade-24px (1)-1.svg" alt="" />
                <img src="../public/grade-24px (1)-1.svg" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                accusantium nihil, officiis doloribus qui repellat. <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
              <p>
                <b>Riad isalm</b>
                <p>
                  Product manager <a href="#">@learning.com</a>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_us">
        <div>
          <div>
            <h4>Contact Us</h4>
            <p>
              There are many variations of passages of lorem ipsum but the
              majority have suffer
            </p>
          </div>
          <div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Email here"
                className="form-control"
              />
              <button className="btn btn-warning">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer_1">
          <div>
            <img src="../public/Group 1.svg" alt="logo" />
            <span> Learning Exp.</span>
          </div>
          <div>
            <ul>
              <li>
                <img src="../public/facebook-logo (1).svg" alt="" />
              </li>
              <li>
                <img src="../public/twitter (1).svg" alt="" />
              </li>
              <li>
                <img src="../public/linkedin-logo (1).svg" alt="" />
              </li>
              <li>
                <img src="../public/XMLID_798_.svg" alt="" />
              </li>
            </ul>
          </div>
          <p className="copt_text">Copy right and design by @learning Exp</p>
        </div>
        <div className="footer_2">
          <div>Links</div>
          <div>
            <ul>
              <li>Home</li>
              <li>Pricing</li>
              <li>Download</li>
              <li>About</li>
              <li>Service</li>
            </ul>
          </div>
        </div>
        <div className="footer_3">
          <div>Support</div>
          <div>
            <ul>
              <li>FAQ</li>
              <li>How it</li>
              <li>Features</li>
              <li>Contact</li>
              <li>Reporting</li>
            </ul>
          </div>
        </div>
        <div className="footer_4">
          <div>Contact Us</div>
          <div>
            <p>
              <a href="#">+81 8364535637</a>
              <a href="#">dummy@gmail.com</a>
              <address>pune city</address>
            </p>
          </div>
          <div className="ter_condition">
            <p>Term of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
