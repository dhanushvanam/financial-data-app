import React from 'react';

interface DataRow {
  date: string;
  revenue: number;
  netIncome: number;
  grossProfit: number;
  eps: number;
  operatingIncome: number;
}

interface DataTableProps {
  data: DataRow[];
  onSort: (key: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onSort }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => onSort('date')}
          >
            Date &#x2195;
          </th>
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => onSort('revenue')}
          >
            Revenue &#x2195;
          </th>
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => onSort('netIncome')}
          >
            Net Income &#x2195;
          </th>
          <th className="border px-4 py-2">Gross Profit</th>
          <th className="border px-4 py-2">EPS</th>
          <th className="border px-4 py-2">Operating Income</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{row.date}</td>
            <td className="border px-4 py-2">{row.revenue}</td>
            <td className="border px-4 py-2">{row.netIncome}</td>
            <td className="border px-4 py-2">{row.grossProfit}</td>
            <td className="border px-4 py-2">{row.eps}</td>
            <td className="border px-4 py-2">{row.operatingIncome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
