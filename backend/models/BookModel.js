import mongoose, { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "../public/defaultImg.jpg"
    }, //add a default img when no images
    quantity: {
        type: String,
        required: true,
        min: [1, "Quantity can't be zero"],
        default: 1
    },
    OutOfStock: {
        type: Boolean,
        required: true,
        default: false
    }
})

//import using { Book } as this is a named export
export const Book = mongoose.model("Book", bookSchema) 