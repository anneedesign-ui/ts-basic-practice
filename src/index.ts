// 1. 배열 타입 (Array type)
// 책 제목들을 담는 string(스트링) 배열
const bookTitles: string[] = [
  "타입스크립트 입문",
  "모던 자바스크립트",
  "클린 코드",
  "리팩터링",
  "도메인 주도 설계",
];

console.log("=== 1. 책 제목 배열 ===");
console.log(bookTitles);

// 2. 객체 타입 (Object type)
// Book(북) 타입 정의
type Book = {
  title: string;
  author: string;
  publicationYear: number;
  isAvailable: boolean;
};

const sampleBook: Book = {
  title: "타입스크립트 완벽 가이드",
  author: "홍길동",
  publicationYear: 2024,
  isAvailable: true,
};

console.log("\n=== 2. Book 객체 ===");
console.log(sampleBook);

// 3. 함수 타입 (Function type)
// 책의 가용성(isAvailable)을 업데이트하는 함수 타입
type UpdateAvailability = (book: Book, newAvailability: boolean) => Book;

const updateAvailability: UpdateAvailability = (book, newAvailability) => {
  return {
    ...book,
    isAvailable: newAvailability,
  };
};

const unavailableBook = updateAvailability(sampleBook, false);

console.log("\n=== 3. 가용성 업데이트 함수 ===");
console.log("원본:", sampleBook);
console.log("업데이트 후:", unavailableBook);

// 4. 유니언 타입 (Union type)
// 책 상태를 나타내는 유니언 타입
type BookStatus = "available" | "checked out" | "reserved";

// Book 타입 확장: status(스테이터스) 필드 추가
type BookWithStatus = Book & {
  status: BookStatus;
};

const bookWithStatus: BookWithStatus = {
  ...sampleBook,
  status: "available",
};

// 상태를 변경하는 함수
function changeBookStatus(
  book: BookWithStatus,
  newStatus: BookStatus
): BookWithStatus {
  const isNowAvailable = newStatus === "available";

  return {
    ...book,
    status: newStatus,
    isAvailable: isNowAvailable,
  };
}

const checkedOutBook = changeBookStatus(bookWithStatus, "checked out");

console.log("\n=== 4. 유니언 타입과 상태 변경 ===");
console.log("원본 상태:", bookWithStatus);
console.log("변경 후 상태:", checkedOutBook);

// 5. 인터페이스 (Interface)
// 도서관 시스템 인터페이스
interface Library {
  books: BookWithStatus[];
  addBook: (book: BookWithStatus) => void;
  removeBook: (title: string) => void;
}

// 인터페이스 구현
const myLibrary: Library = {
  books: [],

  addBook(book) {
    this.books.push(book);
  },

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  },
};

myLibrary.addBook(bookWithStatus);
myLibrary.addBook(checkedOutBook);

console.log("\n=== 5. Library 인터페이스 구현 ===");
console.log("도서관 보유 도서:", myLibrary.books);

// 6. 튜플 (Tuple)
// [제목, 저자] 형태의 튜플 타입
type BookInfo = [string, string];

const info: BookInfo = ["클린 아키텍처", "로버트 C. 마틴"];

console.log("\n=== 6. 튜플(BookInfo) ===");
console.log("제목:", info[0], "저자:", info[1]);

// 7. 열거형 (Enum) + 확장 타입
// 책 장르 열거형
enum Genre {
  Fiction = "Fiction",
  NonFiction = "NonFiction",
  Fantasy = "Fantasy",
  Biography = "Biography",
  ScienceFiction = "ScienceFiction",
  Romance = "Romance",
}

// Book 타입을 확장한 DetailedBook 타입
type DetailedBook = BookWithStatus & {
  genre: Genre;
};

const detailedBook: DetailedBook = {
  title: "은하수를 여행하는 히치하이커를 위한 안내서",
  author: "더글러스 애덤스",
  publicationYear: 1979,
  isAvailable: true,
  status: "available",
  genre: Genre.ScienceFiction,
};

console.log("\n=== 7. DetailedBook + Genre 열거형 ===");
console.log(detailedBook);
