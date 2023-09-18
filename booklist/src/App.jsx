import NewBookForm from './components/BookForm'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'

function App() {

  return (
    <>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </>
  )
}

export default App
