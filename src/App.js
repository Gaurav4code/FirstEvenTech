// import Particle from "./components/Particles";
import Home from "./routes/Home";
import "./styles.css";
import Work from "./routes/Work";
import About from "./routes/About";
import Solutions from "./routes/Solutions";
import Services from "./routes/Services";
//import Particle from "../src/components/Particles"
import Form from "../src/components/Form";
import { Route, BrowserRouter, Switch, Routes } from "react-router-dom";
import { SwitchCamera } from "@mui/icons-material";
import Careers from "./routes/Careers";
import Contacts from "./routes/Contacts";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/work" element={<Work />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}
