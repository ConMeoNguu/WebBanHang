/**
 *
 * ProductsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { StarBorder, Check } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import InforProducts from './tabs';
import makeSelectProductsPage from './selectors';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
// import Son from '../../images/son-3CE.jpg';

/* eslint-disable react/prefer-stateless-function */

export class ProductsPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Header /> */}
        <title>San pham A</title>
        <div className={classes.width}>
          <div className={classes.root}>
            <Grid item container direction="row">
              <Grid item md={4}>
                <div className={classes.borderBox}>
                  {/* <img src={Son} className={classes.imageProduct} /> */}
                </div>
              </Grid>
              <Grid item md={4}>
                <Typography className={classes.textName}>Son 3CE</Typography>
                <Typography className={classes.textPrice}>300.000đ</Typography>
                <Typography className={classes.textStrike}>
                  <strike>370.000đ</strike>
                </Typography>
                <StarBorder className={classes.colorStar} />
                <StarBorder className={classes.colorStar} />
                <StarBorder className={classes.colorStar} />
                <StarBorder className={classes.colorStar} />
                <StarBorder className={classes.colorStar} />
                <Typography className={classes.textStrike}>
                  (0 đánh giá)
                </Typography>
                <Grid item container direction="row">
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      label="Số lượng"
                      type="number"
                      defaultValue="1"
                      minva
                      className={classes.textField}
                      InputProps={{ inputProps: { min: 1 } }}
                    />
                  </form>
                  <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                  >
                    Còn Hàng
                  </Button>
                </Grid>
              </Grid>
              <Grid item md={4}>
                <div className={classes.paper}>
                  <Typography variant="h6" component="p">
                    Có 3 cửa hàng còn sản phẩm này
                  </Typography>
                </div>
                <Typography component="p" className={classes.checkName}>
                  <Check />
                  Cam kết sản phẩm chính hãng <br />
                  <Check />
                  Freeship Toàn quốc với hóa đơn từ 90k <br />
                  <Check />
                  Đặt hàng nhanh 0945 677 911- 09 6162 1288
                  <br /> <Check />
                  Hotline: 19002631 nhánh 507 <br />
                  <Check />
                  Email: cskh.hn@tdic-jsc.vn.
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.root}>
            <InforProducts />
          </div>
        </div>
      </div>
    );
  }
}
ProductsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productsPage: makeSelectProductsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productsPage', reducer });
const withSaga = injectSaga({ key: 'productsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ProductsPage);
