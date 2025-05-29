import {
	WiCloud,
	WiDaySunny,
	WiFog,
	WiRain,
	WiSnow,
	WiThunderstorm
} from "react-icons/wi"
import {
	translateCondition,
	willRainNextHour,
	windDirectionToCompass
} from "../utils/weatherUtil"

describe("willRainNextHour", () => {
	it("returns true if precipitation is expected in the next hour", () => {
		const now = new Date()
		const nextHour = new Date(now.getTime() + 60 * 60 * 1000).toISOString()
		const mock = {
			hourly: {
				time: [now.toISOString(), nextHour],
				precipitation: [0, 1],
				temperature_2m: [10, 11],
				weathercode: [0, 1]
			}
		}
		expect(willRainNextHour(mock as any)).toBe(true)
	})

	it("returns false if no precipitation in the next hour", () => {
		const now = new Date()
		const nextHour = new Date(now.getTime() + 60 * 60 * 1000).toISOString()
		const mock = {
			hourly: {
				time: [now.toISOString(), nextHour],
				precipitation: [0, 0],
				temperature_2m: [10, 11],
				weathercode: [0, 1]
			}
		}
		expect(willRainNextHour(mock as any)).toBe(false)
	})

	it("returns false if no future hour is found", () => {
		const now = new Date()
		const mock = {
			hourly: {
				time: [now.toISOString()],
				precipitation: [0],
				temperature_2m: [10],
				weathercode: [0]
			}
		}
		expect(willRainNextHour(mock as any)).toBe(false)
	})
})

describe("translateCondition", () => {
	it("returns correct icon and description for known codes", () => {
		expect(translateCondition(0).icon).toBe(WiDaySunny)
		expect(translateCondition(0).description).toBe("Clear sky")
		expect(translateCondition(2).icon).toBe(WiCloud)
		expect(translateCondition(2).description).toBe("Partly cloudy")
		expect(translateCondition(45).icon).toBe(WiFog)
		expect(translateCondition(45).description).toBe("Fog or rime fog")
		expect(translateCondition(51).icon).toBe(WiRain)
		expect(translateCondition(51).description).toBe(
			"Drizzle or freezing drizzle"
		)
		expect(translateCondition(61).icon).toBe(WiRain)
		expect(translateCondition(61).description).toBe("Rain or rain showers")
		expect(translateCondition(71).icon).toBe(WiSnow)
		expect(translateCondition(71).description).toBe("Snow or snow showers")
		expect(translateCondition(95).icon).toBe(WiThunderstorm)
		expect(translateCondition(95).description).toBe(
			"Thunderstorm (possibly with hail)"
		)
	})

	it("returns unknown for unknown code", () => {
		expect(translateCondition(12345).description).toBe("Unknown weather")
	})
})

describe("windDirectionToCompass", () => {
	it("returns correct compass direction", () => {
		expect(windDirectionToCompass(0)).toBe("N")
		expect(windDirectionToCompass(45)).toBe("NE")
		expect(windDirectionToCompass(90)).toBe("E")
		expect(windDirectionToCompass(135)).toBe("SE")
		expect(windDirectionToCompass(180)).toBe("S")
		expect(windDirectionToCompass(225)).toBe("SW")
		expect(windDirectionToCompass(270)).toBe("W")
		expect(windDirectionToCompass(315)).toBe("NW")
		expect(windDirectionToCompass(360)).toBe("N")
	})
})
