import { render, screen } from "@testing-library/react"
import Home from "./page"

jest.mock("../hooks/useWeather", () => ({
	useWeather: () => ({
		weather: {
			current_weather: {
				weathercode: 2,
				temperature: 20,
				windspeed: 10,
				winddirection: 90
			}
		},
		futureWeather: {
			hourly: {
				time: ["2025-05-29T00:00", "2025-05-29T01:00"],
				precipitation: [0, 0],
				temperature_2m: [20, 21],
				weathercode: [2, 2]
			}
		},
		isLoading: false,
		error: null
	})
}))

describe("Home page", () => {
	it("should render all weather cards", () => {
		render(<Home />)
		expect(screen.getByText("Current Weather")).toBeInTheDocument()
		expect(screen.getByText("Temperature")).toBeInTheDocument()
		expect(screen.getByText("Wind Speed")).toBeInTheDocument()
		expect(screen.getByText("Wind Direction")).toBeInTheDocument()
		expect(screen.getByText("Can we go to crossfit?")).toBeInTheDocument()
	})

	it("should render the ForecastChart if futureWeather is present", () => {
		render(<Home />)
		expect(screen.getByTestId("forecast-chart")).toBeInTheDocument()
	})

	it("should match snapshot", () => {
		const { baseElement } = render(<Home />)
		expect(baseElement).toMatchSnapshot()
	})
})
