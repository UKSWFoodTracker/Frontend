import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const todayCalories = (data) => {
    let caloriesToday = 0;
    data.forEach(element => {
        // check if meal was created today
        if(new Date(element.created).setHours(0,0,0,0) === new Date().setHours(0,0,0,0)) {
            element.ingredients.forEach(item => {
                caloriesToday += item.calories
            });
        }
    });
    return caloriesToday;
}

function PaperSheet(props) {
  const { classes } = props;
  const sum = todayCalories(props.data);
  
  return (
    <div className="pap">
      <Paper className={classes.root} id="daily">
        <Typography variant="h5" component="h3">
          Kalorie dzisiaj
        </Typography>
        <Typography component="p">
          {sum}
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);