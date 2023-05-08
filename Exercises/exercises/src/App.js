// #############################
// Exercise No.7
// ############################
// import React from "react";
// import AppExercise from './components/AppExercise'
// function App() {
//   return (
//     <div>
//       <AppExercise />
//     </div>
//   );
// }

// export default App;

// #############################
// Exercise
// ############################
// import React from "react";

// import Counter from './components/Counter'
// // don't change the Component name "App"
// export default function App() {
//   return (
//     <div>
//       <p id="counter"></p>
//       <Counter />
//     </div>
//   );
// }

// #############################
// Exercise No.9 To do
// ############################

// import React from "react";

// import Todo from "./components/Todo";

// const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// // don't change the Component name "App"
// export default function App() {
//   console.log('inside app.js')
//   return <ul>Todo: Output todos
//     {DUMMY_TODOS.map(todo => <Todo text={todo}/>)}
//   </ul>;
// }

// ##################################
// Exercise No.10 conditional content
// ##################################

import React from "react";
import CondCon from "./components/ConditionalContent_Ex10";

function App() {
  return (
    <div>
      <CondCon />
    </div>
  );
}

export default App;
