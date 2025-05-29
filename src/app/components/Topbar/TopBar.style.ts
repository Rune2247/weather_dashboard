import { colors } from "@/theme"

export const styles = {
	header: {
		width: "100vw",
		background: colors.background,
		color: colors.text,
		boxShadow: colors.shadowLight,
		padding: "0.75rem 2rem",
		display: "flex",
		alignItems: "center",
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: 100,
		minHeight: 56,
		fontWeight: 600,
		fontSize: "1.35rem",
		letterSpacing: 0.5,
		borderBottom: `1px solid ${colors.border}`
	},
	icon: {
		fontSize: 28,
		marginRight: 16,
		display: "flex",
		alignItems: "center"
	},
	title: {
		flex: 1
	},
	timeBox: {
		textAlign: "right",
		minWidth: 80,
		lineHeight: 1.1
	},
	time: {
		fontSize: 18,
		fontWeight: 600
	},
	date: {
		fontSize: 13,
		color: colors.textSecondary
	}
}
