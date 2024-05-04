import express from "express"
const router = express.Router()

//import Book model
import { Book } from "../models/BookModel.js" //named export

//-----// ROUTES //-----//

//accessing all books
router.get("/", async (req, res) => {
    const bookList = await Book.find({})
    // console.log(bookList)
    return res.send(bookList)
})

//accessing a book by ID
router.get("/:id", async(req, res) => {
    const { id } = req.params
    const fetchedBook = await Book.findById(id)
    console.log("Fetching to edit: " + fetchedBook)
    return res.send(fetchedBook)
})

//adding a new book
router.post('/addNew', async (req, res) => {
    console.log(req.body)
    const { title, author } = req.body
    if (!title || !author) {
        return res.send({message: "title and author are required"})
    }

    const newBook = await Book.create(req.body)
    console.log(newBook)
    res.redirect("http://localhost:5173/")
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
        if (req.body.img === '') {
            req.body.img = '/defaultImg.jpg'
        }

        const { id } = req.params
        console.log(req.body)

        await Book.findByIdAndUpdate(id, req.body)
        const editedBook = await Book.findById(id)
        console.log("updated book - " + editedBook)
        res.redirect("http://localhost:5173/")
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
    console.log("deleted book: " + deletedBook)
    return res.json({"success": true})
})

export default router