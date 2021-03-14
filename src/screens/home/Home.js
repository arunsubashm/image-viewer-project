import React, { Component } from 'react';
import Header from '../../common/header/Header'
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
    root: {
        margin: '20px',
    },
    media: {
        paddingTop: '100%',
        margin: '20px',
    },
    avatar: {
        backgroundColor: red[500],
    },
    divider: {
        margin: '20px',
    },
});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            userDetails: [],
            imageDetails: [],
            likes: 0,
        }
    }

    imageDynamicSearch = ()  => {
        return this.imageDetails;
    }

    componentWillMount() {
        // Get the user details
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        let token = "IGQVJYWXhDWnNWdjNFamdOcEdMaGFyeUhiOHpWWVdZAanprVm5xa0Q4RjhuQVlGOWdUMlpQNUpNd1d0NzdrY0ZA4T3ZAuVkhqSUhzZAnl3Sy1JUEVUN3drU2U2OVhocVJnOVNSODlLWFhHZAXdJTjlqQy1XNQZDZD";

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
                            that.state.tempImage.caption = that.state.userDetails[i].caption;
                            that.state.tempImage.likes = 0;
                            that.state.imageDetails.push(that.state.tempImage);
                            //console.log(that.state.imageDetails[i].id);
                            //console.log(that.state.imageDetails[i].media_url);
                            that.setState({ state: that.state });
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
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className="grid-container">
                    {this.state.imageDetails.map((images) => (
                        <div key={images.id}>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="user-icon" className={classes.avatar}>
                                        AS
                                    </Avatar>
                                    }
                                    title={images.username}
                                    subheader={images.timestamp}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={images.media_url}
                                />
                                <Divider className={classes.divider} light />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {images.caption} 
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                        <span>  {images.likes} Likes</span>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);