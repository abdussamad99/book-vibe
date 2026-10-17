"use client";
import type { IBook } from "@/types/book.type";
import { createContext, useState, ReactNode } from "react";

// interface BooksContextType {
//   readBooks: number[];
//   setReadBooks: React.Dispatch<React.SetStateAction<number[]>>;
//   wishlistBooks: number[];
//   setWishlistBooks: React.Dispatch<React.SetStateAction<number[]>>;
// }

export const BooksContext = createContext({});



const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
