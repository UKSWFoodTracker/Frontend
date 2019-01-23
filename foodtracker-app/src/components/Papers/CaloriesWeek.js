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

const weekCalories = (data) => {
    let caloriesWeek = 0;
    data.forEach(element => {
        if(dayDiff(new Date(), new Date(element.created)) <= 8) {
            element.ingredients.forEach(item => {
                caloriesWeek += item.calories
            });
        }
    });
    return caloriesWeek;
}

function WeekPaper(props) {
  const { classes } = props;
  const sum = weekCalories(props.data);
  
  return (
    <div className="pap">
      <Paper className={classes.root} id="weekly">
        <Typography variant="h5" component="h3">
          Kalorie w tydzień
        </Typography>
        <Typography component="p">
          {sum}
        </Typography>
      </Paper>
    </div>
  );
}

WeekPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeekPaper);