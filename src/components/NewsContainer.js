import React from 'react';
import NewsCard from './NewsCard.js';
import Grid from '@material-ui/core/Grid';
import Nazgul from '../css/img/nazgul_sin_texto.png';
import MinasMoria from '../css/img/Moria_sin_texto.png';
import Addicciones from '../css/img/gollum_sin_texto.png';
import Typography from '@material-ui/core/Typography';
import '../css/styles/NewsContainer.scss'
class NewsContainer extends React.Component {
  
    render() {
        const  list = [
            {title:"Nazgul", content:"No dejes que un cortesito de Nazgul arruine tu viaje con amigos.", content2: " ¡Veni a hacer tu control con nostros!", image:Nazgul},
            {title:"Minas Moria", content:"¿Ya conociste nuestra nueva sucursal en las Minas de Moria?", content2: "Ahora sin Barlog", image:MinasMoria},
            {title:"testTitle3", content: "Que las adicciones no controlen tu vida", content2: "Conocé nuestros programas de rehabilitación" ,image:Addicciones},
     ]
        const res = list.map( (card, index)=> 
        <Grid key={index} item xs={12} sm={4}><NewsCard Title={card.title} Content={card.content} Content2={card.content2} Image={card.image}/></Grid>
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