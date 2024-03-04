import React, { useState, useRef, useEffect } from "react";

const Tareas = ({ todo, handleSetCompleted, handleDelete, handleEdit }) => {
  const { id, title, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleTitleEdit = () => {
    handleEdit(id, newTitle);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewTitle(title);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-solid border-gray-600">
      <div className="flex items-center">
        {completed ? (
          <div
            onClick={() => handleSetCompleted(id)}
            className="bg-green-700 p-1 rounded-full cursor-pointer"
          >
            <img
              className="h-4 w-4"
              src="/check-icon.svg"
              alt="Check icon"
            />
          </div>
        ) : (
          <span
            onClick={() => handleSetCompleted(id)}
            className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"
          ></span>
        )}

        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            className={"pl-3" + (completed && "line-through")}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <p className={"pl-3" + (completed && "line-through")}>{title}</p>
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <>
            <button
              onClick={handleTitleEdit}
              className="bg-green-500 text-white px-2 py-1 rounded mr-2 transition-all duration-300 ease-in"
            >
              Guardar
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-red-500 text-white px-2 py-1 rounded transition-all duration-300 ease-in"
            >
              Cancelar
            </button>
          </>
        ) : (
          <img
            onClick={() => setIsEditing(true)}
            className="h-5 w-5 cursor-pointer mr-2 transition-all duration-300 ease-in hover:border-blue-500"
            src="/edit-icon.svg"
            alt="Edit Icon"
          />
        )}
        <img
          onClick={() => handleDelete(id)}
          className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
          src="/close-icon.svg"
          alt="Close Icon"
        />
      </div>
    </div>
  );
};

export { Tareas };
