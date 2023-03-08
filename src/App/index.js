import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*const defaultTodos = [
  { text: 'Job interview for Frontend Developer', completed: true },
  { text: 'Wash the dishes and clean the house', completed: true },
  { text: 'Shower the dogs', completed: false },
  { text: 'Make the lunch for Andrea', completed: false },
  { text: 'Take photos for Linkedin profile', completed: false },
];
*/

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
