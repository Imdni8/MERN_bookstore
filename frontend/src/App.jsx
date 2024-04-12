// import axios from "axios"
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Booklist from "./pages/Booklist"

function App() {
// axios.get("http://localhost:3000/books")
// .then(res => console.log(res.data[0].title))

  return (
    <>
    <div className='flex'>
    <Link className='p-2' to="/">Home</Link>
    <Link className='p-2' to="/booklist">Booklist</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/booklist" element={<Booklist/>} />
    </Routes>
    </>
    
  )
}

export default App
