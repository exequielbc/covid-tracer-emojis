import { createTheme, responsiveFontSizes } from "@mui/material";

const themeWithoutResponsiveFont = createTheme({
  typography: {

	},
	palette: {
		
	}
});

export const theme = responsiveFontSizes(themeWithoutResponsiveFont);