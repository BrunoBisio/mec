import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import '../css/styles/NewsCard.scss'
class NewsCard extends React.Component {
    
    render() {
     
        return <Card>
             {this.props.Image && <CardMedia
                 className="Media"
                image={this.props.Image}
                title="Paella dish"
            /> }
        </Card>

    }
}

export default NewsCard;