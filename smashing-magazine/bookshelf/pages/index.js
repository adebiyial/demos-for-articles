// pages/index.js
import BookOne from "../components/BookOne";
import BookTwo from "../components/BookTwo";
import BookThree from "../components/BookThree";
import BookFour from "../components/BookFour";
import BookFive from "../components/BookFive";
import BookSix from "../components/BookSix";

export default function Home() {
  return (
    <div className="home">
      <div className="the-bookshelf">
        <div className="bookshelf-wrap">
          <div className="bookshelf">
            <BookOne />
            <BookTwo />
            <BookThree />
            <BookFour />
            <BookFive />
            <BookSix />
          </div>
        </div>
      </div>
    </div>
  );
}
