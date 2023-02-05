import { grey, pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles" 
import { Component } from "react";

const theme = createTheme({
    typography: {
        allVariants: {
            textTransform: "none",
            fontSize: 15,
        },
    },
    palette: {
        primary: {
            main: grey[700],
        },
        secondary: {
            main: pink[500],
        },
    },
    Components: {
        MuiTypography: {
            defaultProps: {
                sx: {
                    px: 1
                },
                variant: 'subtitle2',
                textTransform: 'capitalize'
            }
        },
        MuiStack: {
            defaultProps: {
                sx: {
                    px: 2,
                    py: 1,
                },
                spacing: 2,
                direction: 'row'
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 2,
            }
        },
        MuiLink: {
            defaultProps: {
                sx: {
                    color: theme => theme.palette.primary.main
                },
                underline: "none"
            }
        },
        MuiButton: {
            defaultProps: {
                size: 'small',
                p: 0,
                disableRipple: true,
            },
            variant: 'text',
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            }
        }
    }
});

const AppThemeProvider = (prop) => {
  return (
    <ThemeProvider theme= {theme}>{prop.children}</ThemeProvider>
  )
}

export default AppThemeProvider