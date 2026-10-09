import type { IBook } from "@/types/book.type";

interface PageProps {
  params: Promise<{ id: string }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
};

const BookDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const books = await getBooks();
  const book = books.find((b) => b.bookId === Number(id));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Book not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded-lg p-8 flex justify-center">
          <img
            src={book.image}
            alt={book.bookName}
            className="h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{book.bookName}</h1>
          <p className="text-gray-500 mb-4">By : {book.author}</p>

          <div className="flex gap-2 mb-4">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-700 mb-2">
            <strong>Category:</strong> {book.category}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Rating:</strong> {book.rating} ⭐
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Pages:</strong> {book.totalPages}
          </p>
          <p className="text-sm text-gray-700 mb-6">
            <strong>Publisher:</strong> {book.publisher} ({book.yearOfPublishing})
          </p>

          <p className="text-gray-700 leading-relaxed">{book.review}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;