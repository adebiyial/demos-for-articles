// pages/_app.js
import "../styles/globals.css";
import "../styles/bookshelf.scss";
import "../styles/bookone.sass";
import "../styles/booktwo.sass";

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default MyApp;
