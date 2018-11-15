import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
// singular Component!!!
// search method - backend search(query); query update the state
// it will fetch the the books as method getAll
// SEARCH input to work - state for query
  // set state - empty query; method to change state by new typing
  // added value to input - firstly this.state.query
  // event onChange - when typing new staff
// require BooksAPI - fetch typed new Books, update state of new empty []
// map through newSearchedBook and import Book component to handle UI
// handle ERROR if query is not empty, but our search dosn't match keyword -> then we use map through empty array???
class SearchPage extends Component {
  state = {
    query: '',
    newSearchedBooks : []
  }

// method update above state - empty query
  updateQuery = (query) => {
    this.setState({
      // for multiple work search without trim() - whitespaces
      query: query
    })
    // put searched book to newSearchedBooks array
    this.updateByFetchSearchedBooks(query)
  }

  // fetch the required book, import API above
  updateByFetchSearchedBooks = (query) => {
    // if we have not empty query do this:
    if(query) {
      // return promise
      BooksAPI.search(query)
      .then((searchedBooks) => {
        // handle error if book don't match searchkeyword
        if(searchedBooks.error) {
          this.setState({ searchedBooks: [] })
        }
        else {
          this.setState({ newSearchedBooks: searchedBooks })
        }
      })
      // .catch((error) => { console.log("Query does not match searchable keyword!")})
    } else {
      this.setState({ newSearchedBooks: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search">Close</a>
          {/*
          onClick={() =>
            this.setState({ showSearchPage: false })}
          */}
          <div className="search-books-input-wrapper">
            {/*
             DOES search by title or author. Every search is limited by search terms.
            */}
            <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value) }
          />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* map through new searched books and set <li> id and print every single one using Book component*/}
            {
              this.state.newSearchedBooks.map(newSearchedBook => (
                <li key={newSearchedBook.id}>
                  <Book
                    book={newSearchedBook}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
