/**
 *
 * Products
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { Search, ShoppingCart } from '@material-ui/icons';
import styles from './style';

/* eslint-disable react/prefer-stateless-function */
class Products extends React.Component {
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
              <Grid item container direction="row">
                <Grid item md={6}>
                  <Typography
                    className={classes.textXemvsmua}
                    style={{ borderRight: '1px solid #FFF' }}
                  >
                    <ShoppingCart style={{ width: '18px' }} /> MUA HÀNG
                  </Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.textXemvsmua}>
                    <Search style={{ width: '18px' }} /> XEM SẢN PHẨM
                  </Typography>
                </Grid>
              </Grid>
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

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
