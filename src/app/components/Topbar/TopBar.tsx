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

interface TopBarProps {
	showClock?: boolean
}

export const TopBar: React.FC<TopBarProps> = ({ showClock = true }) => {
	const [now, setNow] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => setNow(new Date()), 1000)
		return () => clearInterval(interval)
	}, [])

	const pad = (number: number) => number.toString().padStart(2, "0")
	const time = `${pad(now.getHours())}:${pad(now.getMinutes())}`
	const date = `${pad(now.getDate())}-${pad(
		now.getMonth() + 1
	)}-${now.getFullYear()}`

	return (
		<header style={{ ...styles.header, position: "fixed", top: 0, left: 0 }}>
			<WeatherIcon />
			<span style={styles.title}>Weather Dashboard</span>
			{showClock && (
				<div style={styles.timeBox}>
					<div style={styles.time}>{time}</div>
					<div style={styles.date}>{date}</div>
				</div>
			)}
		</header>
	)
}
