var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1. 배열 타입 (Array type)
// 책 제목들을 담는 string(스트링) 배열
var bookTitles = [
    "타입스크립트 입문",
    "모던 자바스크립트",
    "클린 코드",
    "리팩터링",
    "도메인 주도 설계",
];
console.log("=== 1. 책 제목 배열 ===");
console.log(bookTitles);
var sampleBook = {
    title: "타입스크립트 완벽 가이드",
    author: "홍길동",
    publicationYear: 2024,
    isAvailable: true,
};
console.log("\n=== 2. Book 객체 ===");
console.log(sampleBook);
var updateAvailability = function (book, newAvailability) {
    return __assign(__assign({}, book), { isAvailable: newAvailability });
};
var unavailableBook = updateAvailability(sampleBook, false);
console.log("\n=== 3. 가용성 업데이트 함수 ===");
console.log("원본:", sampleBook);
console.log("업데이트 후:", unavailableBook);
var bookWithStatus = __assign(__assign({}, sampleBook), { status: "available" });
// 상태를 변경하는 함수
function changeBookStatus(book, newStatus) {
    var isNowAvailable = newStatus === "available";
    return __assign(__assign({}, book), { status: newStatus, isAvailable: isNowAvailable });
}
var checkedOutBook = changeBookStatus(bookWithStatus, "checked out");
console.log("\n=== 4. 유니언 타입과 상태 변경 ===");
console.log("원본 상태:", bookWithStatus);
console.log("변경 후 상태:", checkedOutBook);
// 인터페이스 구현
var myLibrary = {
    books: [],
    addBook: function (book) {
        this.books.push(book);
    },
    removeBook: function (title) {
        this.books = this.books.filter(function (book) { return book.title !== title; });
    },
};
myLibrary.addBook(bookWithStatus);
myLibrary.addBook(checkedOutBook);
console.log("\n=== 5. Library 인터페이스 구현 ===");
console.log("도서관 보유 도서:", myLibrary.books);
var info = ["클린 아키텍처", "로버트 C. 마틴"];
console.log("\n=== 6. 튜플(BookInfo) ===");
console.log("제목:", info[0], "저자:", info[1]);
// 7. 열거형 (Enum) + 확장 타입
// 책 장르 열거형
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "NonFiction";
    Genre["Fantasy"] = "Fantasy";
    Genre["Biography"] = "Biography";
    Genre["ScienceFiction"] = "ScienceFiction";
    Genre["Romance"] = "Romance";
})(Genre || (Genre = {}));
var detailedBook = {
    title: "은하수를 여행하는 히치하이커를 위한 안내서",
    author: "더글러스 애덤스",
    publicationYear: 1979,
    isAvailable: true,
    status: "available",
    genre: Genre.ScienceFiction,
};
console.log("\n=== 7. DetailedBook + Genre 열거형 ===");
console.log(detailedBook);
