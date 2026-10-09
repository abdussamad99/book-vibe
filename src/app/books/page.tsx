import BookCard from "@/components/hompage/BookCard";
import type { IBook } from"@/types/book.type";

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-3xl font-bold text-center mb-10">
        Books
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
