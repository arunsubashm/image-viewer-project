import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './Home.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 300,
        maxWidth: 300
    },
    buttonControl: {
        margin: theme.spacing.unit,
        minWidth: 60,
        maxWidth: 60
    },
    title: {
        color: theme.palette.primary.dark,
    }
});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    usernameChangeHandler = event => {
        this.setState({ username: event.target.value });
    }
    
    passwordChangeHandler = event => {
        this.setState({ password: event.target.value });
    }
    
    authHandler = () => {
        console.log(this.state.username);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <header className="app-header">
                        <div className="app-logo">
                            <span>Image Viewer</span>
                        </div>
                    </header>
                </div>
                <div className="flex-container">
                    <div className="center">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        LOGIN
                                    </Typography>
                                </FormControl>
                                <br /><br />
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="username">Username *</InputLabel>
                                    <Input id="username" onChange={this.usernameChangeHandler} aria-describedby="my-helper-text" />
                                </FormControl>
                                <br /><br />
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="password">Password *</InputLabel>
                                    <Input id="password" onChange={this.passwordChangeHandler} aria-describedby="my-helper-text" />
                                </FormControl>
                                <br /><br />
                                <FormControl className={classes.buttonControl}>
                                    <Button onClick={() => this.authHandler()} variant="contained" color="primary">
                                        LOGIN
                                    </Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);
