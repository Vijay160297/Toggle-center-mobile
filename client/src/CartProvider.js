
// // // ----
// import React from 'react';
// import { CartProvider } from './CartContext';
// // import PopularProducts from './PopularProducts';

// function App() {
//   return (
//     <CartProvider>
//       <PopularProducts />
//     </CartProvider>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
