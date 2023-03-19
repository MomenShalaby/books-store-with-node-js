var queries = require("../db/queries")
const utility = require("../Util/utility")
const dbConnection = require("../db/connection")

exports.getAllBooks= async(req,res)=>{
try{
    var GET_ALL_BOOKS= queries.quriesList.GET_BOOKS_LIST_QUERY
    var result =await dbConnection.dbQuery(GET_ALL_BOOKS)
    return res.status(200).send(result.rows)

} catch (error) {

    return res.status(500).send({ error: 'failed to list store' })
}

}

exports.getBooksDetails= async(req,res)=>{
    try{
        bookID=req.params.bookID
        if(!bookID){
            return res.status(500).send({ error: 'Book ID is empty' })

        }
        var GET_BOOKS_DETAILS= queries.quriesList.GET_BOOKS_DETAILS_QUERY
        var result =await dbConnection.dbQuery(GET_BOOKS_DETAILS,[bookID])
        return res.status(200).send(result.rows)
    
    } catch (error) {
    
        return res.status(500).send({ error: 'failed to get book details.' })
    }
    
    }


exports.createBook =async (req,res)=>{
try{
    book_title=req.body.book_title
    book_isbn=req.body.book_isbn
    book_description=req.body.book_description
    book_author=req.body.book_author
    book_publisher=req.body.book_publisher
    book_pages=req.body.book_pages
    store_code=req.body.store_code
    created_by="admin"
    created_on=new Date()

    if(!book_title||!book_isbn||!book_description||!book_author||!book_publisher||!book_pages||!store_code){
        return res.status(500).send("Missing Values!")
    }
    values=[book_title,book_isbn,book_description,book_author,book_publisher,book_pages,store_code,created_on,created_by]
    var CREATE_BOOK= queries.quriesList.CREATE_BOOK_QUERY
    var result =await dbConnection.dbQuery(CREATE_BOOK,values)
    return res.status(200).send(result.rows + "Created successfully")

}
catch (error) {
    return res.status(500).send({ error: 'Failed to create Book' })
}

}


exports.updateBook = async (req,res)=>{

    try{

        book_id=req.body.book_id
        book_title=req.body.book_title
        book_description=req.body.book_description
        created_on=new Date()
        created_by="admin"

        if(!book_title||!book_description||!book_id){
            return res.status(500).send("Missing Values!")
        }

        var id_query= queries.quriesList.GET_BOOK_ID_QUERY
        var id= await dbConnection.dbQuery(id_query,[book_id])


        if(id.rows[0].count=="0"){
            return res.status(500).send({ error: 'Book id not found' })

        }

        values=[book_title,book_description,created_on,created_by,book_id]

        var update_query= queries.quriesList.UPDATE_BOOK_QUERY;
        console.log(result)

        var result= await dbConnection.dbQuery(update_query,values)
        return res.status(201).send("Updated successfully")
    
    }
    catch (error) {
        return res.status(500).send({ error: 'Failed to Update Book' })
    }

}


exports.deleteBook = async (req,res)=>{

 
    try{

        book_id=req.body.book_id

        if(!book_id){
            return res.status(500).send("Missing Values!")
        }

        var id_query= queries.quriesList.GET_BOOK_ID_QUERY
        var id= await dbConnection.dbQuery(id_query,[book_id])


        if(id.rows[0].count=="0"){
            return res.status(500).send({ error: 'Book id not found' })

        }

        
        var UPDATE_BOOK= queries.quriesList.DELETE_BOOK_QUERE

        var result =await dbConnection.dbQuery(UPDATE_BOOK,[book_id])


        return res.status(200).send("Deleted successfully")
    
    }
    catch (error) {
        return res.status(500).send({ error: 'Failed to Delete Book' })
    }


}