import { React } from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import styled from "styled-components";
import logo from "../assests/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="relative  w-screen bg-black block h-screen pt-[30px]">
        <div
          className=" w-screen  mx-0
      pl-[190px] pr-[90px]   text-left mx-[60px]  my-[300px] "
        >
          <h1 className=" text-6xl text-white font-extrabold">
            A first step to transform with us!
          </h1>

          <div>
            <div className="w-[700px]  flex justify-between"></div>
          </div>

          <div className="mt-[60px] w-[1000px] flex text-white justify-between">
            <img className="mt-[-110px]" src={logo} />
            <ul>
              <li className="font-bold">General </li>
              <li>About</li>
              <li> Works </li>
              <li>Careers</li>
              <li> Contact </li>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <li className="font-bold"> Services </li>
              <li>Augmented Reality</li>
              <li>Virtual Reality</li>
              <li>Holography</li>
              <li>Phygital</li>
              <li>Films</li>
              <li>Apps</li>
            </ul>
            <ul>
              <li className="font-bold"> Spatial </li>
              <li>Brand and Customer</li>
              <li>Events</li>
              <li>Training</li>
              <li>Data Visualization</li>
              <li>Content Creation</li>
              <li>Solutions</li>
            </ul>
            <ul className="flex">
              <li>
                <i className="fa-brands mr-[10px] fa-facebook fa-xl "></i>
              </li>
              <li>
                <i className="fa-brands  mr-[10px] fa-youtube fa-xl"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter fa-xl"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
    border-color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
      color: white;
    }
  }
`;
