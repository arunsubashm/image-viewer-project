import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import './Header.css';

export class LoginHeader extends Component {
    render () {
        return (
            <div>
                <header className="app-header">
                    <div className="app-logo">
                        <span>Image Viewer</span>
                    </div>
                </header>
            </div>
        )
    }
}

export default class Header extends Component {

    render () {
        return (
            <div>
                <header className="app-header">
                    <div className="app-logo">
                        <span>Image Viewer</span>
                        <div className="input">
                            <InputLabel htmlFor="search"></InputLabel>
                            <Input id="search" placeholder="Search..." onChange={this.searchHandler} aria-describedby="my-helper-text" startAdornment={
                             <InputAdornment position="start"><SearchIcon /></InputAdornment> } /> 
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}