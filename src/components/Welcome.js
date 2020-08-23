import React from 'react';
import { Container, Typography } from '@material-ui/core';
import '../css/styles/Welcome.scss';

class Welcome extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            Title: props.config.title,
            Text: props.config.text,
            Styles: {
                width: '80vw',
                height: '80vh',
                backgroundImage: `url(${props.config.img})`
            }
        }
    }

    render() {
        return (
            <Container className="WelcomeContainer" style={this.state.Styles}>
                <div className="WelcomeTextContainer">
                    <Typography component="h2" variant="h5" className="WelcomeText">{this.state.Title}</Typography>
                    <Typography component="h2" variant="h5" className="WelcomeText">{this.state.Text}</Typography>
                </div>
            </Container>
        )
    }
}

export default Welcome;