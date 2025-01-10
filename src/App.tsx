import React, { useEffect, useState } from 'react';
import { fetchIncomeData } from './api';
import Filters from './components/Filters';
import DataTable from './components/DataTable';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [sortConfig, setSortConfig] = useState({ key: '', ascending: true });

  // Fetch data from API
  useEffect(() => {
    fetchIncomeData().then((response) => {
      setData(response);
      setFilteredData(response);
    });
  }, []);

  // Handle filtering logic
  const handleFilter = (filters: any) => {
    const {
      startDate,
      endDate,
      minRevenue,
      maxRevenue,
      minNetIncome,
      maxNetIncome,
    } = filters;

    const filtered = data.filter((row) => {
      const isInRange =
        (!startDate || row.date >= startDate) &&
        (!endDate || row.date <= endDate) &&
        (!minRevenue || row.revenue >= +minRevenue) &&
        (!maxRevenue || row.revenue <= +maxRevenue) &&
        (!minNetIncome || row.netIncome >= +minNetIncome) &&
        (!maxNetIncome || row.netIncome <= +maxNetIncome);
      return isInRange;
    });

    setFilteredData(filtered);
  };

  // Handle sorting logic
  const handleSort = (key: string) => {
    const ascending = sortConfig.key === key ? !sortConfig.ascending : true;

    setSortConfig({ key, ascending });

    const sortedData = [...filteredData].sort((a, b) => {
      if (key === 'date') {
        return ascending
          ? new Date(a[key]).getTime() - new Date(b[key]).getTime()
          : new Date(b[key]).getTime() - new Date(a[key]).getTime();
      }
      return ascending ? a[key] - b[key] : b[key] - a[key];
    });

    setFilteredData(sortedData);
  };

  // Reset filters and sorting
  const resetFilters = () => {
    setFilteredData(data); // Reset filtered data to original
    setSortConfig({ key: '', ascending: true }); // Clear sorting config
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Data Filtering App</h1>
      <Filters onFilter={handleFilter} onReset={resetFilters} />
      <DataTable data={filteredData} onSort={handleSort} />
    </div>
  );
};

export default App;
