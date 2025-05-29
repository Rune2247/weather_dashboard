import { render } from "@testing-library/react"
import { TopBar } from "./TopBar"

describe("TopBar", () => {
	it("should match snapshot", () => {
		const { baseElement } = render(<TopBar />)
		expect(baseElement).toMatchSnapshot()
	})

	it("renders the title", () => {
		const { getByText } = render(<TopBar />)
		expect(getByText("Weather Dashboard")).toBeInTheDocument()
	})
})
