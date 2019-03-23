import { fade } from '@material-ui/core/styles/colorManipulator';

export const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    barColorPrimary: {
        backgroundColor: '#363535'
    },
    label: {
        color: '#fff'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    search: {
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
        marginLeft: '1rem'
    }
});