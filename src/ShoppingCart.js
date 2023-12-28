export function ShoppingCart({ items = [], setShoppingCart }) {
  // Logarit total price  ,duke iteruar ne cdo produkt te arrayt items
  const total = items.reduce((acc, item) => {
    const price = typeof item.price === "number" ? item.price : 0;
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return acc + price * quantity;
  }, 0);
  // Logarit total quantity   ,duke iteruar ne cdo produkt te arrayt items
  const totalItems = items.reduce((acc, item) => {
    const quantity = typeof item.quantity === "number" ? item.quantity : 0;
    return acc + quantity;
  }, 0);

  /* funksioni updateQuantity perditeson numrin total e nje produkti specific ne ShoppingCart,
   Math.max ben te mundur qe sasia te mos shkoj me posht se 0 ,me poshte se 0 merr vleren 0 */
  function updateQuantity(cart, itemName, quantityChange) {
    return cart.map((item) =>
      item.name === itemName
        ? { ...item, quantity: Math.max(0, item.quantity + quantityChange) }
        : item
    );
  }
  //kete funksionin e perdor per buttonin clear all, qe te kthehet array bosh, te fshihen produktet qe jan te ShoppingCart
  function handleClearAll() {
    setShoppingCart([]);
  }

  return (
    <div id="shoppingcard">
      <h3>Shopping Cart</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img className="shoppingImg" src={item.photoName} alt={item.name} />
            <p>
              {item.name}, {item.sizes}
            </p>
            <h2>{item.price}$</h2>
            <h3>
              {/* Llogarit dhe shfaq koston totale të artikullit (çmimi * sasia).
                    Nëse çmimi ose sasia nuk është numër, shfaqet messazhi "valid Price or Quantity"
                    typeof item.price === "number" kontrollon nese typeof i item.price eshte i barabart me stringun  "number" ,
                    domethene nese jane  numra,  && kontrollon nese price dhe quantity jan te dyja numra */}
              {typeof item.price === "number" &&
              typeof item.quantity === "number"
                ? item.price * item.quantity
                : "Invalid Price or Quantity"}
              $
            </h3>
            <button
              onClick={() =>
                setShoppingCart((prevCart) =>
                  updateQuantity(prevCart, item.name, -1)
                )
              }
            >
              -
            </button>
            <span>{item.quantity || 0}</span>
            <button
              onClick={() =>
                setShoppingCart((prevCart) =>
                  updateQuantity(prevCart, item.name, 1)
                )
              }
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: {total}$</h2>
      <p>Total products {totalItems}</p>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}
