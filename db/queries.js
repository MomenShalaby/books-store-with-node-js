exports.quriesList = {
    //Store Queries
    GET_STORE_LIST_QUERY: 'SELECT store_id, store_name, store_code, store_address, created_on, created_by FROM bms.store',

    CREATE_STORE_QUERY: 'INSERT INTO bms.store (store_name, store_code, store_address, created_on, created_by) VALUES($1, $2,$3, $4,$5)',

    UPDATE_STORE_QUERY: "UPDATE bms.store SET store_name=$1, store_address=$2, created_on=$3, created_by=$4 WHERE store_id=$5",

    GET_STORE_ID_QUERY: 'SELECT COUNT(store_id) FROM bms.store WHERE store_id = $1;',

    DELETE_STORE_QUERE: 'DELETE FROM bms.store WHERE store_id=$1;',


    //Book Queries
    GET_BOOKS_LIST_QUERY: 'SELECT book_id, book_title, book_isbn, book_description, book_author, book_publisher, book_pages, store_code, created_on, created_by FROM bms.book;',

    CREATE_BOOK_QUERY: 'INSERT INTO bms.book (book_title, book_isbn, book_description, book_author, book_publisher, book_pages, store_code, created_on, created_by) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);',

    UPDATE_BOOK_QUERY: 'UPDATE bms.book SET book_title=$1, book_description=$2,created_on=$3, created_by=$4 WHERE book_id=$5',

    GET_BOOK_ID_QUERY: 'SELECT COUNT(book_id) FROM bms.book WHERE book_id = $1;',

    DELETE_BOOK_QUERE: 'DELETE FROM bms.book WHERE book_id=$1;',

    GET_BOOKS_DETAILS_QUERY: `SELECT book_id, book_title, book_isbn, book_description, book_author, book_publisher, book_pages,store_name,store_address
    FROM bms.book
    inner join bms.store on bms.book.store_code =bms.store.store_code 
    where book_id =$1
    `,






}

