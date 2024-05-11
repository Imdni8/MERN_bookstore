import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function BookCard({ title, author, img, id }) {
    async function handleDelete() {
        console.log("delete clicked");
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_baseURL}/del/${id}`
            );
            console.log(response.data.success);
            if (response.data.success) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="p-4 bg-slate-500">
            <img src={img} alt="" />
            <div className="text-xl">{title}</div>
            <div className="text-sm">{author}</div>
            <section className="flex gap-2">
                <button className="text-red-500" onClick={handleDelete}>
                    Delete
                </button>
                <button>
                    <Link to={"/EditBook/" + id}>Edit</Link>
                </button>
            </section>
        </div>
    );
}

export default BookCard;
