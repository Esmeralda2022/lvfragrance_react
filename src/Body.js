import { useEffect, useState } from "react";
import { productsData1 } from "./productsData1";
import { Product } from "./Product";
import { ShoppingCart } from "./ShoppingCart";
import img1 from "./img1.webp";

// ...

export function Body({ setTotalItems }) {
  const prdList = productsData1;
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(prdList);
  const [filter, setFilter] = useState(""); // State per  filtering
  const [sortBy, setSortBy] = useState("price"); // State per  sorting

  //UseEffect ben te mundur qe filteredProducts state te behet update a herë që ndryshojnë vlerat e filtrit ose sortBy.
  useEffect(() => {
    // Filtron  produktet ne baze te emrit dhe size, te cilat kontrollohen te lista prdList
    const filtered = prdList.filter(
      (product) =>
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.sizes.toLowerCase().includes(filter.toLowerCase())
    );

    /* rendisim produktet qe jan filtruar(per te bere te mundur edhe  renditjen e produkteve te filtruara ,
      te cilat mund te jen me shume se 2 p.sh) bazuar ne sortBy value */
    const sorted = [...filtered];
    if (sortBy === "price") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    }

    // Update the state with filtered and sorted products
    setFilteredProducts(sorted);
  }, [filter, sortBy]);

  //kjo Metod findIndex kthen indexin e elementit te pare qe ploteson kushtin e dhene, nese nk gjen asnje element , kthen -1
  function addToCart(product) {
    //gjejme indeksin e artikullit ekzistues në arrayn e shoppingCart, sherben per te perditesuar quantity e produktt ne  shopping Cart
    const existingItemIndex = shoppingCart.findIndex(
      (item) => item.name === product.name
    );

    if (existingItemIndex !== -1) {
      // nese artikulli eshte tashme, perditesojme shporten
      //updatedCart eshte array e kopjuar e prevCart
      //...updatedCart[existingItemIndex] krijon nje kopje te elementit egzistues me indekx specifik tek updatedCart array,
      //dhe quantity e produktit qe ndodhet ne shoppingCard rritet me 1
      setShoppingCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };

        const totalItems = calculateTotalItems(updatedCart);

        setTotalItems(totalItems);
        return updatedCart;
      });
    } else {
      // Nese elementi nuk egziston, e shtojme ne shporte me saisine 1
      setShoppingCart((prevCart) => {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        const totalItems = calculateTotalItems(updatedCart);

        setTotalItems(totalItems);

        return updatedCart;
      });
    }
  }
  /* funksoni me poshte ben te mundur qe te keminr total te produkteve ne shporte, dhe perdoret metoda e reduce,
  e cila kalon ne cdo item per te mbledhur nr total te tyre :
  acc is the accumulator that keeps track of the running total.
  (item.quantity || 0) ben te mundur qe nese item.quantity eshte undefined ose false te kthej by default vleren 0,
   dhe reduce mer si vlere fillestare 0*/
  function calculateTotalItems(cart) {
    return cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
  }

  return (
    <div>
      <div className="filter-controls" id="filter2">
        {/* onChange event handler qe kap vleren aktuale te inputit dhe me an te setFilter perditeson filter state */}
        <input
          type="text"
          placeholder="Filter by name or size"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        {/* onChange event handler qe merr vleren value="price" ose value="price-desc",  dhe me an te setFilter perditeson SortBy state */}
        <div>
          <label>Sort By</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
      </div>
      <div className="imgPresenting">
        <img src={img1} alt="the main foto" />
      </div>

      <div className="container " id="container2">
        {/* per cdo produkte ne listen filteredProducts behet render
            komponenti Product i cili mban ghith infot e produktit */}

        {filteredProducts.map((product) => (
          <Product
            key={product.name}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}

        {/* Shopping Cart , shoppingCart, eshte array bosh qe kemi , qe kei deklaruar me useState i cili mbushet,
            perditesohet me ane te setShoppingCart   */}
        <ShoppingCart items={shoppingCart} setShoppingCart={setShoppingCart} />
      </div>
    </div>
  );
}
