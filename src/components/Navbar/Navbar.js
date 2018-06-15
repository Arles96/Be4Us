import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './Navbar.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Navbar extends Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        if (true) {

            return (
                <div className={classes.root}>
                    
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Title
                      </Typography>
                            {auth && (
                                <div>
                                    <IconButton
                                        aria-owns={open ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={this.handleClose}
                                    >
                                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    </Menu>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                </div>
            );
        } else {

            return (
                <div className="navbar" >
                    <AppBar position="static">
                        <Toolbar className="toolbar">

                            <Grid container spacing={24}>
                                <Grid item xs>

                                    {auth && (
                                        <div>
                                            <IconButton
                                                aria-owns={open ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                onClick={this.handleMenu}
                                                color="inherit"
                                            >
                                                <AccountCircle />
                                            </IconButton>
                                            <Menu
                                                id="menu-appbar"
                                                anchorEl={anchorEl}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                                open={open}
                                                onClose={this.handleClose}
                                            >
                                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                            </Menu>
                                        </div>
                                    )}
                                </Grid>
                                <Grid item xs>

                                    <IconButton className={classes.flex} color="inherit">
                                        <p className="btn_text" color="inherit">
                                            Inicio
                        </p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs>
                                    <IconButton className={classes.flex} color="inherit">
                                        <p className="btn_text" color="inherit">
                                            Comenzar
                        </p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs>
                                    <IconButton className={classes.flex} color="inherit">
                                        <p className="btn_text" color="inherit">
                                            Acerca
                        </p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs>
                                    <IconButton className={classes.flex} color="inherit">
                                        <p className="btn_text" color="inherit">
                                            Blog
                        </p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs>
                                    <IconButton className={classes.flex} color="inherit">
                                        <p className="btn_text" color="inherit">
                                            Desarrollo
                        </p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs>
                                    <IconButton className={classes.flex} color="inherit">
                                        <p className="btn_text" color="inherit">
                                            Precios
                        </p>
                                    </IconButton>
                                </Grid>

                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
            );
        }
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
