import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

//Komponenti i navbarit dhe pjeses se menuse
export function NavBar({ totalItems }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav id="home">
        <a href="#home">Your Fragrances</a>

        <FontAwesomeIcon icon={faShoppingCart} id="cart-icon" />
        <p>{totalItems}</p>
      </nav>

      <hr />

      <div id="mobile">
        <FontAwesomeIcon
          icon={clicked ? faTimes : faBars}
          id="bar"
          onClick={() => setClicked(!clicked)}
        />
      </div>
      {clicked && (
        <div id="navbar">
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#shoppingcard">Shopping Card</a>
            </li>
            <li>
              <a href="#filter2">Filter</a>
            </li>
            <li>
              <a href="#container2">All Products</a>
            </li>
            <li>
              <a href="#footer1">Footer</a>
            </li>
            <li>
              <a href="#footer1">Terms&Conditions</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
