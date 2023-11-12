import React from "react";
import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Reference from "./unrelated/Reference";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Download from "./pages/Download";
const App = () => {
  return (
    <>
     <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/reference" element={<Reference />}></Route> */}
        <Route path="/download" element={<Download />}></Route>
      </Routes>
     </LocalizationProvider>
    </>
  );
};

export default App;
