"use client";

import { URL } from "@/service/request";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext<any>(null);
export const BasketListContext = ({ children }: any) => {
  const [basketList, setBasketList] = useState<any>([]);
  const token = window.localStorage.getItem("token");
  const [refreshContext, setRefreshContext] = useState<boolean>(false);
  useEffect(() => {
    if (token) {
      axios
        .get(`${URL}/basket`, {
          params: { page: 1, limit: 100 },
          headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
          setBasketList(response.data.ProductId);
        })
        .catch((error) => {
          console.error("Error fetching basket data:", error);
        });
    }
  }, [refreshContext]);

  return (
    <Context.Provider
      value={{ basketList, setBasketList, refreshContext, setRefreshContext }}
    >
      {children}
    </Context.Provider>
  );
};
