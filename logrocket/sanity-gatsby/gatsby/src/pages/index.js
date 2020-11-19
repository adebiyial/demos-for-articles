import React from 'react'
import { graphql } from 'gatsby'
import '../styles/style.css'

export default function IndexPage({ data }) {
  const books = data.allSanityBook.nodes

  return (
    <div className="books-wrap">
      <div className="container">
        <h1 className="heading">Books</h1>
        <ul className="books">
          {books.map(book => (
            <li className="book-item" key={book.name}>
              <h2 className="title">{book.name}</h2>
              <p className="author">Author: {book.author}</p>
              <p className="release-date">Release Date: {book.releaseDate}</p>
              <span className="category">Category: {book.category[0].category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const query = graphql`
  query BooksQuery {
    allSanityBook {
      nodes {
        name
        author
        releaseDate
        category {
          category
        }
      }
    }
  }
`
