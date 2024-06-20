"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "@/service/request";

interface BasketType {
  basket: boolean;
  category_id: string;
  cost: number;
  count: number;
  discount: number;
  image_url: string[];
  liked: boolean;
  product_description: string;
  product_id: string;
  product_name: string;
  product_status: string;
  short_description: string;
  size: string[];
  tags: string[];
}

const Order: React.FC = () => {
  const token = window.localStorage.getItem("token");
  const [basketList, setBasketList] = useState<BasketType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${URL}/basket`, {
        params: {
          page: 1,
          limit: 100,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBasketList(response.data.ProductId);
      })
      .catch((error) => {
        setError(error.message);
        console.error("There was an error!", error);
      });
  }, [token]);

  const increaseQuantity = (productId: string) => {
    setBasketList((prev) =>
      prev.map((item) =>
        item.product_id === productId
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setBasketList((prev) =>
      prev.map((item) =>
        item.product_id === productId && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Products</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {basketList.map((item) => (
              <tr key={item.product_id}>
                <td className="py-4 px-4 border-b flex items-center">
                  <img
                    src={item.image_url[0]}
                    alt={item.product_name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.product_name}</p>
                    <p className="text-gray-600 text-sm">
                      SKU: {item.product_id}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 border-b">${item.cost.toFixed(2)}</td>
                <td className="py-4 px-4 border-b flex items-center">
                  <button
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                    onClick={() => decreaseQuantity(item.product_id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.count}</span>
                  <button
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                    onClick={() => increaseQuantity(item.product_id)}
                  >
                    +
                  </button>
                </td>
                <td className="py-4 px-4 border-b text-green-500 font-bold">
                  ${(item.cost * item.count).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
