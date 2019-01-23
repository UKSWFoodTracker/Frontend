import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  font: {
    fontSize: "20px"
  },
  position: {
    "text-align": "center"
  },
  margin: {
    "margin-top": "10px"
  }
};


const NotFound = (props) => {
  
  const { classes } = props;

  return (
    <div className={classes.position}>
      <Typography  variant="display3">404</Typography>
      <Typography className={classes.font} variant="display1">Ta strona nie istnieje.</Typography>
      <Button color="primary"
              className={classes.margin}
              to={"/"}
              variant="contained"
              color="primary"
              component={props => <Link {...props}/>}
              id="hover-dis"
            >Strona główna
      </Button>
    </div>
  )
};

export default withStyles(styles)(NotFound);