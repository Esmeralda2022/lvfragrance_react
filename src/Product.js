import { useState } from "react";

//komponenti i filter
export function Product({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <div
        className={isHovered ? "hoverBox" : "box"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={product.photoName} alt={product.name} />
        <p>
          {product.name}, {product.sizes}
        </p>
        <h2>{product.price}$</h2>

        {/* nese kalojme me isHovered te produkti do te shfaqet nje button te cilin nese e klikojme do na
            shtoj produktin te  ShoppingCart, funksionin addToCart e kemi te Komponenti Body*/}
        {isHovered && (
          <button className="button" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </li>
  );
}
