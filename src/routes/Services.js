import Banner from "../components/Banner";
import { useState } from "react";
import vr_01 from "../assests/vr_01.jpg";
import vr_02 from "../assests/aug_real.png";
import ia_01 from "../assests/ia_01.jpg";
import proj from "../assests/projection.png";
import phyg from "../assests/phygital_exp.png";
import app from "../assests/applications.png";
import film from "../assests/films.jpg";

import bg1 from "../assests/circle.jpg";
import { Slider_left, Slider_right } from "../components/Slide";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import Particle from "../components/Particles";

const Services = () => {
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
              title="VIRTUAL REALITY<br/>
            "
              img={vr_01}
              content="

            <br/>
            We specialize in crafting compelling and realistic virtual reality content and experiences for a variety of applications. These include 
                   
            <br/>
            Engaging events, 
            <br/>+Interactive brand promotions, 
            <br/>+Product demonstrations, 
            <br/>+Captivating storytelling, 
            <br/>+Entertaining media, 
            <br/>+Engaging gaming experiences, as well as 
            <br/>+Educational and Training programs.

           
            <br/><br/>
            Our expertise extends to creating VR content that can be  <br/>accessed through a range of devices, including mobile phones, Samsung Gear VR, <br/> Oculus Rift, Oculus Quest and Oculus Go, as well as HTC Vive and HTC Vive Pro. <br/> We take pride in delivering top-notch immersive experiences to our clients  <br/>across various platforms.

           <br/> "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="AUGMENTED REALITY"
              img={vr_02}
              content="
            <br/><br/>
            Our company leverages augmented reality as a powerful immersive tool to engage users in a variety of contexts. Whether it's augmenting content through a browser or displaying augmented content live on a stage, AR offers exciting possibilities for enhancing user experiences.
We specialize in creating augmented reality content for a range of applications, including 

<br/>+ Product demonstrations, 
<br/>+ Event engagement, 
<br/>+ Brand promotions, 
<br/>+ Immersive storytelling, 
<br/>+ Gaming, 
<br/>+ Training, and Education.

            

            <br/><br/>Our team has experience delivering AR experiences across a diverse set of devices, including Microsoft Hololens, Smart Glasses, mobile phones and tablets, large LED displays, and even projections. We pride ourselves on delivering high-quality, engaging AR experiences that captivate users and help our clients achieve their goals.

            "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="INTERACTIVE APPLICATIONS
              "
              img={ia_01}
              content="
            <br/><br/>
            we specialize in crafting interactive applications that allow users to engage with content through a variety of modes. We create content that can be accessed through touch, gesture, motion, and voice, providing users with an immersive and engaging experience.

            <br/><br/>
            Our interactive applications take many forms, including touch tables, interactive walls, object recognition tables, and large displays controlled using iPads or other devices. Our goal is to help you tell your brand story effectively and captivate your audience with engaging, interactive experiences.
            
            <br/><br/>
            We take pride in our ability to create custom interactive applications that meet the unique needs of our clients and deliver the desired results. Whether you're looking to showcase products, educate users, or entertain audiences, we have the expertise and experience to create the perfect interactive application for you."
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="PROJECTIONS"
              img={proj}
              content="
            <br/><br/>
            Our company specializes in using projection as a dynamic medium to deliver engaging content. Leveraging our content creation capabilities, we offer a range of projection services that can be used for a variety of applications, including mixed reality, holography, 3D projection mapping, interactive walls/floors, and immersive rooms.

            <br/><br/>
            Our team is well-versed in the latest projection technologies and techniques, allowing us to create captivating and immersive experiences that push the boundaries of what's possible. We take pride in our ability to create custom projection experiences that meet the unique needs of our clients and leave a lasting impression on their audiences.

  
            <br/><br/>
            Whether you're looking to create a unique mixed reality experience, showcase your products with holography, or create an immersive room that transports users to another world, our team has the expertise and experience to deliver a projection experience that meets your needs and exceeds your expectations.
"
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="PHYGITAL EXPERIENCES"
              img={phyg}
              content="
              <br/><br/>
              Phygital Experiences that seamlessly integrate physical and digital spaces. These immersive experiences leverage a range of technologies, including microcontrollers, digital and analog electronics, sensors and actuators, NGC/RFID/Infrared, IoT-enabled experiences, and even brainwave (EEG) technology.

            <br/><br/>
            Our Phygital Experiences provide users with a unique and engaging way to interact with your brand and stories, allowing them to feel a deeper sense of involvement. By blending the physical and digital worlds, we create experiences that are more immersive and memorable than traditional approaches.

            <br/><br/>
            Our team has the expertise and experience to create custom Phygital Experiences that meet your unique needs and exceed your expectations. Whether you're looking to create an interactive exhibit, showcase your products in a new way, or deliver an unforgettable brand experience, we can help you achieve your goals with our cutting-edge Phygital Experiences.



            "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_right
              title="APPLICATIONS AND DIGITAL PRODUCTS"
              img={app}
              content="
              <br/><br/>
              We offer comprehensive digital product design, development, and support services for both web and mobile platforms. Our services include building custom websites, web applications, mobile apps, e-commerce solutions, and web portals, as well as bespoke CMS development and UI/UX design. Our team of developers and partners are experts in creating progressive and responsive web apps, native and hybrid mobile apps, and digital assets that are tailored to meet the unique needs of our clients.
            <br/><br/>
        "
            />
          </div>
          <div className="section h-screen w-screen">
            <Slider_left
              title="FILMS"
              img={film}
              content="
              <br/><br/>
              Our company has been delivering high-quality films for over 13 years for a variety of media, including TV, events, web, and social platforms. Our film styles include live action, VFX, 2D and 3D animation, and motion design.
Our team consists of skilled artists and visualizers who can create compelling content for a range of media and devices, including gaming, holographic displays, and projection mapping. We specialize in rendering content that is optimized for different platforms, ensuring that our clients' content is presented in the best possible way to their target audience

            


            "
            />
          </div>
          <div className="section">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
