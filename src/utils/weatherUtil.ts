import type { FutureWeatherApiResponse } from "@/types"
import type { IconType } from "react-icons"
import {
	WiCloud,
	WiDaySunny,
	WiFog,
	WiRain,
	WiSnow,
	WiThunderstorm
} from "react-icons/wi"

/**
 * Determines if it will rain in the next hour based on future weather data.
 *
 * @param futureWeather - The future weather API response containing hourly precipitation and time arrays.
 * @returns {boolean} True if precipitation is expected in the next hour, otherwise false.
 */
export function willRainNextHour(
	futureWeather: FutureWeatherApiResponse
): boolean {
	const now = new Date()
	const nextHourIndex = futureWeather.hourly.time.findIndex((t) => {
		const tDate = new Date(t)
		return tDate > now
	})
	if (nextHourIndex === -1) return false
	// Check precipitation for the next hour
	return futureWeather.hourly.precipitation[nextHourIndex] > 0
}

/**
 * Maps a weather code into a human-readable weather condition, icon, and title.
 *
 * @param weatherCode - The numeric weather code from the API.
 * @source https://www.meteomatics.com/en/api/available-parameters/weather-parameter/general-weather-state/
 * @returns {{ title: string, icon: React.ComponentType, description: string }}
 */
export function translateCondition(weatherCode: number): {
	icon: IconType
	description: string
} {
	switch (weatherCode) {
		case 0:
			return { icon: WiDaySunny, description: "Clear sky" }
		case 1:
			return { icon: WiDaySunny, description: "Mainly clear" }
		case 2:
			return { icon: WiCloud, description: "Partly cloudy" }
		case 3:
			return { icon: WiCloud, description: "Overcast" }
		case 45:
		case 48:
			return { icon: WiFog, description: "Fog or rime fog" }
		case 51:
		case 53:
		case 55:
		case 56:
		case 57:
			return { icon: WiRain, description: "Drizzle or freezing drizzle" }
		case 61:
		case 63:
		case 65:
		case 66:
		case 67:
		case 80:
		case 81:
		case 82:
			return { icon: WiRain, description: "Rain or rain showers" }
		case 71:
		case 73:
		case 75:
		case 77:
		case 85:
		case 86:
			return { icon: WiSnow, description: "Snow or snow showers" }
		case 95:
		case 96:
		case 99:
			return {
				icon: WiThunderstorm,
				description: "Thunderstorm (possibly with hail)"
			}
		default:
			return { icon: WiCloud, description: "Unknown weather" }
	}
}

/**
 * Converts a wind direction in degrees to a compass direction (N, NE, E, etc).
 *
 * @param degrees - The wind direction in degrees.
 * @returns {string} The compass direction.
 */
export function windDirectionToCompass(degrees: number): string {
	const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
	const index = Math.round((degrees % 360) / 45) % 8
	return directions[index]
}
