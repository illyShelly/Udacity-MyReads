import React, { Component } from 'react'
import Book from './Book'

// remove 1 book to component rest of them between <li> delete
// keep in books-grid just 1 li first
// import Book on mainpage (not necessary on app) here is it used

// check if props works after fetching books in App console.log(this.props.listbooks)
// to display list of books (array) we use filter method - depends on Reading, want to read or Read
// filter and map above <li> and component Book - we create UI
  // do not forget add unique key to list item: key={book.id}
  // passing data to book in Book.js- img, title, author from fetch api
//props for Book.js called book={...} alredy maped and filtered in <Book /> component
// in Book.js do not forget write this.props.book.xxx
// change the shelf button - new Component solve problem with default move currentShelf - props for books.js
class MainPage extends Component {
  render() {
    console.log(this.props.listbooks)
    return (
       <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      { this.props.listbooks
                        .filter(book => book.shelf === 'currentlyReading')
                        .map(book => (
                          <li key={book.id}>
                          <Book
                          book={book}
                          moveToShelf={this.props.moveToShelf}
                          currentShelf = "currentlyReading"
                          />
                        </li>
                        ))
                      }
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.props.listbooks.filter(book => book.shelf === 'wantToRead')
                        .map(book => (
                          <li key={book.id}>
                          <Book book={book}
                          moveToShelf={this.props.moveToShelf}
                          currentShelf = "wantToRead"
                          />
                        </li>
                        ))
                      }
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.props.listbooks.filter(book => book.shelf === 'read')
                        .map(book => (
                          <li key={book.id}>
                          <Book book={book}
                          moveToShelf={this.props.moveToShelf}
                          currentShelf = "read"/>
                        </li>
                        ))
                      }
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
       </div>

      )
  }
}

export default MainPage

// 0:
// allowAnonLogging: true
// authors: ["William E. Shotts, Jr."]
// averageRating: 4
// canonicalVolumeLink: "https://market.android.com/details?id=book-nggnmAEACAAJ"
// categories: ["COMPUTERS"]
// contentVersion: "1.2.2.0.preview.2"
// description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial "shell shock," you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's "Evolution of a SysAdmin""
// id: "nggnmAEACAAJ"
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=nggnmAEAC…J&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
// industryIdentifiers: (2) [{…}, {…}]
// infoLink: "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"
// language: "en"
// maturityRating: "NOT_MATURE"
// pageCount: 480
// panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
// previewLink: "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api"
// printType: "BOOK"
// publishedDate: "2012"
// publisher: "No Starch Press"
// ratingsCount: 2
// readingModes: {text: true, image: false}
// shelf: "currentlyReading"
// subtitle: "A Complete Introduction"
// title: "The Linux Command Line"
// __proto__: Object
// shelf: "wantToRead"
// shelf: "read"
