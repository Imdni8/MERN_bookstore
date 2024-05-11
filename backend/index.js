//importing stuff
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import methodOverride from "method-override";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables

const app = express();

//setting up CORS
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

//expres JSON parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for executing patch request
app.use(methodOverride("_method"));

//accessing env variables
const mongoDBurl = process.env.mongoDBurl;
const port = process.env.port || 3000;

//connecting to db
mongoose
    .connect(mongoDBurl)
    .then(() => {
        console.log("App connected to DB");
        app.listen(port, () => {
            console.log("port open");
        });
    })
    .catch((err) => {
        console.log(err);
    });

//import routes for Book CRUD operations
import bookRoutes from "./routes/booksRoutes.js";
app.use("/books", bookRoutes);
