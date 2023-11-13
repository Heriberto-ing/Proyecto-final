import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Card = (props) => {
  const { showOrder, setShowOrder } = props;
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orden #151416</h1>

        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Cant.</h5>
            <h5>Price</h5>
          </div>
        </div>

        <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
          <div className="count-products"></div>
            <div className="container-cart-products-hidden-cart">
              <div className="row-product">
                <div className="cart-product">
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">1</span>
                    <p className="titulo-producto-carrito">Martillos de ebanista</p>
                    <span className="precio-producto-carrito">$8.000</span>
                  </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
               </div>
               <div className="cart-product">
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">2</span>
                    <p className="titulo-producto-carrito">STANLEY No.2 6 PULG</p>
                    <span className="precio-producto-carrito">$4.500</span>
                  </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
               </div>
               <div className="cart-product">
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">1</span>
                    <p className="titulo-producto-carrito">Martillo para carpintería</p>
                    <span className="precio-producto-carrito">$12.000</span>
                  </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
               </div>
               <div className="cart-product">
                  <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">1</span>
                    <p className="titulo-producto-carrito">TALADRO DE ROTACION</p>
                    <span className="precio-producto-carrito">$25.000</span>
                  </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-close">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
               </div>
             </div>
            
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">$54.000</span>
              </div>
           </div>
          </div>
        {/* Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$54.000</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continuar con el pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
