import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { browserHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
function Header(props) {

  const classes = useStyles();
  function nextPath() {
    browserHistory.push("/"+ props.link);
  }
  return (
    <AppBar position="static">
    <Toolbar>
        <Typography variant="h6" className={classes.title}>
            {props.title}
        </Typography>
        <Button variant="contained" onClick={nextPath} color="secondary">Go To {props.link}</Button>
    </Toolbar>
    </AppBar>
  );
}

export default Header;
