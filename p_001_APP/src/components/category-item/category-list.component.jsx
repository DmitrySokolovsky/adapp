import React from 'react';
import {CategoryCard} from './category-item.component';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { TopicService } from '../../services';

export class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.oTopicService = new TopicService();

        this.state = {
            open: false,
            name: ''
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }
    
    handleClose = () => {
        this.setState({ open: false });
    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleSubmit = () => {
        let params = {
            id: 1,
            name: this.state.name
        }
        this.oTopicService.addTopic(params)
            .then(() => {
                console.log('Done')
                this.setState({ open: false })});
    }

    render() {
        const { categories } = this.props;
        return (
            <React.Fragment>
                {
                    categories.map((item) => {
                        return <CategoryCard name={item.name} description={item.description}/>
                    })
                }
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                            </DialogContentText>
                            <TextField
                                onChange={this.handleName}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                />
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                           Добавить
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}
