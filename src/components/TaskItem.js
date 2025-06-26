import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors min-w-[600px]">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      
      <span
        className={`flex-1 text-left ${
          task.completed
            ? 'text-gray-500 line-through'
            : 'text-gray-800'
        }`}
      >
        {task.text}
      </span>
      
      <button
        onClick={onDelete}
        className="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label="Delete task"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;