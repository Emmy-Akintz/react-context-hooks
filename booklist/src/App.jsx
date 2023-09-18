import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'

function App() {

  return (
    <>
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </>
  )
}

export default App
