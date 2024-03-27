import React, { useState } from "react";
import "./App.css";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "CALONE 17",
      content: "245 g / 8.6 oz classic candle",
      price: 17000,
      image: product1,
    },
    {
      id: 1,
      title: "THÉ NOIR 29",
      content: "50 ml / 1.7 fl oz eau de parfum",
      price: 22000,
      image: product2,
    },
    {
      id: 2,
      title: "SHOWER GEL",
      content: "250 ml / 8.5 fl oz hinoki",
      price: 11000,
      image: product3,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  return (
    <div className="App">
      <div className="main-bg">
        <h2>LE LABO</h2>
      </div>
      <div className="products">
        <h2>상품 목록</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <p>{product.content}</p>
              <div className="button_box">
                <span>{product.price}원</span>
                <button onClick={() => addToCart(product)}>
                  장바구니에 추가
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>장바구니</h2>
        <div className="total_box">
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - {item.price}원
                <button onClick={() => removeFromCart(index)}>삭제</button>
              </li>
            ))}
          </ul>
          <p>총액: {calculateTotal()}원</p>
        </div>
      </div>
    </div>
  );
}

export default App;
