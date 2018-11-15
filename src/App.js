import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
// rendering seach and main page
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'

// remove everything, delete ternary operator
// delete state incl. showSearchPage fce
// state - data wanted to update/ using from parents to children

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      <SearchPage />
      <MainPage />
      </div>
    )
  }
}
export default BooksApp
