import React, { useState } from 'react'

import { useShoppingCart } from 'use-shopping-cart'

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ariaHidden="true"
      className="svg-inline--fa fa-bag-shopping"
      data-icon="bag-shopping"
      data-prefix="fas"
      viewBox="0 0 448 512"
      width="25px"
    >
      <path
        fill="currentColor"
        d="M416 160h-72v-40C344 53.83 290.2 0 224 0S104 53.83 104 120v40H32c-17.67 0-32 14.3-32 32v240c0 44.2 35.82 80 80 80h288c44.18 0 80-35.82 80-80V192c0-17.7-14.3-32-32-32zm-264-40c0-39.7 32.3-72 72-72s72 32.3 72 72v40H152v-40zm-24 128c-13.2 0-24-10.7-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24zm192 0c-13.25 0-24-10.75-24-24s10.8-24 24-24 24 10.8 24 24-10.7 24-24 24z"
      ></path>
    </svg>
  );
}

const ShoppingBag = () => {
  const {
    cartCount,
    clearCart,
  } = useShoppingCart();

  return (
    <li>
      <div>
        <Icon/>
        <p>{cartCount}</p>
        <button style={buttonStyles} onClick={clearCart}>
        X
      </button>
      </div>
    </li>
  )

}

const buttonStyles = {
  fontSize: '25px',
  textAlign: 'center',
  color: '#000',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'transparent',
  border:'0',
  letterSpacing: '1.5px',
}

const Cart = () => {
  const [loading, setLoading] = useState(false)
  /* Gets the totalPrice and a method for redirecting to stripe */
  const {
    redirectToCheckout,
  } = useShoppingCart()

  return (
    <div>
      {/* Redirects the user to Stripe */}
      <button
        style={buttonStyles}
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? 'Loading...' : <ShoppingBag/>}
      </button>
    </div>
  )
}

export default Cart