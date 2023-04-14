import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import Particle from "../components/Particles";
import Footer from "../components/Footer";

import Banner from "../components/Banner";
import { useState } from "react";
import vr_1 from "../assests/vr_01.jpg";
import bg1 from "../assests/marbel.jpg";
import { Slider_left, Slider_right } from "../components/Slide";
import Navbar from "../components/Navbar";
import brand from "../assests/brand_eng.png";
import sust from "../assests/sustainability-01.png";
import exp from "../assests/Exp.png";

const Solutions = () => {
  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <div className="w-screen">
      <MouseParallaxContainer
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <MouseParallaxChild>
          <Particle />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <div className="contianer w-screen">
        <div className="section w-screen ">
          {/* <Navbar /> */}
          {show && <Navbar />}
          <Banner
            title="Research + Process + Experience"
            img={bg1}
            subtitle="We ensure businesses reach their full potential by building solutions around their<br/> business problems using data and intuitive design."
          />
        </div>
        <div onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
          <div className="section h-screen w-screen">
            <Slider_left
              title="BRAND EXPERIENCE TOUR - WIPRO/Bangalore<br/>
            "
              img={brand}
              content="
            <br/>
            
            <strong>Experiences Delivered</strong>
            
            <br/>+  Interactive Projection<br/>
                 +  Virtual Reality<br/>
                 +  Content Design<br/>
            <br/><br/>
            Wipro limited is a leading global information technology, consulting and <br/>business process
            services company, headquartered in Bengaluru, India. They changed their brand identity after 19
            years.
            <br/><br/>
            To drive in the new identity to their employees,they approached us to <br/>create a tour across
             their campuses where employees could interactive with projection and VR to understand the new 
             direction the company is taking.

            "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="SUSTAINABILITY BY SWEDEN SHOWROOM IN INDIA- Business Sweden Delhi"
              img={sust}
              content="
            <br/><br/>
            <strong>Experiences Delivered</strong>
            <br/>+  Experience Center Design
            <br/>+  Custom Hardware
            <br/>+  Multi Touch Table
            <br/>+  Holography
            <br/>+  Augmented Reality
            <br/>+  Film
            <br/>+  Interactive Wall
            <br/>+  Real Time Data Integration

            <br/><br/>Business Sweden‘s purpose is to help Swedish companies grow global sales and international companies invest and expand in Sweden. <br/> They partnered with the Sweden Embassy, in India, and wanted to create an interactive  space in Delhi to promote  their purpose.
             <br/>We designed and delivered a state of the art interactive showroom using multiple technologies.

            "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="EXPERIENCE CENTRE- Baxter Bengaluru "
              img={exp}
              content="
            <br/><br/>
            <strong>Experiences Delivered</strong>
            <br/>+  MTT Table
            <br/>+  Projection Mapping
            <br/>+  VR Experience
            <br/>+  Films
            <br/><br/>Instilling confidence in a visitor while illustrating Baxter‘s larger perspective<br/> and evoking trust and inspiration through the experience.
             An impactful narrative that is engaging for users."
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="EXPERIENCE CENTRE - RMZ Bengaluru"
              img={vr_1}
              content="
            <br/><br/>
            <strong>Experiences Delivered</strong>
            <br/>+   MTT Table
            



            <br/>+  iPad controlled 3D
            <br/>+  City Tour

            <br/>+  Interactive Displays
            <br/><br/>A Multi−Technology Experience centre for Real Estates. "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="EXPERIENCE CENTRE - RMZ Bengaluru"
              img={vr_1}
              content="
            <br/><br/>
            <strong>Experiences Delivered</strong>
            <br/>+  б x 4 Holobox
            <br/>+  iPad controlled Sliding Displays
            <br/>+ 	Digital Storyteller
             <br/>+  Interactive Displays
            <br/><br/>
            Morph partnered with TCL  in creating experiences that can engage, interact <br/>and inform their customers and clients.
 
This touchpoint while establishing the context in depth, will instil<br/> a sense of confidence & pride
amongst the visitors along with providing<br/> a source of inspiration through the future outlook.

            "
            />
          </div>
          <div className="section ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
