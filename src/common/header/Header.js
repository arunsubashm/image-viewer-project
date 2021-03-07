import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

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

export default Header;