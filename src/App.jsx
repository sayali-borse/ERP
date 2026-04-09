import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<p>404 page is not found</p>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
