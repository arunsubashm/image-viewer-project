import React, { Component } from 'react';
import Header from '../../common/header/Header'
import './Home.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            userDetails: [],
            imageDetails: []
        }
    }

    componentWillMount() {
        // Get the user details
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        let token = "GQVJYWXhDWnNWdjNFamdOcEdMaGFyeUhiOHpWWVdZAanprVm5xa0Q4RjhuQVlGOWdUMlpQNUpNd1d0NzdrY0ZA4T3ZAuVkhqSUhzZAnl3Sy1JUEVUN3drU2U2OVhocVJnOVNSODlLWFhHZAXdJTjlqQy1XNQZDZD";

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    userDetails: JSON.parse(this.responseText).data
                });
                // Loop thru all the uploads
                for( let i=0; i<that.state.userDetails.length; i++) {
                    let xhra = new Array(that.state.userDetails.length);
                    xhra[i] = new XMLHttpRequest();
                    xhra[i].addEventListener("readystatechange", function () {
                        if (this.readyState === 4) {
                            that.setState({
                            tempImage: JSON.parse(this.responseText)
                            });
                            that.state.imageDetails.push(that.state.tempImage);
                            console.log(that.state.imageDetails[i].id);
                            console.log(that.state.imageDetails[i].media_url);
                        }
                    });
                    xhra[i].open("GET", "https://graph.instagram.com/" + that.state.userDetails[i].id +
                                        "?fields=id,media_type,media_url,username,timestamp&access_token=" + 
                                        token);
                    xhra[i].setRequestHeader("Cache-Control", "no-cache");
                    xhra[i].send();
                }
            }
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