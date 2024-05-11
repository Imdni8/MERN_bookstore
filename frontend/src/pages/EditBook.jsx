import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const EditBook = () => {
    const { id } = useParams();
    console.log("Editing: " + id);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");

    useEffect(async () => {
        const fetchedBook = await axios.get(
            `${import.meta.env.VITE_baseURL}/${id}`
        );
        console.log(fetchedBook.data);

        setTitle(fetchedBook.data.title);
        setAuthor(fetchedBook.data.author);
        setImg(fetchedBook.data.img);
    }, []);

    return (
        <div className="p-2">
            {/* check method override for sending patch requests from here */}
            <button className="px-4 py-2 bg-blue-200 rounded-md mb-2">
                <Link to="/">Back</Link>
            </button>
            <div className="text-xl mb-2">Edit book</div>
            <form
                action={`${
                    import.meta.env.VITE_baseURL
                }/edit/${id}?_method=PATCH`}
                method="post"
                className="flex flex-col gap-2"
            >
                <label htmlFor="title">Title</label>
                <input
                    className="bg-gray-200"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="title">Author</label>
                <input
                    className="bg-gray-200"
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <label htmlFor="img">Image URL (optional)</label>
                <input
                    className="bg-gray-200"
                    type="text"
                    id="img"
                    name="img"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />

                <button
                    action="submit"
                    className="px-4 py-2 bg-blue-200 rounded-md"
                >
                    Edit
                </button>
            </form>
        </div>
    );
};

export default EditBook;
