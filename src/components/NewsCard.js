import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import '../css/styles/NewsCard.scss'

class NewsCard extends React.Component {
    
    render() {
     
        return <Card className="NewsCard">
             { this.props.Image && 
                (<CardActionArea>
                    <CardMedia className="Media" image={this.props.Image} title={this.props.Title}>
                        <div className="MediaFooter">
                            <Typography variant="body2" color="textSecondary" component="p">{this.props.Content}</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">{this.props.Content2}</Typography>
                        </div>
                    </CardMedia>
                </CardActionArea>)
             }
        </Card>

    }
}

export default NewsCard;