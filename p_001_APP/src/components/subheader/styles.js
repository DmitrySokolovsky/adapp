import { fade } from '@material-ui/core/styles/colorManipulator';
import logo from '../../assets/logo.jpg'

export const styles = theme => ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        zIndex: 3,
        width: '100%'
    },
    toolbarRoot: {
        height: 80
    },
    barColorPrimary: {
        backgroundColor: '#363535'
    },
    button: {
        margin: theme.spacing.unit,
        fontFamily: 'url(../../../assets/fonts/Poppins-Regular.ttf)',
        fontWeight: 'bold'
    },
    label: {
        color: '#fff'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    search: {
        borderLeftWidth: 2,
        borderLeftColor: '#b4d3d3',
        borderLeftStyle: 'solid',
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        display: 'flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
    },
    searchIcon: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        borderRadius: 'none',
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
    },
    grow: {
        flexGrow: 1,
    },
    avatar: {
        marginLeft: '1rem',
    },
    badge: {
        marginRight: 39,
        marginTop: 5,
        backgroundColor: '#b4d3d3'
    },
    buttonsAnimation: {
        display: 'none'
    },
    logo: {
        fontWeight: 'bold'
    }
});

export const stylesBack = theme => ({
    root: {
        height: 725,
        width: '100%',
        display: 'flex'
    },
    leftBlock: {
        position: 'relative',
        height: '100%',
        width: '55%',
        backgroundColor: '#b4d3d3'
    },
    rightBlock: {
        position: 'relative',
        height: '100%',
        width: '45%',
    },
    leftBlockContent: {
        position: 'absolute',
        width: '80%',
        top: 'calc(50% - 185px)',
        right: 0,
        height: 370,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '25px'
    },
    rightBlockContent: {
        position: 'absolute',
        width: '80%',
        top: 'calc(50% - 185px)',
        left: 0,
        height: 370,
    }
});