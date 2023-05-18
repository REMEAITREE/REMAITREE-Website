import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar"
import background from "./../../Assets/pictures/doctor.jpg";
import background2 from "./../../Assets/icons/Path.png";
import background3 from "./../../Assets/icons/142-Artificial-Intelligence.png";
import background4 from "./../../Assets/icons/Group 6.png";
import background5 from "./../../Assets/icons/Group 5.png";
import logo1 from "./../../assets/icons/dizzy-solid-svgrepo-com.png";
import logo2 from "./../../Assets/icons/medicines-medicine-svgrepo-com.png";
import logo3 from "./../../Assets/icons/research-svgrepo-com.png";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="home">
        <section className="section1">
          <div className="i" >

            <div className="i-left " style={{ backgroundImage: `url(${background})` }} >
              <Navbar />
            </div>

            <div className="basic-card1">
              <div className="card-container">

                <h1>REMEAITREE</h1>
                <hr />
                <h3>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We seamlessly blend cutting-edge artificial intelligence with the art of medicine to revolutionize your healthcare experience. Our advanced AI technology, backed by years of research and expertise, empowers you to make informed decisions about your well-being, ensuring personalized care and optimal outcomes.
                </h3>

                <br />
                
              </div>
            </div>




          </div>
        </section>
        <div className="basic-card2">

        </div>
        {/* ----------------------------------------------------- */}
        <section className="section2">
          <div className="background3">
            <img className="img3" src={background2} alt="path14" />
          </div>
          <div className="background2">
            <img className="img2" src={background3} alt="path14" />
          </div>
          <div className="section-2">
            <h1>Smart AI Model</h1>
            <br />
            <h3> Having some problems with your daily task, our AI bot is designed to know what your are going through</h3>
          </div>

        </section>

        {/* -------------------------------------------------------------------- */}
        <section>
          <div className="section3">
            <div className="overlap-container1">
              {/* <div className="overlap1">
        
        </div> */}
              <div className="overlap2">

                <div className="content">
                  <div className="img-box">
                    <img className="imgBx" src={logo1} alt="dizziness" />
                  </div>
                  <h3>Feeling Dizzy</h3>
                  <p>Ask the AI bot anything anytime for normal, or daily health check.</p>
                  <button>submit</button>
                </div>
              </div>
            </div>
            <div>
              <img src={background5} alt="backgroun5" />
            </div>
            <div className="overlap-container2">
              {/* <div className="overlap1">
        
        </div> */}
              <div className="overlap2">
                <div className="content">
                  <div className="img-box">
                    <img className="imgBx" src={logo3} alt="medicine" />
                  </div>

                  <h3>Predicting Disease</h3>
                  <p>Ask the AI bot anything anytime for normal, or daily health check.</p>
                  <button>submit</button>
                </div>

              </div>
            </div>
            <div>
              <img src={background5} alt="backgroun5" />
            </div>
            <div className="overlap-container3">
              {/* <div className="overlap1">
        
        </div> */}
              <div className="overlap2">
                <div className="content">
                  <div className="img-box">
                    <img className="imgBx2" src={logo2} alt="research" />
                  </div>

                  <h3>Prescribing Medicine</h3>

                  <p>Ask the AI bot anything anytime for normal, or daily health check.</p>

                  <button>submit</button>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------- */}

        </section>
        <section className="section-4">
          <div className="group6">
            <img className="background4" src={background4} alt="background 4" />
          </div>

          <div className="section4">

            <br />
            <h3> Having some problems woth your daily task, our AI bot is designed to know what your are going through or get any docter recommended near your location</h3>
            <br />
            <button>Chat Now</button>
          </div>

        </section>
      </div>
    </>
  );
}
