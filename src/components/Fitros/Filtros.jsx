import { FilterButtonContainer, FilterButton, FiltersContainer, TareasRestantes } from "./Filtros.components"

const Filtros = ({total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete}) => {
    return (
      
        <FiltersContainer className="w-full ">
          <TareasRestantes total={total}/>
          <FilterButtonContainer>
          <FilterButton action={() => showAllTodos()} active={activeFilter} filter='Todas' />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Pendientes' />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completadas' />

          </FilterButtonContainer>
  
          <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-green-400 cursor-pointer transition-all duration-300 ease-in-out">
            Limpiar
          </button>
        </FiltersContainer>
    
    );
  }
 
  

export {Filtros}