/**
 *
 * SileMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import styles from './style';

/* eslint-disable react/prefer-stateless-function */
class SileMenu extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { classes, slice } = this.props;
    return (
      <div className={classes.body}>
        <div style={{ margin: '0 auto', width: '1200px' }}>
          <Grid item container direction="row">
            <Grid item md={3}>
              <div className={classes.menuslice}>
                {slice.map(e => (
                  <div className={classes.hover}>
                    <Typography className={classes.menuSP}>{e.name}</Typography>
                    {!e.data ? (
                      ' '
                    ) : (
                      <Paper className={classes.divhover}>
                        <Typography className={classes.chaLoaiSP}>
                          {e.name}
                        </Typography>
                        {e.data.map(item => (
                          <Typography className={classes.loaiSP}>
                            {item}
                          </Typography>
                        ))}
                      </Paper>
                    )}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item md={6} />
            <Grid item md={3}>
              <Typography>A</Typography>
              <Typography>A</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

SileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SileMenu);
