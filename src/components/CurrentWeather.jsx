import { useWeather } from '../hooks/useWeather';

const CurrentWeather = () => {
  const { weatherData, loading, error } = useWeather();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-300">
        {error}
      </div>
    );
  }
  
  if (!weatherData) {
    return (
      <div className="text-center py-10 text-gray-500 dark:text-gray-400">
        Search for a city to view weather information
      </div>
    );
  }
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold dark:text-white">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <div className="text-gray-500 dark:text-gray-400">
          {new Date(weatherData.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div>
            <img 
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
              alt={weatherData.weather[0].description}
              className="w-24 h-24"
            />
          </div>
          <div className="ml-4">
            <div className="text-5xl font-bold dark:text-white">
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div className="text-gray-600 dark:text-gray-300 capitalize">
              {weatherData.weather[0].description}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-stone-500 dark:bg-gray-700 p-3 rounded">
            <div className="text-gray-600 dark:text-gray-300">Humidity</div>
            <div className="font-bold dark:text-white">{weatherData.main.humidity}%</div>
          </div>
          <div className="bg-gray-700 dark:bg-gray-700 p-3 rounded">
            <div className="text-gray-600 dark:text-gray-300">Wind</div>
            <div className="font-bold dark:text-white">{weatherData.wind.speed} km/h</div>
          </div>
          <div className="bg-gray-700 dark:bg-gray-700 p-3 rounded">
            <div className="text-gray-600 dark:text-gray-300">Feels Like</div>
            <div className="font-bold dark:text-white">{Math.round(weatherData.main.feels_like)}°C</div>
          </div>
          <div className="bg-gray-700 dark:bg-gray-700 p-3 rounded">
            <div className="text-gray-600 dark:text-gray-300">Pressure</div>
            <div className="font-bold dark:text-white">{weatherData.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;