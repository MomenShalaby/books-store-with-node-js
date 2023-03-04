exports.Books = class Books{
    constructor(booksID,bookTitle,isbn,bookDescription,bookPuplisher,bookAuthor,bookPages,storeCode){
        this.bookID=booksID;
        this.bookTitle=bookTitle;
        this.isbn=isbn;
        this.bookDescription=bookDescription;
        this.bookAuthor=bookAuthor;
        this.bookPuplisher=bookPuplisher;
        this.bookPages=bookPages;
        this.storeCode=storeCode;
    }
}