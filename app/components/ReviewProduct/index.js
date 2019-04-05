/**
 *
 * ReviewProduct
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
// import { Search, ShoppingCart } from '@material-ui/icons';
import styles from './style';

/* eslint-disable react/prefer-stateless-function */
class ReviewProduct extends React.Component {
  state = {
    // bottom: false,
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { classes, products } = this.props;
    return (
      <div className={classes.body}>
        <div style={{ border: '1px solid #DDD' }}>
          <div className={classes.borderSP}>
            <img src={products.img} alt="logo" height="250px" />
            <div className={classes.xemProducts}>
              <Typography className={classes.textXemvsmua}>
                23, Tháng 3
              </Typography>
            </div>
          </div>
          <div className={classes.ThongTinSp}>
            <Typography className={classes.nameSP}>{products.name}</Typography>
            {products.promotion ? (
              <Grid item container direction="row">
                <Typography className={classes.Price}>
                  {products.price} VNĐ
                </Typography>
                <Typography className={classes.PriceKM}>
                  {(products.price * (100 - products.promotion)) / 100} VNĐ
                </Typography>
              </Grid>
            ) : (
              <Typography className={classes.PriceKM}>
                {products.price} VNĐ
              </Typography>
            )}
          </div>
          {products.promotion ? (
            <Typography className={classes.KM}>
              {products.promotion}%
            </Typography>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

ReviewProduct.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReviewProduct);
