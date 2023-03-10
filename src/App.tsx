import React from 'react';
import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish TypeScript cource" }];
  return (
    <div className="App">
      <TodoList items={todos}/> 
    </div>
  );
}

export default App;
