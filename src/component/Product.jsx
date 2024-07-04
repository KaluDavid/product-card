import React from "react";
import img from "./images/image-product-desktop.jpg";
import cart from "./images/icon-cart.svg";

export function Product() {
  return (
    <>
      <body>
        <main>
          <img src={img} alt="" className="img" />
          <section>
            <h3>Perfume</h3>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <article>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </article>
            
            <div>
              <p className="price1">$149.99</p>
              <p className="price2">$169.99</p>
            </div>

            <button className="btn">
              <img src={cart} alt="cart" /> Add to Cart
            </button>
          </section>
        </main>
      </body>
    </>
  );
}
