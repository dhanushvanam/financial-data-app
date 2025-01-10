import React, { useState } from 'react';

interface FilterProps {
  onFilter: (filters: any) => void;
  onReset: () => void;
}

const Filters: React.FC<FilterProps> = ({ onFilter, onReset }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minRevenue, setMinRevenue] = useState('');
  const [maxRevenue, setMaxRevenue] = useState('');
  const [minNetIncome, setMinNetIncome] = useState('');
  const [maxNetIncome, setMaxNetIncome] = useState('');

  const handleFilter = () => {
    onFilter({
      startDate,
      endDate,
      minRevenue,
      maxRevenue,
      minNetIncome,
      maxNetIncome,
    });
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setMinRevenue('');
    setMaxRevenue('');
    setMinNetIncome('');
    setMaxNetIncome('');
    onReset();
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Start Date (YYYY-MM-DD)"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <input
        type="text"
        placeholder="End Date (YYYY-MM-DD)"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <input
        type="number"
        placeholder="Min Revenue"
        value={minRevenue}
        onChange={(e) => setMinRevenue(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <input
        type="number"
        placeholder="Max Revenue"
        value={maxRevenue}
        onChange={(e) => setMaxRevenue(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <input
        type="number"
        placeholder="Min Net Income"
        value={minNetIncome}
        onChange={(e) => setMinNetIncome(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <input
        type="number"
        placeholder="Max Net Income"
        value={maxNetIncome}
        onChange={(e) => setMaxNetIncome(e.target.value)}
        className="border px-2 py-1 mr-2"
      />

      {/* Apply Filters Button */}
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 mr-2"
      >
        Apply Filters
      </button>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="bg-gray-500 text-white px-4 py-2"
      >
        Clear/Reset
      </button>
    </div>
  );
};

export default Filters;
