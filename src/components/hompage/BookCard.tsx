import type { IBook } from "@/Types/book.type";

interface BookCardProp {
  book : IBook,
}

const BookCard = ({ book }: BookCardProp) => {
    return (
        <div>
            <h2 className="text-lg font-semibold">{book.bookName}</h2>
            <p className="text-gray-600">{book.author}</p>
        </div>
    );
};

export default BookCard;