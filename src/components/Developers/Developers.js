import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Developers.css';

export default () => (
    <div className="developers" >
        <div className="contain-dev" >
            <Grid className="Logo_Grid" container spacing={24}>
                <Grid item xs >
                    <p className="Logo_4" >4</p>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={4}>
                <Paper >
                    <div>
                        <h1>Dario</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce sed lacus finibus, posuere orci ac, ornare quam. 
                            Donec at fringilla odio. Sed fermentum mi non congue finibus. 
                            Vivamus vel sem egestas nibh laoreet commodo. 
                            Etiam nec neque lacinia, vehicula lacus nec, hendrerit ante. 
                            Ut eu nunc arcu. Mauris efficitur purus non velit imperdiet, id laoreet elit ultricies.
                            Duis eget fermentum tortor. Phasellus rhoncus risus pellentesque mauris congue rutrum. 
                            Proin aliquam congue viverra. 
                        </p>
                    </div>  
                </Paper>
            </Grid>
        </div>
    </div>
  );


/*Developers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Developers);*/