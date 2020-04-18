import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary : {
            main: '#383838'
        },
        common: {
            white: '#ffffff'
        },
        secondary:{
            main: '#f0f0f0'
        }
    },
    spacing : 10
})

export default theme;