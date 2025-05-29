import React from "react"
import { IconType } from "react-icons"
import { styles } from "./WeatherCard.style"

interface WeatherCardProps {
	title: string
	value: React.ReactNode
	unit?: string
	icon?: React.ReactNode | IconType
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
	title,
	value,
	unit,
	icon
}) => {
	return (
		<div style={styles.container}>
			<div style={styles.icon}>
				{typeof icon === "function" ? React.createElement(icon) : icon}
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div style={styles.title}>{title}</div>
				<div style={styles.value}>
					{value}
					{unit !== undefined && <span style={styles.unit}>{unit}</span>}
				</div>
			</div>
		</div>
	)
}
