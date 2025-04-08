import { useWeather } from '../hooks/useWeather';
const Forecast = () => {
  const { forecastData } = useWeather();
  if (!forecastData) return null;
  const groupedByDate = {};
forecastData.list.forEach(item => {
  const date = new Date(item.dt * 1000).toLocaleDateString();
  if (!groupedByDate[date]) groupedByDate[date] = [];
  groupedByDate[date].push(item);
});
const dailyForecast = Object.values(groupedByDate).map(entries => {
  return entries.reduce((closest, curr) => {
    const targetHour = 12;
    const currHour = new Date(curr.dt * 1000).getHours();
    const closestHour = new Date(closest.dt * 1000).getHours();
    return Math.abs(currHour - targetHour) < Math.abs(closestHour - targetHour) ? curr : closest;
  });
});

const forecastDays = dailyForecast.slice(0, 5);

  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {forecastDays.map((day, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="font-medium mb-2 dark:text-white">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <img 
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
              alt={day.weather[0].description}
              className="mx-auto"
            />
            <div className="flex justify-between mt-2">
              <span className="font-bold dark:text-white">{Math.round(day.main.temp_max)}°C</span>
              <span className="text-gray-500 dark:text-gray-400">{Math.round(day.main.temp_min)}°C</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;