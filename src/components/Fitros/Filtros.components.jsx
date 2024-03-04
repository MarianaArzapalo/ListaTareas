const FiltersContainer = ({ children }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-white border-b border-solid border-gray-600 max-w-xl mx-auto">
        {children}
      </div>
    );
  }
  
  
const TareasRestantes=({total})=>{
    return(
        <p className="text-gray-400 text-sm">
            {total} Tareas 
        </p>
    )
}
const FilterButtonContainer=({children})=>{
    return(
        <div className="flex items-center space-x-2 max-w-xl mx-28">   
            {children}
        </div>
    )
}
const FilterButton=({action, active, filter})=>{
    return(
        <button onClick={action}
        className={`hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out`
        +(active.toLowerCase().includes(filter.toLowerCase())?'text-blue-400': 'text-gray-400')}>
            {filter}
        </button>
    )
}
export{FiltersContainer, TareasRestantes, FilterButtonContainer,FilterButton}