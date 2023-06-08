import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import './style.css';

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <Note />

      <footer>
        <Footer />
      </footer>
    </div>

    //  <Header />,
    //  <Note />
    //  <Footer />
  );
}
