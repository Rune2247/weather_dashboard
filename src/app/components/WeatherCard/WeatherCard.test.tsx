import { render } from "@testing-library/react"
import { WiDaySunny } from "react-icons/wi"
import { WeatherCard } from "./WeatherCard"

describe("WeatherCard", () => {
	it("should match snapshot", () => {
		const { baseElement } = render(
			<WeatherCard
				title="Test Title"
				value={42}
				unit="°C"
				icon={<WiDaySunny />}
			/>
		)
		expect(baseElement).toMatchSnapshot()
	})

	it("renders the title", () => {
		const { getByText } = render(
			<WeatherCard
				title="Temperature"
				value={21}
				unit="°C"
				icon={<WiDaySunny />}
			/>
		)
		expect(getByText("Temperature")).toBeInTheDocument()
	})

	it("renders the value", () => {
		const { getByText } = render(
			<WeatherCard
				title="Temperature"
				value={21}
				unit="°C"
				icon={<WiDaySunny />}
			/>
		)
		expect(getByText("21")).toBeInTheDocument()
	})

	it("renders the unit", () => {
		const { getByText } = render(
			<WeatherCard
				title="Temperature"
				value={21}
				unit="°C"
				icon={<WiDaySunny />}
			/>
		)
		expect(getByText("°C")).toBeInTheDocument()
	})

	it("renders the icon", () => {
		const { container } = render(
			<WeatherCard
				title="Sunny"
				value={30}
				icon={<WiDaySunny data-testid="weather-icon" />}
			/>
		)
		expect(
			container.querySelector('[data-testid="weather-icon"]')
		).toBeInTheDocument()
	})
})
