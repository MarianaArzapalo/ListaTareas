import { Title } from './components/Title'; 
import { Input } from './components/Input';
import { Lista } from './components/Lista/Lista';
import { Tareas } from './components/Tareas';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Elaboracion de informe',
      completed: false,
    },
    {
      id: 2,
      title: 'Pruebas del proyecto',
      completed: false,
    },
    {
      id: 3,
      title: 'Reunion de avances',
      completed: false,
    },
    {
      id: 4,
      title: 'Capacitaciones',
      completed: false,
    }
  ]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTareas, setFilteredTareas] = useState(todos); 

  const addTarea =(title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTarea = {
      id: lastId + 1,
      title,
      completed: false
    };
    const listaTareas = [...todos];
    listaTareas.push(newTarea);
    setTodos(listaTareas);
  };

  const handleSetCompleted = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedList);
  }; 

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };
  const handleEdit = (id, newTitle) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });

    setTodos(updatedList);
  };
  const showAllTodos = () => {
    setActiveFilter('all');
  };

  const showActiveTodos = () => {
    setActiveFilter('active');
  };

  const showCompletedTodos = () => {
    setActiveFilter('completed');
  };

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTareas(todos);
    } else if (activeFilter === 'active') {
        const activeTodos = todos.filter(todo => !todo.completed);
        setFilteredTareas(activeTodos);
    } else if (activeFilter === 'completed') {
        const completedTodos = todos.filter(todo => todo.completed);
        setFilteredTareas(completedTodos);
    }
    
  }, [activeFilter, todos]);

  return (
    <div className='h-screen bg-gradient-to-r from-blue-500 to-green-500 font-inter text-gray-850'>
      <div className='container flex flex-col items-center justify-center h-full'>
        <Title /> 
        <Input addTarea={addTarea}/>
        <Lista 
          todos={filteredTareas}
          activeFilter={activeFilter}
          handleSetCompleted={handleSetCompleted}
          handleDelete={handleDelete}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleClearComplete={handleClearComplete} 
           handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
