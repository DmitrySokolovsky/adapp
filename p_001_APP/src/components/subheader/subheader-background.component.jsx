import React from 'react';
import { stylesBack } from './styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from '../../constants/themes'

class _SubheaderBackground extends React.PureComponent {
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.leftBlock}>
                    <div className={classes.leftBlockContent}>
                    <MuiThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h2" align="left" component="h1">
                            DRUMMER.BY
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" component="h5">
                            Keep calm and drum on!
                        </Typography>
                    </MuiThemeProvider>
                    </div>
                </div>
                <div className={classes.rightBlock}>
                    <div className={classes.rightBlockContent}>
                        <div className="img"/>
                    </div>
                </div>
            </div>
        );
    }
}

export const SubheaderBackground = withStyles(stylesBack)(_SubheaderBackground);