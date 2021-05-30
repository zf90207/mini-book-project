import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
        alt=""
      />
      <h1>I Love You to the Moon and Back</h1>
      <h4>Amelia Hepworth</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
