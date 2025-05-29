import { useEffect, useState } from "react"
import type {
	CurrentWeatherApiResponse,
	FutureWeatherApiResponse
} from "../types"

export function useWeather() {
	const [weather, setWeather] = useState<CurrentWeatherApiResponse | null>(null)
	const [futureWeather, setFutureWeather] =
		useState<FutureWeatherApiResponse | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchWeather = async () => {
			setIsLoading(true)
			let currentData: CurrentWeatherApiResponse | null = null
			let futureData: FutureWeatherApiResponse | null = null
			let errors: string[] = []

			try {
				const res = await fetch("/api/weather/current")
				if (!res.ok) throw new Error("Failed to fetch current weather data")
				currentData = await res.json()
			} catch (err: any) {
				errors.push(err.message)
			}

			try {
				const res = await fetch("/api/weather/future")
				if (!res.ok) throw new Error("Failed to fetch future weather data")
				futureData = await res.json()
			} catch (err: any) {
				errors.push(err.message)
			}

			setWeather(currentData)
			setFutureWeather(futureData)
			setError(errors.length ? errors.join(" | ") : null)
			setIsLoading(false)
		}

		fetchWeather()
		const interval = setInterval(fetchWeather, 25 * 60 * 1000)

		return () => clearInterval(interval)
	}, [])

	return { weather, futureWeather, isLoading, error }
}
