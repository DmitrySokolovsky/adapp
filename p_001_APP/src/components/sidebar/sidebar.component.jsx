import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    mainWrapper: {
        width: '10%',
        padding: '15px'
    },
    media: {
        height: 140,
    },
});

class _Sidebar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainWrapper}>
            <Paper>
            <List component="nav" className={classes.root}>
                <ListItem button>
                    <ListItemText primary="Форум" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Блог" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Контакты" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary="Shop" />
                </ListItem>
            </List>
            </Paper>
            </div>
        );
    }
}

export const SideBar = withStyles(styles)(_Sidebar);