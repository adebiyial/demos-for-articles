// components/BookThree.js
import Book3Styles from "../styles/bookthree.module.css";

export default function BookThree() {
  return (
    <div className={Book3Styles.book3}>
      <div className="book-info">
        <p className="title">the revolt of the public</p>
        <p className="author">Martin Gurri</p>
      </div>
    </div>
  );
}
