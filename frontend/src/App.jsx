import axios from "axios"

function App() {
axios.get("http://localhost:3000/books")
.then(res => console.log(res.data[0].title))


  return (
    <>
      <h1 className='bg-red-400 text-blue-500 text-center'>hello world</h1>
      <h2>testing</h2>
      {/* <p>{res.data}</p> */}
    </>
  )
}

export default App
