import { colors } from "@/theme"
import type { FutureWeatherApiResponse } from "@/types"
import React from "react"
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from "recharts"
import { styles } from "./ForecastChart.style"

// Helper to aggregate hourly data for the chart
function getHourlyData(futureWeather: FutureWeatherApiResponse) {
	const dataPoints = futureWeather.hourly.time.map((time, index) => {
		const dateObj = new Date(time)
		const weekday = dateObj.toLocaleDateString("en-UK", { weekday: "long" })
		return {
			date: weekday,
			hour: dateObj.getHours(),
			time,
			temp: futureWeather.hourly.temperature_2m[index]
		}
	})

	dataPoints.push(dataPoints[dataPoints.length - 1])
	return dataPoints
}

export const ForecastChart: React.FC<{
	futureWeather: FutureWeatherApiResponse
}> = ({ futureWeather }) => {
	const data = getHourlyData(futureWeather)

	const ticks = Array.from(new Set(data.map((d) => d.date)))

	return (
		<div
			style={styles.container}
			data-testid="forecast-chart"
		>
			<ResponsiveContainer
				width="100%"
				height="100%"
			>
				<LineChart
					data={data}
					margin={{ top: 16, right: 32, left: 32, bottom: 24 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="date"
						interval={0}
						angle={-45}
						textAnchor="end"
						height={90}
						tick={{ dy: 36, fontSize: 16, fontWeight: 500 }}
						ticks={ticks}
					/>
					<YAxis
						yAxisId="left"
						label={{
							value: "°C",
							angle: -90,
							position: "insideLeft",
							offset: 16
						}}
						domain={[
							(dataMin: number) => Math.floor(dataMin - 2),
							(dataMax: number) => Math.ceil(dataMax + 2)
						]}
						padding={{ top: 8, bottom: 8 }}
					/>
					<Tooltip
						formatter={(value: number, name: string, props: any) => [
							`${value}°C`,
							"Temperature"
						]}
						labelFormatter={(label: string, payload: any) => {
							if (!payload || payload.length === 0) return label
							const { payload: point } = payload[0]
							return `${label} ${point.hour}:00`
						}}
					/>
					<Line
						yAxisId="left"
						type="monotone"
						dataKey="temp"
						name="Temperature (°C)"
						stroke={colors.primary}
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
