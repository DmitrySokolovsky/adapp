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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    card: {
        width: 345,
        marginTop: 15,
        height: 400,
        marginRight: 15,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    media: {
        
    },
};

class _CategoryCard extends React.PureComponent {
    render() {
        const { classes, cardData } = this.props;
        return(
            <Card className={classes.card}>
                <CardActionArea>
                    <Icon color="secondary">
                        There will be image
                    </Icon>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {cardData.name}
                        </Typography>
                        <Typography component="p">
                            {cardData.description}
                        </Typography>
                        <Typography component="p">
                            Последние темы
                        </Typography>
                        <List>
                            {
                                cardData.items ? cardData.items.map(item => {
                                    return (
                                        <ListItem key={item.id}>
                                            <ListItemText
                                                primary={item.name}
                                            />
                                        </ListItem>
                                    )
                                }) : 
                                <Typography component="p">
                                    Тем пока что нет =(
                                </Typography>
                            }
                        </List>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink to={`/forum/category/${cardData.id}`}>
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