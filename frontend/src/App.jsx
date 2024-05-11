// import axios from "axios"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import EditBook from "./pages/EditBook";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddNew" element={<AddNew />} />
                <Route path="/EditBook/:id" element={<EditBook />} />
            </Routes>
        </>
    );
}

export default App;
