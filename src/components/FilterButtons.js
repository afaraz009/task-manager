import React from 'react';

function FilterButtons({ currentFilter, onFilterChange, taskCounts }) {
  const filters = [
    { key: 'all', label: 'All', count: taskCounts.all },
    { key: 'active', label: 'Active', count: taskCounts.active },
    { key: 'completed', label: 'Completed', count: taskCounts.completed }
  ];

  return (
    <div className="flex justify-center gap-2 mb-6">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentFilter === filter.key
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;