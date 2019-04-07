import { fade } from '@material-ui/core/styles/colorManipulator';

export const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    toolbarRoot: {
        height: 80
    },
    barColorPrimary: {
        backgroundColor: '#363535'
    },
    button: {
        margin: theme.spacing.unit,
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
    }
});