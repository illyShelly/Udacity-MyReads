import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
// rendering seach and main page
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'
import * as BooksAPI from './BooksAPI'


// remove everything, delete ternary operator
// delete state incl. showSearchPage fce
// state - data wanted to update/ using from parents to children
  // 3 types - list of books; query(search)-typing to input field(SearchPage); list of books(searched)-in SearchPage
// 2 children needed state -> the state is in the parent App
  // parent state (list of books for mainpage and searchpage)
// import all method from BooksAPI using *
  // to see fetched book console.log to render() method
// updated books array we use it in MainPage component
  // access to that state for MainPage component we use props: this.props.list books
  // onChange method in Book.js -> change state in App method moveToShelf, pass it to MainPage component in App, in MainPage to Book component
//added router and import link - index.js, main, search changed
// compare app.js books:[] with newsearchedBooks:[] if searched is already in shelf ... compare their id, to search -> component props
class BooksApp extends React.Component {
  state = {
    books: []
  }

// call by React when component is created
// we fetch all the books into array called books as well
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books: books })
    });
  }
  // update state once call method onChange on Book
  // one of the BooksApp class
  moveToShelf = (book, shelf) => {
    // backend method from Udacity
    BooksAPI.update(book, shelf);
    // update page we need to refresh or pass above code
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
  render() {
    // console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
          listbooks={this.state.books}
          moveToShelf={this.moveToShelf}
          />
        )}
        />
      <Route exact path="/search" render={() => (
        <SearchPage
          moveToShelf={this.moveToShelf}
          books={this.state.books}
        />
        )} />
      </div>
    )
  }
}

export default BooksApp
