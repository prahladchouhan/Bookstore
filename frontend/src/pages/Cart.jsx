import React from 'react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      product: {
        title: 'The Great Adventure',
        price: 19.99,
        image:
          'https://images.unsplash.com/photo-1716892001554-71153626ea22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww',
      },
      quantity: 1,
    },
    {
      id: 2,
      product: {
        title: 'Mystery of the Old Library',
        price: 12.49,
        image:
          'https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
      },
      quantity: 2,
    },
  ];

  // Total price calculation
  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-900 text-amber-50 min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-blue-400">🛒 Your Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md mb-4 transition"
          >
            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-20 h-28 object-cover rounded-md"
            />

            <div className="flex-1 px-4">
              <h2 className="text-lg font-semibold">{item.product.title}</h2>
              <p className="text-green-400 font-medium">${item.product.price}</p>
              <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">
                ➖
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">
                ➕
              </button>
            </div>
          </div>
        ))}

        {/* Total Section */}
        <div className="bg-gray-800 mt-8 p-4 rounded-xl shadow-lg flex items-center justify-between">
          <h2 className="text-xl font-bold text-blue-300">Total</h2>
          <p className="text-lg font-semibold text-green-400">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
