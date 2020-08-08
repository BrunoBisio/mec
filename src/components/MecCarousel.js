import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
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
        Image: 'https://i.pinimg.com/originals/35/de/24/35de2403ada4d0d4d305691e6ceff9f8.jpg'
    },
    {
        Name: 'Blue dragon',
        Image: 'https://steamuserimages-a.akamaihd.net/ugc/922548032614832812/EED29166C2CC87B0000464B7EA51AA57B91182D7/?imw=1024&imh=724&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        Name: 'The migthy one',
        Image: 'https://1.bp.blogspot.com/-yxXN_pODr78/UCT003ILnrI/AAAAAAAACE4/GRKVs2DPJvs/s1600/SpongeBob%2Bgigantic%2B33lb%2Bcat%2Bdies%2Bjust%2B%2Btwo%2Bmonths%2Bafter%2Bbeing%2Badopted%2Bnew%2Bfamily%2B5.jpg'
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
