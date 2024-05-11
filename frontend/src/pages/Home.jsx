import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookCard from "../components/BookCard.jsx";

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_baseURL}`)
            .then((res) => {
                // console.log(res.data)
                setBooks(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <header className="flex flex-auto">
                <h1 className="text-2xl col text-blue-500">Book Library</h1>
                <Link className="px-4 py-2 bg-blue-200 rounded-md" to="/AddNew">
                    Add new book
                </Link>
            </header>

            <div className="flex flex-wrap gap-2">
                {books.map((item) => (
                    <BookCard
                        className="container-md container"
                        title={item.title}
                        author={item.author}
                        img={item.img}
                        id={item._id}
                        key={item._id}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
