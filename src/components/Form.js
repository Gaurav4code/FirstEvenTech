import { React } from "react";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import styled from "styled-components";
import "./Footer.css";

const Form = () => {
  // const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");
  return (
    <>
      <div className="relative bg-black block border h-screen border-sky-500">
        <div
          className="width-100%  z-2
           overflow-hidden
           object-cover
      "
        ></div>
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: -100, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className=" absolute w-full top-[440px] h-60  flex justify-center  
          "
        >
          <div className=" w-[1000px] text-left absolute">
            <h1 className=" text-6xl text-white font-extrabold">
              {" "}
              Request a callback
            </h1>
            <h4 className="text-[18px] text-white mt-3">
              We blend your stories with future tech, to create engaging and
              immersive
              <br /> experiences.
            </h4>
            <div className="main-con">
              <h1 className="text-white">Name</h1>
              {/* <input
                className="bg-black h-10 border-b-2 border-yellow-300"
                type="text"
              />
              <h1 className="text-white">Email</h1>
              <input
                className="bg-black h-10 border-b-2 border-yellow-300"
                type="text"
              />
              <h1 className="text-white ">Number</h1>
              <input
                className="bg-black h-10 border-b-2 border-yellow-300"
                type="text"
              /> */}
              <motion.TextField
                whileHover={{
                  backgroundColor: "#FFFFFF"
                }}
                className="text-white  border border-gray-700 bg-red-300"
                label="Name"
              />
              <TextField className="bg-transparent" label="Name" />
              <TextField
                label="Name"
                variant="standard"
                color="warning"
                //focused
                // InputLabelProps={{
                //   className:input__label
                // }}
              />
              <WhiteBorderTextField
                //variant="standard"
                //className="bg-gray-700 text-white"
                label="Name1"
                //focused
              />
              <TextField
                sx={{
                  "& .MuiFormLabel-root": {
                    color: "primary.main"
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "secondary.main"
                  }
                }}
                id="standard-basic"
                label="Filled"
                variant="filled"
                // color="#fff"
                placeholder="SX"
                // focused
                color=""
              />
              {/* <TextField
                sx={{
                  "& .MuiFormLabel-root": {
                    color: "success.main"
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "success.main"
                  }
                }}
                id="standard-basic"
                label="Filled"
                variant="filled"
                placeholder="SX"
              />
            <input type='text' label='email'  className='bg-red-100 border border-yellow-500 border-radius-5'/>
            <Input /> */}

              <motion.button
                className="fill  w-30 ml-30 text-white z-3
             
          "
                whileHover={{
                  backgroundColor: "#FFFFFF"
                }}
                // initial={{ x: 200, opacity: 0 }}
                // animate={{ x: 0, opacity: 1 }}
                // transition={{ delay: 1.6, type: "spring", stiffness: 30 }}
              >
                Request a callback
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Form;

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
