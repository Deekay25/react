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


import React from "react";

import Counter from './components/Counter'
// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <p id="counter"></p>
      <Counter />
    </div>
  );
}
