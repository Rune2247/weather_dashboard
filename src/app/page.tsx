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
		<div
			className="page"
			style={styles.page}
		>
			{isLoading && <p>Loading weather...</p>}
			{error && <p style={{ color: "red" }}>{error}</p>}
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
						title="Can we go to crossfit?"
						value={
							futureWeather
								? willRainNextHour(futureWeather)
									? "No, it will rain!"
									: "Yes, go for it!"
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
