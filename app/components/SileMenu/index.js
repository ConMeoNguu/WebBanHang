/**
 *
 * SileMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames';
// import { FormattedMessage } from 'react-intl';
import { Grid, Typography } from '@material-ui/core';
// import {
//   LocalPhone,
//   Search,
//   Person,
//   Menu,
//   ShoppingCart,
// } from '@material-ui/icons';
// import mainLogo from '../../images/icon-512x512.jpg';
import styles from './style';

/* eslint-disable react/prefer-stateless-function */
class SileMenu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <div style={{ margin: '0 auto', width: '1200px' }}>
          <Grid item container direction="row">
            <Grid item md={3}>
              <div className={classes.menuslice}>
                <div>
                  <Typography className={classes.menuSP}>
                    TRANG ĐIỂM - MAKEUP
                  </Typography>
                  <div>
                    <Typography>TRANG ĐIỂM</Typography>
                    <Typography>Trang điểm mắt</Typography>
                    <Typography>Trang điểm môi</Typography>
                    <Typography>Trang điểm mặt</Typography>
                    <Typography>Tẩy trang</Typography>
                  </div>
                </div>
                <div>
                  <Typography className={classes.menuSP}>
                    CHĂM SÓC DA - SKINCARE
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.menuSP}>
                    CHĂM SÓC TÓC - HAIR
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.menuSP}>
                    CHĂM SÓC CƠ THỂ - BATH & BODY
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.menuSP}>
                    Tools - Brushes
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.menuSP}>
                    Sản phẩm khác - Others
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.menuSP}>MINI SIZE</Typography>
                </div>
                <div>
                  <Typography className={classes.menuSP}>
                    SET QUÀ TẶNG - GIFT
                  </Typography>
                </div>
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
