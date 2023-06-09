import React from "react";


export default function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

// export default function Notes() {
//   return (
//     <>
//       {notes.map((createNote) => {  // createNote adesso e una arrow function
//         <NOte
//           key={createNote.key}
//           title={createNote.title}
//           content={createNote.content}
//         />;
//       })}
//     </>
//   );
// }
