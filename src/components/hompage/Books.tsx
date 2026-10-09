import BookCard from '@/components/hompage/BookCard';
import type { IBook } from '@/Types/book.type';

const getBooks = async (): Promise<IBook[]> => {
   const res = await fetch('http://localhost:3000/booksData.json',);
    const data = await res.json();
    return data;
};

const Books = async () => {
    const booksData =await getBooks();

    return (
        <section className="container mx-auto px-4 py-8">
            <h1>books</h1>
         {booksData.map((book : IBook) => (
            <BookCard key={book.bookId} book={book} />


         ))}
        </section>
    );
};

export default Books;