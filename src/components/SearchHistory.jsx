import { useWeather } from '../hooks/useWeather';

const SearchHistory = () => {
  const { searchHistory, fetchWeather } = useWeather();
  
  if (searchHistory.length === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2 dark:text-white">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {searchHistory.map((city, index) => (
          <button
            key={index}
            onClick={() => fetchWeather(city)}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 px-3 py-1 rounded-full text-sm transition dark:text-white"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;