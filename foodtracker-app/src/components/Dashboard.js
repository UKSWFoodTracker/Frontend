import React, {Component} from 'react';

import FloatButton from './common/FloatButton';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import  withRoot from '../withRoot';


const styles = {
    root: {
      flexGrow: 1,
      marginTop: 80
    },
};


class Dashboard extends Component {    
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs>
                        <h1>Dashboard</h1>
                    </Grid>
                    <Grid item xs>
                        <h4>Click + button to add a meal.</h4>
                    </Grid>
                    <FloatButton />
               </Grid>
            </div>
        )
    }
}

export default withRoot(withStyles(styles)(Dashboard));