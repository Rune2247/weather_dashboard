// Central place for TypeScript types

export type CurrentWeatherApiResponse = {
	latitude: number
	longitude: number
	generationtime_ms: number
	utc_offset_seconds: number
	timezone: string
	timezone_abbreviation: string
	elevation: number
	current_weather_units: {
		time: string
		interval: string
		temperature: string
		windspeed: string
		winddirection: string
		is_day: string
		weathercode: string
	}
	current_weather: {
		time: string
		interval: number
		temperature: number
		windspeed: number
		winddirection: number
		is_day: number
		weathercode: number
	}
}

export type FutureWeatherApiResponse = {
	latitude: number
	longitude: number
	generationtime_ms: number
	utc_offset_seconds: number
	timezone: string
	timezone_abbreviation: string
	elevation: number
	hourly_units: {
		time: string
		temperature_2m: string
		precipitation: string
		weathercode: string
	}
	hourly: {
		time: string[]
		temperature_2m: number[]
		precipitation: number[]
		weathercode: number[]
	}
}
