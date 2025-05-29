import "@testing-library/jest-dom"

// Mock ResizeObserver for tests (Recharts and other libs rely on it)
class ResizeObserverMock {
	observe() {}
	unobserve() {}
	disconnect() {}
}

global.ResizeObserver = ResizeObserverMock
if (typeof window !== "undefined") {
	// @ts-ignore
	window.ResizeObserver = ResizeObserverMock
}
