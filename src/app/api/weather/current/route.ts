import { NextRequest, NextResponse } from "next/server"

// Hardcoded coordinates for Aarhus, Denmark
const LAT = 56.1518
const LON = 10.2064

export async function GET(_: NextRequest) {
	const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true`

	try {
		const res = await fetch(url)
		if (!res.ok) {
			return NextResponse.json(
				{ error: "Failed to fetch weather data" },
				{ status: 502 }
			)
		}
		const data = await res.json()
		return NextResponse.json(data)
	} catch {
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		)
	}
}
