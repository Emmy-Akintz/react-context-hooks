import BookList from './components/BookList'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'

function App() {

  return (
    <>
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </>
  )
}

export default App
