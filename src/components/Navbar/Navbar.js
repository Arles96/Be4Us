import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
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

        return (
            <div className="navbar" className={classes.root}>
                <AppBar position="static">
                    <Toolbar className="toolbar">

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

                        <IconButton className={classes.flex} color="inherit">
                            <Typography variant="headline" color="inherit">
                                Inicio
                        </Typography>
                        </IconButton>
                        <IconButton className={classes.flex} color="inherit">
                            <Typography variant="headline" color="inherit">
                                Comenzar
                        </Typography>
                        </IconButton>
                        <IconButton className={classes.flex} color="inherit">
                            <Typography variant="headline" color="inherit">
                                Acerca
                        </Typography>
                        </IconButton>
                        <IconButton className={classes.flex} color="inherit">
                            <Typography variant="headline" color="inherit">
                                Blog
                        </Typography>
                        </IconButton>
                        <IconButton className={classes.flex} color="inherit">
                            <Typography variant="headline" color="inherit">
                                Desarrollo
                        </Typography>
                        </IconButton>
                        <IconButton className={classes.flex} color="inherit">
                            <Typography variant="headline" color="inherit">
                                Precios
                        </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
