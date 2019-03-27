import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
      marginTop: '15px',
      marginRight: '15px',
      marginBottom: '15px',
      display: 'flex',
      flexDirection: 'column'
    },
    table: {
      width: '100%',
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    tableHeader: {
        height: '3rem'
    }
});

const mock = [
    {
        name: 'Sell drums',
        author: 'Dos',
        posts: 55,
        latestPostAuthor: 'Dimmy'
    },
    {
        name: 'Sonor DM',
        author: 'Pes',
        posts: 2,
        latestPostAuthor: 'Dos'
    },
    {
        name: 'Sell Tama',
        author: 'Wilkinston',
        posts: 55,
        latestPostAuthor: 'Dimmy'
    },
    {
        name: 'Sell drums',
        author: 'Dos',
        posts: 11,
        latestPostAuthor: 'Dimmy'
    },
    {
        name: 'drums',
        author: 'Dos',
        posts: 255,
        latestPostAuthor: 'Dimmy'
    },
    {
        name: 'Shure df45',
        author: 'Dos',
        posts: 2,
        latestPostAuthor: 'Dimmy'
    },
]

class _CategoryTable extends React.Component {
    renderTableHead = () => {
        return (
            <TableRow >
                <TableCell component="th" scope="row">Тема</TableCell>
                <TableCell align="right">Автор</TableCell>
                <TableCell align="right">Сообщения</TableCell>
                <TableCell align="right">Последний</TableCell>
            </TableRow>
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                    <Toolbar>
                        <Typography component="h5">{this.props.name}</Typography>
                    </Toolbar>
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table} aria-labelledby="tableTitle">
                            <TableBody>
                                {
                                     this.renderTableHead()
                                }
                                {
                                    mock.map((item, index) => {
                                        return (
                                            <TableRow
                                                hover
                                            >
                                                <TableCell component="th" scope="row">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell align="right">{item.author}</TableCell>
                                                <TableCell align="right">{item.posts}</TableCell>
                                                <TableCell align="right">{item.latestPostAuthor}</TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                
            </Paper>
        );
    }
}

export const CategoryTable = withStyles(styles)(_CategoryTable);