// import axios from "axios"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import AddNew from "./pages/AddNew"
import EditBook from "./pages/EditBook"

function App() {
// axios.get("http://localhost:3000/books")
// .then(res => console.log(res.data[0].title))

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AddNew" element={<AddNew/>} />
      <Route path='/EditBook/:id' element={<EditBook/>} />
    </Routes>
    </>
    
  )
}

export default App
