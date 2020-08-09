import React from 'react';
import NewsCard from './NewsCard.js';
import Grid from '@material-ui/core/Grid';
import Nazgul from '../css/img/Nazgul.png';
import MinasMoria from '../css/img/minas_moria.png';
import Addicciones from '../css/img/addicciones_v2.png';
import Typography from '@material-ui/core/Typography';
import '../css/styles/NewsContainer.scss'
class NewsContainer extends React.Component {
  
    render() {
        const  list = [
            {title:"testTitle1", content:"testContent1", image:Nazgul},
            {title:"testTitle2", content:"testContent2", image:MinasMoria},
            {title:"testTitle3", image:Addicciones},
     ]
        const res = list.map( (card, index)=> 
        <Grid key={index} item xs={12} sm={4}><NewsCard Title={card.title} Content={card.content} Image={card.image}/></Grid>
        )
        return (
                <Grid container spacing={2} xs={12} className="MainGrid">
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Typography variant="h2" component="h2">
                            Novedades
                        </Typography>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    {res}
                </Grid>
        )
    }
}

export default NewsContainer;