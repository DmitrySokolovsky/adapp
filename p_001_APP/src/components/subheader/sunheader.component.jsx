import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {styles} from './styles';

class _Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            btnsVisible: false
        }
    }

    toggleBtns = () => {
        this.setState({
            btnsVisible: !this.state.btnsVisible
        });
    }

    render() {
        const { classes } = this.props;
        const { btnsVisible } = this.state;
        return(
            <header className={classes.root}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={this.toggleBtns}/>
                        </IconButton>
                        <div className={!btnsVisible && classes.buttonsAnimation}>
                            <Button className={classes.button}>Форум</Button>
                            <Button className={classes.button}>Блог</Button>
                        </div>
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
                            <Badge className={classes.margin} classes={{ badge: classes.badge }} badgeContent={4} color="primary">
                                <Avatar>T</Avatar>
                            </Badge>
                        </div>
                    </Toolbar>
            </header>
        );
    }
}

export const SubHeaderMenu = withStyles(styles)(_Header);

