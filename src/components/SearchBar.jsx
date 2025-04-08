import { useState } from 'react';
import { useWeather } from '../hooks/useWeather';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useWeather();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="bg-stone-500 hover:bg-stone-600 text-white px-4 py-2 rounded transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;