import { Filtros } from "../Fitros"; // Asumiendo que el archivo se llama Filtros.jsx
import { Tareas } from "../Tareas";

const Lista = ({ todos, handleSetCompleted, handleDelete, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Tareas key={todo.id} todo={todo}
                        handleSetCompleted={handleSetCompleted}
                        handleDelete={handleDelete} />
                )
            })}
            <Filtros

                total={todos.length}
                activeFilter={activeFilter}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}
              
            />
        </div>
    )
}
export { Lista }
