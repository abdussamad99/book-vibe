"use client";
import { BooksContext } from "@/app/context/Provider";
import type { IBook } from "@/types/book.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
    const {readBooks,setReadBooks} = useContext(BooksContext);
    const handleReadButton = () => {
        setReadBooks([...readBooks, book]);
        toast.success(`Book added to read list! "${book.bookName}"`);
    };

    return (
        <button className="btn btn-primary bg-white text-black py-2 px-8 rounded-md hover:bg-[#3d93a8] transition-colors cursor-pointer font-medium" onClick={ () => handleReadButton() }>Read</button>
    );
};

export default ReadButton;