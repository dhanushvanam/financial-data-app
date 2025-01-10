const API_URL = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=linR8yZcqZJFvolShnbhzjsvSiS63wuv';

export const fetchIncomeData = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
};
