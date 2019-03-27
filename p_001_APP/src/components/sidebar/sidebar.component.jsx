import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex'
    },
    mainWrapper: {
        width: '100%',
        backgroundColor: '#363535'
    },
    media: {
        height: 140,
    },
    item: {
        color: '#fff'
    },
    button: {
        minWidth: 200,
        maxWidth: 300
    }
});

class _Sidebar extends React.Component {
    onTabClick = () => {
        alert('Hello')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainWrapper}>
            <AppBar position="static" color="default">
                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    variant="standard"
                >
                    <Tab label="Форум" onClick={this.onTabClick}/>
                    <Tab label="Блоги" />
                    <Tab label="Shop" />
                </Tabs>
            </AppBar>
            </div>
        );
    }
}

export const SideBar = withStyles(styles)(_Sidebar);