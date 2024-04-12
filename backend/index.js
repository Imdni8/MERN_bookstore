//importing stuff
import express from "express"
import { mongoDBurl } from "./config.js"
import mongoose from "mongoose"
import cors from "cors"

const app = express()

//setting up CORS
app.use(
    cors({
        origin: "http://localhost:5173"
    }))

//expres JSON parser
app.use(express.json())

//connecting to db
mongoose
.connect(mongoDBurl)
.then(() => {
    console.log("App connected to DB")
    app.listen(3000, () => {
        console.log("port open")
    })
}).catch((err) => {
        console.log(err)
})

//import routes for Book CRUD operations
import bookRoutes from "./routes/booksRoutes.js"
app.use("/books", bookRoutes)
