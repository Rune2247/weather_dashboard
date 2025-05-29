import "@testing-library/jest-dom"

class ResizeObserverMock {
	observe() {}
	unobserve() {}
	disconnect() {}
}

global.ResizeObserver = ResizeObserverMock
if (typeof window !== "undefined") {
	window.ResizeObserver = ResizeObserverMock
}
