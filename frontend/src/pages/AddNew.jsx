import React from "react";
import { Link } from "react-router-dom";

const AddNew = () => {
    return (
        <>
            <Link className="px-4 py-2 bg-blue-200 rounded-md" to="/">
                Back
            </Link>
            <div className="text-xl">Add new book</div>
            <form
                action={`${import.meta.env.VITE_baseURL}/addNew`}
                method="post"
                className="flex flex-col gap-2"
            >
                <label htmlFor="title">Title</label>
                <input className="bg-gray-200" type="text" name="title" />

                <label htmlFor="title">Author</label>
                <input className="bg-gray-200" type="text" name="author" />

                <label htmlFor="img">Image URL (optional)</label>
                <input className="bg-gray-200" type="url" id="img" name="img" />

                <button
                    action="submit"
                    className="px-4 py-2 bg-blue-200 rounded-md"
                >
                    Add
                </button>
            </form>
        </>
    );
};

export default AddNew;
