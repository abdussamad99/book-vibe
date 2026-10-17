"use client";
import { BooksContext } from "@/app/context/Provider";
import type { IBook } from "@/types/book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWishList = () => {
    setWishlist([...wishlist, book]);
    toast.success(`Book added to wishlist! "${book.bookName}"`);
  };
  return (
    <button
      className="btn btn-neutral bg-[#50B1C9] text-white py-2 px-8 rounded-md hover:bg-[#3d93a8] transition-colors cursor-pointer font-medium"
      onClick={() => handleAddToWishList()}
    >
      Wishlist
    </button>
  );
};

export default WishListButton;
