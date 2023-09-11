import { useState } from 'react'
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </>
  )
}

export default App
