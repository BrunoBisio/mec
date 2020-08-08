import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import clientExp from '../css/img/exp_cliente.png';
import sucExp from '../css/img/exp_sucur.png';
import aboutUs from '../css/img/sobre_nosotros.png';
import '../css/MecCarousel.scss';

import {
    Card,
    CardMedia,
    Typography,
    Grid
} from '@material-ui/core';

const items = [
    {
        Name: 'Red dragon',
        Image: clientExp
    },
    {
        Name: 'Blue dragon',
        Image: sucExp
    },
    {
        Name: 'The migthy one',
        Image: aboutUs
    }
]

function Banner(props) {
    const item = props.item;

    return (
        <Card raised className="Banner">
            <Grid item className="BannerGrid">
                <CardMedia className="Media" image={item.Image} title={item.Name} >
                    <Typography className="MediaCaption"> {item.Name} </Typography>
                </CardMedia>
            </Grid>
        </Card>
    )
}

class MecCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: false,
            timer: 500,
            animation: "fade",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: false
        }

        autoBind(this);
    }

    render() {
        return (
            <div className="CarouselContainer" >
                <Carousel className="MecCarousel" 
                    autoPlay={this.state.autoPlay} 
                    timer={this.state.timer}
                    animation={this.state.animation} 
                    indicators={this.state.indicators} 
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                >
                    { items.map((item, index) => { return <Banner item={item} key={index} /> }) }
                </Carousel>
            </div>
        )
    }
}

export default MecCarousel;
