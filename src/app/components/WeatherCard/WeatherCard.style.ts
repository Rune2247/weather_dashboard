import { colors } from "@/theme"

export const styles = {
	container: {
		display: "flex",
		alignItems: "center",
		background: colors.background,
		borderRadius: "1rem",
		boxShadow: colors.shadow,
		padding: "1.25rem 1.5rem",
		margin: "0.5rem",
		minWidth: 180,
		minHeight: 100,
		transition: "box-shadow 0.2s",
		gap: "1rem"
	},
	icon: {
		fontSize: "2.2rem",
		color: colors.primary,
		display: "flex",
		alignItems: "center"
	},
	title: {
		fontSize: "1rem",
		color: colors.textSecondary,
		marginBottom: 4
	},
	value: {
		fontSize: "1.4rem",
		fontWeight: 600,
		color: colors.text
	},
	unit: {
		fontSize: "1rem",
		color: colors.primary,
		marginLeft: 4
	}
}
