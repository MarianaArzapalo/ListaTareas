import { useState } from "react";

const Input = ({addTarea}) => {
  const [title,setTitle]=useState('')

    const handleAddTarea = (e) => {
      if (e.key.toLowerCase() === 'enter') {
        addTarea(title);
        setTitle('');
      }
}
    return (
      <div className="mt-6 flex justify-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
          </div>
          <input
            type="text"
            className="focus:shadow-lg font-inter focus:shadow-blue-900 pl-12 w-full py-4 bg-white text-black rounded-xl outline-none transition-all duration-300 ease-in-out max-w-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => handleAddTarea(e)}
                placeholder="Nueva Tarea"
                
          />
        </div>
      </div>
    );
  };
  
  export { Input };
  