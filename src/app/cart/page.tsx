'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from "../../app/components/button"; 
import { Minus, Plus, X } from "lucide-react";
import MenuNavebar from '../components/2Navebar';




export function Page (){
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shoping Cart", href: "" },
  ];

  return (
    <div>
      <MenuNavebar title="Shoping Cart" breadcrumbs={breadcrumbs} />
     
    </div>
  );
}

// Define the Product type
interface Product {
  _id: string;
  name: string;
  originalPrice: number;
  quantity: number;
  imageUrl: string;
}



async function handleCheckout(products: Product[]) {
  if (products.length === 0) {
      console.error("No products in cart!");
      return;
  }

  try {
      const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ products }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
          window.location.href = data.url;
      } else {
          console.error("Checkout failed:", data.error || "Unknown error");
      }
  } catch (error) {
      console.error("Error:", error);
  }
}



function CartPage() {
  const [product, setProduct] = useState<Product[]>([]);

  // Fetch cart data from localStorage
  useEffect(() => {
    const cart: Record<string, Product> = JSON.parse(localStorage.getItem('cart') || '{}');
    const items = Object.values(cart).map((item: Product) => ({
      _id: item._id || "",
      name: item.name || "Unknown",
      originalPrice: parseFloat(item.originalPrice?.toString() || "0"), // Ensure price is a number
      quantity: parseInt(item.quantity?.toString() || "1", 10), // Ensure quantity is a number
      imageUrl: item.imageUrl || "/default-image.jpg",
    }));
    setProduct(items);
  }, []);

  // Handle quantity increment
  const handleIncrement = (id: string) => {
    setProduct((prevProducts) =>
      prevProducts.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle quantity decrement
  const handleDecrement = (id: string) => {
    setProduct((prevProducts) =>
      prevProducts.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle product removal
  const handleRemove = (id: string) => {
    setProduct((prevProducts) => prevProducts.filter((item) => item._id !== id));
  };
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shoping Cart", href: "" },
  ];

  return (
    <div className="bg-white">
      <MenuNavebar title="Shoping Cart" breadcrumbs={breadcrumbs} />
      <div className="overflow-x-auto p-4">
        {product.length > 0 ? (
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Product</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Price</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Quantity</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Total</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Remove</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product: Product) => (
                <tr key={product._id} className="border-b">
                  <td className="px-4 py-3 flex items-center gap-3">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <span className="text-sm font-medium text-gray-800">{product.name}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    ${product.originalPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => handleDecrement(product._id)}
                        className="h-8 w-8 flex justify-center items-center p-0 bg-gray-200"
                      >
                        <Minus size={16} /><span>{'-'}</span>
                      </Button>
                      <span className="w-8 text-center text-sm font-medium text-gray-800">
                        {product.quantity}
                      </span>
                      <Button
                        onClick={() => handleIncrement(product._id)}
                        className="h-8 w-8 flex justify-center items-center p-0 bg-gray-200"
                      >
                        <Plus size={16} /><span>{'+'}</span>
                      </Button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">
                    ${(product.originalPrice * product.quantity).toFixed(2)}
                  </td>
                  <td className="px-4 py-3">
                    <Button
                      onClick={() => handleRemove(product._id)}
                      className="h-8 w-8 flex justify-center items-center p-0 text-red-500 bg-gray-100"
                    >
                      <X size={16} /><span>{'x'}</span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-600">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
      <button onClick={() => handleCheckout(product)} className='bg-yellow-600 text-white border rounded-lg px-2 py-2 hover:text-2xl hover:text-gray-700 ml-[300px] lg:ml-[700px]'>
        Check Out</button>
    </div>
  );
}
export default CartPage;