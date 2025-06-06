"use client"
import { ForecastChart } from "@/app/components/ForecastChart/ForecastChart"
import { WeatherCard } from "@/app/components/WeatherCard/WeatherCard"
import { useWeather } from "@/hooks/useWeather"
import {
	translateCondition,
	willRainNextHour,
	windDirectionToCompass
} from "@/utils/weatherUtil"
import {
	WiDaySunny,
	WiDirectionUp,
	WiRain,
	WiStrongWind,
	WiThermometer
} from "react-icons/wi"
import { styles } from "./page.style"

export default function Home() {
	const { weather, futureWeather, isLoading, error } = useWeather()

	return (
		<div style={styles.page}>
			{isLoading && <p>Loading weather...</p>}
			{error !== null && <p style={{ color: "red" }}>{error}</p>}
			{weather !== null && weather.current_weather && (
				<div style={styles.weatherCards}>
					<WeatherCard
						title="Current Weather"
						value={
							translateCondition(weather.current_weather.weathercode)
								.description
						}
						icon={translateCondition(weather.current_weather.weathercode).icon}
					/>
					<WeatherCard
						title="Temperature"
						value={weather.current_weather.temperature}
						unit="°C"
						icon={WiThermometer}
					/>
					<WeatherCard
						title="Wind Speed"
						value={weather.current_weather.windspeed}
						unit="km/h"
						icon={WiStrongWind}
					/>
					<WeatherCard
						title="Wind Direction"
						value={`${windDirectionToCompass(
							weather.current_weather.winddirection
						)} (${weather.current_weather.winddirection}°)`}
						icon={WiDirectionUp}
					/>
					<WeatherCard
						title="Will I need an umbrella Right Now?"
						value={
							futureWeather
								? willRainNextHour(futureWeather)
									? "Yes, rain is on the way."
									: "No, you can leave it at home!"
								: "-"
						}
						icon={
							futureWeather && willRainNextHour(futureWeather)
								? WiRain
								: WiDaySunny
						}
					/>
				</div>
			)}
			{futureWeather !== null && futureWeather.hourly && (
				<ForecastChart futureWeather={futureWeather} />
			)}
		</div>
	)
}
