import "./App.css";
import "./navbar.css";
import "./footer.css";
import { useState } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Body } from "./Body";

export default function App() {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <div className="App">
      <NavBar totalItems={totalItems} />

      <Body setTotalItems={setTotalItems} />

      <Footer />
    </div>
  );
}
