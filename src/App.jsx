import { WeatherProvider } from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import SearchHistory from './components/SearchHistory';
import Forecast from './components/Forecast';
import ThemeToggle from './components/ThemeToggle';
function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold dark:text-white">Weather Dashboard</h1>
            <ThemeToggle />
          </div>
          <SearchBar />
          <SearchHistory />
          <CurrentWeather />
          <Forecast />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;