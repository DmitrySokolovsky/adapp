import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import logo from '../../assets/adw.jpg'

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    mainWrapper: {
        width: '15%',
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
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={logo}
                        title="Contemplative Reptile"
                    />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Реклама
                </Typography>
                <Typography component="p">
                    Здесь может быть Ваша реклама
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
            </Card>
            </div>
        );
    }
}

export const SideBar = withStyles(styles)(_Sidebar);