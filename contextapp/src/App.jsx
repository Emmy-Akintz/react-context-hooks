import React from 'react'
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'

function App() {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
