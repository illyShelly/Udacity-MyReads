import React from 'react'

// functional components - usually without state
// capital "C" React.Component
// remove hard coded staff - background Img, title, author

// added link from fetched Books array MainPage new filtered open-search, title and authors - this.props.book.xxx
// pass book to MainPage - other props
// MOVING BOOK TO DIFFERENT SHELF - select section, method update, onClick or onChange React method when click/change
  // onChange "listener" change state of books by created methodmoveToShelf (inApp), passing to child component Main and to Book
  // parameters - book=> this.props.book, shelf=>event.target.value for update(book, shelf) method from Udacity
//as first option was Current Reading even though it was on Read e.x. - switched with none as first default option
// currentShelf - props from MainPage - changing value
  // without refresh almost it works               value={this.props.currentShelf}

  // TRY USE ANOTHER WAY OF CHANGING SHELF!!! - delete var Main
// ERROR thumbnail undefined - not image some book - inside of render() !!!
class Book extends React.Component {
  render() {
    let existThumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${existThumbnail})"` }}>
          </div>
            <div className="book-shelf-changer">
              <select
              onChange={(event) => this.props.moveToShelf(
                  this.props.book, event.target.value
              )}
              // value={this.props.book.shelf}
              value={this.props.currentShelf}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book

/*
related to Book - pic, title, author
url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")
To Kill a Mockingbird
Harper Lee */

// imageLinks:
// smallThumbnail: "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
// thumbnail: "http://books.go....
