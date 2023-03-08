import React from 'react';
import { AppUI } from './AppUI';

/*const defaultTodos = [
  { text: 'Job interview for Frontend Developer', completed: true },
  { text: 'Wash the dishes and clean the house', completed: true },
  { text: 'Shower the dogs', completed: false },
  { text: 'Make the lunch for Andrea', completed: false },
  { text: 'Take photos for Linkedin profile', completed: false },
];
*/

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);


  // Interpretación de estado de carga
  const [loading, setLoading] = React.useState(true);

  // Estado inicial de TODOS
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Inicio con LocalStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // Verificar si existe, o crear otro nuevo vacio
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem);
        setLoading(false);

      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  // Save Tods
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
