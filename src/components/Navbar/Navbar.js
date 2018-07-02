import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import ResizeDetector from 'react-resize-detector';
import { auth } from '../../data/firebase'
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
        this.goDesk = this.goDesk.bind(this);
    }

    componentDidMount(){
        auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    auth : false
                })
            }
        })
    }

    handleIconAuth() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        if (this.state.auth) {
            return (
                <div>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="/Login">
                        <i className="fas fa-sign-in-alt"></i>
                    </IconButton>
                    </IconButton>
                </div>
            )
        }else {
            return (
                <div>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : null}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                    <IconButton id="IconButton" className={classes.flex} color="inherit" href="/desk">
                        <i className="fas fa-user-tie"></i>
                    </IconButton>
                    </IconButton>
                </div>
            )
        }
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

    goDesk() {
        window.open('/Desk');
    }

    render() {
        const { classes } = this.props;
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
                            {this.handleIconAuth()}
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
                                    {this.handleIconAuth()}
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
