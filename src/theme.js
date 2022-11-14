
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginRight: 20,
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    fontSize: 18,
                    color: '#7C8DB0',
                }
            }
        },
    }
});

export default theme;