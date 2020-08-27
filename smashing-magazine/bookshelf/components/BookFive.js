// components/BookFive.js
export default function Book5() {
  return (
    <div className="book5">
      <div className="book-info">
        <p className="title">there was a country</p>
        <p className="author">Chinua Achebe</p>
      </div>
      <style jsx>{`
        .book5 {
          color: #fff;
          width: 106px;
          height: 448px;
          margin-right: 23px;
          background-color: #000;
          transform: rotate(4deg);
        }
      `}</style>
    </div>
  );
}
