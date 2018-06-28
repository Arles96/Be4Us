import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Developers.css';

function Developers(props) {
  const { classes } = props;

  return (
    <div id="aboutusContainer">
        <h1>Acerca de nosostros</h1>
        <Grid container spacing={24}>
            <Grid item sm={4}>
                <Paper className="paperAboutUs">
                        <img src="../../img/img1.jpg" className="imageAboutUs"></img>
                        <h1>Arles</h1>
                        <p>Programador</p>
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
                </Paper>
            </Grid>
            <Grid item sm={4}>
                <Paper className="paperAboutUs">
                        <img src="../../img/img1.jpg" className="imageAboutUs"></img>
                        <h1>Arles</h1>
                        <p>Programador</p>
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
                </Paper>
            </Grid>
            <Grid item sm={4}>
                <Paper className="paperAboutUs">
                        <img src="../../img/img1.jpg" className="imageAboutUs"></img>
                        <h1>Arles</h1>
                        <p>Programador</p>
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
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}

Developers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles()(Developers);
