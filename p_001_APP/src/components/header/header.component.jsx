import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';


import {styles} from './styles';

export class _Header extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <header className={classes.root}>
                <AppBar position="static" color="primary" classes={{colorPrimary: classes.barColorPrimary}}>
                    <Toolbar>
                        <Typography variant="h6" color="primary" classes={{colorPrimary: classes.label}}>
                            Drummerz.by
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Поиск..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <div className={classes.avatar}>
                            <Avatar>T</Avatar>
                        </div>
                        <div className={classes.avatar}>
                            <Badge className={classes.margin} badgeContent={4} color="primary">
                                <MailIcon />
                            </Badge>
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

export const Header = withStyles(styles)(_Header);

