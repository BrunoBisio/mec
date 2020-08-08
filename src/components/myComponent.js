import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {CardMedia, Typography} from '@material-ui/core';
import '../css/carrousel.css';

function CarrouselSlide(props) {
    return (
        <CardMedia className="Media" image={props.item.Img} title={props.item.Title}>
            <Typography className="MediaCaption">{props.item.Title}</Typography>
        </CardMedia>
    )
}

const items = [
    {
        Title: 'Red dragon',
        Img: 'https://i.pinimg.com/originals/35/de/24/35de2403ada4d0d4d305691e6ceff9f8.jpg'
    },
    {
        Title: 'Blue dragon',
        Img: 'https://steamuserimages-a.akamaihd.net/ugc/922548032614832812/EED29166C2CC87B0000464B7EA51AA57B91182D7/?imw=1024&imh=724&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        Title: 'The migthy one',
        Img: 'https://1.bp.blogspot.com/-yxXN_pODr78/UCT003ILnrI/AAAAAAAACE4/GRKVs2DPJvs/s1600/SpongeBob%2Bgigantic%2B33lb%2Bcat%2Bdies%2Bjust%2B%2Btwo%2Bmonths%2Bafter%2Bbeing%2Badopted%2Bnew%2Bfamily%2B5.jpg'
    }
]

function MyCarrousel(props) {
    const config = {
        autoPlay: false,
        timer: 500,
        animation: "fade",
        indicators: true,
        timeout: 500,
        navButtonsAlwaysVisible: false
    }

    return(
        <Carousel 
            className="myCarousel"
            autoPlay={config.autoPlay}
            timer={config.timer}
            animation={config.animation}
            indicators={config.indicators}
            timeout={config.timeout}
            navButtonsAlwaysVisible={config.navButtonsAlwaysVisible}
        >
            { items.map( (item, index) => { return <CarrouselSlide item={item} key={index}/> }) }
        </Carousel>
    );
} 



export default MyCarrousel;