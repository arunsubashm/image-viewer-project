import React, { Component } from 'react';
import Header from '../../common/header/Header'
import './Home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            userDetails: []
        }
    }

    componentWillMount() {
        // Get upcoming movies
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        let token = "GQVJYWXhDWnNWdjNFamdOcEdMaGFyeUhiOHpWWVdZAanprVm5xa0Q4RjhuQVlGOWdUMlpQNUpNd1d0NzdrY0ZA4T3ZAuVkhqSUhzZAnl3Sy1JUEVUN3drU2U2OVhocVJnOVNSODlLWFhHZAXdJTjlqQy1XNQZDZD";
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    userDetails: JSON.parse(this.responseText).data
                });
            }
            console.log(that.state.userDetails[0].id);
            console.log(that.state.userDetails[0].caption);
        });

        xhr.open("GET", "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + token);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    
    }

    render () {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default (Home);