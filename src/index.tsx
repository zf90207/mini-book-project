import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SY498_BO1,204,203,200_.jpg',
  title: 'If Animals Kissed Good Night',
  author: 'Ann Whitford Paul',
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = ({ img, title, author }: any) => (
  // const { img, title, author } = props;
  <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
)

ReactDOM.render(<BookList />, document.getElementById('root'))
