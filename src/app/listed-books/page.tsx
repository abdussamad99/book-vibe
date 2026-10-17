"use client";
import { useContext } from "react";
import { BooksContext } from "@/app/context/Provider";
import type { IBook } from "@/types/book.type";
import BookCard from "@/components/hompage/BookCard";

const ListedBooks = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("BooksContext is not available");
  }
  const { readBooks, wishlist } = context;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center bg-[#B3B3B3] text-black p-4 rounded-2xl">
        Books
      </h1>

      <div className="tabs tabs-border mt-4">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-6">
          {readBooks.length === 0 ? (
            <p className="text-center text-lg font-semibold py-10">
              No read books found.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {readBooks.map((book: IBook) => (
                <BookCard key={book.bookId} book={book} />
              ))}
            </div>
          )}
        </div>

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-6">
          {wishlist.length === 0 ? (
            <p className="text-center text-lg font-semibold py-10">
              No wishlist books found.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {wishlist.map((book: IBook) => (
                <BookCard key={book.bookId} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;