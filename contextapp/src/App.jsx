import { useState } from 'react'
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Booklist />
    </>
  )
}

export default App
