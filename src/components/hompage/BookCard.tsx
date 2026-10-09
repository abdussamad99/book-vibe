import Image from "next/image";
import type { IBook } from "@/types/book.type";
import Link from "next/link";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="border border-gray-200   rounded-xl p-4 bg-white hover:shadow-lg  transition-shadow">
      {/* Image section */}
      <div className="bg-gray-100 rounded-lg flex items-center justify-center p-6 mb-4 h-56">
        <Image
          src={book.image}
          alt={book.bookName}
          width={140}
          height={200}
          className="object-contain h-full w-auto"
        />
      </div>

      {/* Tags */}
        <div className="flex gap-2 mb-3">
            {book.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
            ))}
        </div>

      {/* Title & Author */}
      <h2 className="text-xl font-bold text-gray-900 mb-1">{book.bookName}</h2>
      <p className="text-sm text-gray-500 mb-4">By : {book.author}</p>

      {/* Footer: Category + Rating */}
      <div className="flex items-center justify-between border-t border-dashed border-gray-300 pt-3">
        <span className="text-sm text-gray-600">{book.category}</span>
        <div className="flex items-center gap-1 text-sm text-gray-700">
          <span>{book.rating.toFixed(2)}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .32-.988l5.519-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>

      </div>
       <Link href={`/books/${book.bookId}`} className="w-full">

       <button className="bg-black text-white py-4 rounded hover:bg-gray-800 text-center w-50% mt-4 cursor-pointer btn btn-neutral w-full">
          View Details
        </button>

       </Link>
    </div>
  );
};

export default BookCard;
