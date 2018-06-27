import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
//import { slide as Menu } from 'react-burger-menu'

import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
//import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ResizeDetector from 'react-resize-detector';

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
    constructor() {
        super();
        this.state = {
            auth: true,
            anchorEl: null,
        };
        this.render = this.render.bind(this);
        this.exp = this.exp.bind(this);
    }

    exp() {
        this.forceUpdate();
    }

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
        if (window.innerWidth <= 650) {

            return (
                <div className="navbar" >
                    <AppBar className="appbar" position="static">
                        <Toolbar className="toolbar_">
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>

                            <IconButton className={classes.flex} color="inherit">
                                <p className="btn_text_small" color="inherit">Be4Us</p>
                            </IconButton>
                            {auth && (
                                <div>
                                    <IconButton
                                        aria-owns={open ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenu}
                                        color="inherit"
                                    >
                                        <p className="btn_text_small" color="inherit">Iniciar Sesión</p>
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
                    <ResizeDetector handleWidth handleHeight onResize={this.render} />
                    <ResizeDetector handleWidth handleHeight onResize={this.exp} />
                </div>
            );
        } else {

            return (
                <div className="navbar" >
                    <AppBar className="appbar" position="static">
                        <Toolbar className="toolbar">

                            <Grid container>
                                <Grid item xs className="btn_text">

                                    {auth && (
                                        <div className="btn_text">
                                            <IconButton id="IconButton_" className="btn_text"
                                                aria-owns={open ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                onClick={this.handleMenu}
                                                color="inherit"
                                            >

                                                <p className="btn_text" href="/login" color="inherit">Iniciar Sesión</p>
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
                                <Grid item xs className="btn_text">
                                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="#Home_">
                                        <p className="btn_text" color="inherit">Inicio</p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs className="btn_text">
                                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="#AboutUs_">
                                        <p className="btn_text" color="inherit">Acerca</p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs className="btn_text" >
                                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="#GetStarted_">
                                        <p className="btn_text" color="inherit">Comenzar</p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs className="btn_text" >
                                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="#Blog_">
                                        <p className="btn_text" color="inherit">Blog</p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs className="btn_text" >
                                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="#Developers_">
                                        <p className="btn_text" color="inherit">Desarrollo</p>
                                    </IconButton>
                                </Grid>
                                <Grid item xs className="btn_text" >
                                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="#Pricing_">
                                        <p className="btn_text" color="inherit">Precios</p>
                                    </IconButton>
                                </Grid>

                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <ResizeDetector handleWidth handleHeight onResize={this.render} />
                    <ResizeDetector handleWidth handleHeight onResize={this.exp} />
                </div>
            );
        }
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
