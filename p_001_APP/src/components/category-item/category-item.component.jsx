import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import {NavLink} from 'react-router-dom';

const styles = {
    card: {
        width: 345,
        marginTop: 15,
        height: 240,
        marginRight: 15,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    media: {
        
    },
};

class _CategoryCard extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <Card className={classes.card}>
                <CardActionArea>
                    <Icon color="secondary">
                        school
                    </Icon>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink to={`/forum/${this.props.name}`}>
                        <Button size="small" color="primary">
                            Подробнее
                        </Button>
                    </NavLink>
                </CardActions>
          </Card>
        );
    }
}

export const CategoryCard = withStyles(styles)(_CategoryCard);