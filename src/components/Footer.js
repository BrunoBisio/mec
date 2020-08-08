import React from 'react';
import Grid from '@material-ui/core/Grid';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Grid container>
                    <Grid item xs={2}><img></img></Grid>
                    <Grid item xs={10}></Grid>
                </Grid>
            </footer>
        )
    }
}

export default Footer;