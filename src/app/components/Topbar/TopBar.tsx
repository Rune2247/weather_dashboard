"use client"
import React, { useEffect, useState } from "react"
import { styles } from "./TopBar.style"

const WeatherIcon = () => (
	<span style={styles.icon}>
		<span
			role="img"
			aria-label="weather"
		>
			☀️
		</span>
	</span>
)

export const TopBar: React.FC = () => {
	const [now, setNow] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 1000)
		return () => clearInterval(interval)
	}, [])

	const pad = (n: number) => n.toString().padStart(2, "0")
	const time = `${pad(now.getHours())}:${pad(now.getMinutes())}`
	const date = `${pad(now.getDate())}-${pad(
		now.getMonth() + 1
	)}-${now.getFullYear()}`

	return (
		<header style={{ ...styles.header, position: "fixed", top: 0, left: 0 }}>
			<WeatherIcon />
			<span style={styles.title}>Weather Dashboard</span>
			<div style={{ ...styles.timeBox, textAlign: "right" }}>
				<div style={styles.time}>{time}</div>
				<div style={styles.date}>{date}</div>
			</div>
		</header>
	)
}
