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

const dayDiff = (date1, date2) => {
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return diffDays;
}

const monthCalories = (data) => {
    let caloriesMonth = 0;
    data.forEach(element => {
        if(dayDiff(new Date(), new Date(element.created)) <= 30) {
            element.ingredients.forEach(item => {
                caloriesMonth += item.calories
            });
        }
    });
    return caloriesMonth;
}

function MonthCalories(props) {
  const { classes } = props;
  const sum = monthCalories(props.data);
  
  return (
    <div className="pap">
      <Paper className={classes.root} id="month">
        <Typography variant="h5" component="h3">
          Kalorie w miesiąc
        </Typography>
        <Typography component="p">
          {sum}
        </Typography>
      </Paper>
    </div>
  );
}

MonthCalories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthCalories);