import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import '../css/styles/NewsCard.scss'
class NewsCard extends React.Component {
    
    render() {
     
        return <Card>
             {/*<Divider variant="fullWidth"/>
             <div style={{height: 10 + 'px'}}></div>
    <Divider variant="fullWidth"/>*/}
             {this.props.Image && <CardMedia
                 className="Media"
                image={this.props.Image}
                title="Paella dish"
            /> }
            {/*this.props.Content && 
             <CardContent>
             
             {this.props.Content}
            </CardContent> 
            <CardContent/>*/}
        </Card>

    }
}

export default NewsCard;