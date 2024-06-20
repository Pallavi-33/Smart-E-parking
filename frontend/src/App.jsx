import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Enter from "./Pages/Enter";
import Exit from "./Pages/Exit";
import NotAvailable from "./Pages/Notavail";
import NotCarDetail from "./Pages/NotCarDetail";
import Thank from "./components/Thank";
import Payment from "./components/Payment";
import { Contact } from "./components/contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/enter" element={<Enter />} />
      <Route path="/exit" element={<Exit />} />
      <Route path="/waitlist" element={<NotAvailable/>}/>
      <Route path="/api/check-car" element={<NotCarDetail/>}/>
      <Route path="/thank-you" element={<Thank/>}/>
      <Route path="/payment" element={<Payment/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

export default App;
