import express from "express"
const router = express.Router()

//import Book model
import { Book } from "../models/BookModel.js" //named export

//-----// ROUTES //-----//

//accessing all books
router.get("/", async (req, res) => {
    const bookList = await Book.find({})
    console.log(bookList)
    return res.send(bookList)
})

//adding a new book
router.post('/addNew', async (req, res) => {
    console.log(req.body)
    const { title, author } = req.body
    if (!title || !author) {
        return res.send({message: "title and author are required"})
    }

    const newBook = await Book.create(req.body)
    return res.send(newBook)
})

//updating a book's modifiable details - title, author, img
router.patch("/edit/:id", async (req, res) => {
    try {
        //check if request body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No fields provided for update" });
        }
        //check if quantity is zero because mongoose validation 
        if (req.body.quantity === 0) {
            return res.status(400).json({ error: "quantity can't be zero" });
        }

        const { id } = req.params
        console.log(req.body)

        await Book.findByIdAndUpdate(id, req.body)
        const editedBook = await Book.findById(id)
        return res.send("updated book - " + editedBook)
    } catch (err) {
        console.log("" + err)
        return res.send(err)
    }
})

//deleting a book
router.delete("/del/:id", async (req, res) => {
    const { id } = req.params
    console.log(id)
    const deletedBook = await Book.findByIdAndDelete(id)
    return res.send("deleted book: " + deletedBook)
})

export default router