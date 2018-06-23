
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Developers.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Developers(props) {
  const { classes } = props;

  return (
    <div id="developersContainer" className={classes.root}>
        <h1>Desarrolladores</h1>
        <Grid container spacing={24}>
            <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                    <div>
                        <h1>Arles</h1>
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
            <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
                    <div>
                        <h1>Cristhian</h1>
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
            <Grid item xs={6} sm={4}>
                <Paper className={classes.paper}>
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
        </Grid>
    </div>
  );
}

Developers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Developers);