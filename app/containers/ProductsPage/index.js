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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProductsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
export class ProductsPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Grid item container dispatch="row">
            <Grid item md={8}>
              <Typography className={classes.a}>HÔM NAY CÓ GÌ HOT??</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography>HÔM NAY CÓ GÌ HOT??</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography>HÔM NAY CÓ GÌ HOT??</Typography>
            </Grid>
          </Grid>
        </div>
        <div />
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
