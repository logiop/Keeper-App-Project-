import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./style.css";
import { notes } from "./notes";

export default function App() {
  return (
    <div>
      <Header />

      {notes.map((createNote) => (//insted of writing {return(...)} i just use =>(...) easy life with ES6 
        // createNote adesso e una arrow function
        <Note
          key={createNote.key}
          title={createNote.title}
          content={createNote.content}
        />
      ))}

      <Footer />
    </div>
  );
}
