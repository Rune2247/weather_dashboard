import type { CSSProperties } from "react"

export const styles: Record<string, CSSProperties> = {
	page: {
		padding: 24
	},
	weatherCards: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		gap: "1rem",
		marginBottom: 32,
		width: "100%"
	}
}
