/**
 *
 * ListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Search } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Input from '@material-ui/core/Input';
import makeSelectListPage from './selectors';
// import Checkbox from './Checkbox';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
// import Card from './Card';

/* eslint-disable react/prefer-stateless-function */
export class ListPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.width}>
        <title>ListPage</title>
        <div className={classes.root}>
          <Paper className={classes.paper} elevation={1}>
            <Typography
              variant="h3"
              component="h1"
              className={classes.textPaper}
            >
              LIPS
              <Typography className={classes.amountProducts}>
                (10 sản phẩm)
              </Typography>
            </Typography>
          </Paper>
          <Grid container direction="row" spacing={8}>
            <Paper className={classes.listProducts} elevation={1}>
              <Paper className={classes.backgroundTitle} elevation={1}>
                <Typography
                  variant="h3"
                  component="h1"
                  className={classes.textTitle}
                >
                  Danh mục sản phẩm
                </Typography>
              </Paper>
              <div className={classes.brandProducts}>
                <Typography
                  style={{ color: '#DC1C4C', fontSize: 14, fontWeight: 'bold' }}
                >
                  Thương hiệu
                </Typography>
                <Input
                  placeholder="Tìm kiếm"
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                  style={{ fontSize: 14, width: '75%' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                  }}
                >
                  <Search style={{ color: '#DC1C4C' }} />
                </Button>
              </div>
            </Paper>
            <Grid item className={classes.widthItems}>
              {/* <Card /> */}
            </Grid>
            <Grid item className={classes.widthItems}>
              {/* <Card /> */}
            </Grid>
            <Grid item className={classes.widthItems}>
              {/* <Card /> */}
            </Grid>
            <Grid item className={classes.widthItems}>
              {/* <Card /> */}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
  classes: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listPage: makeSelectListPage(),
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

const withReducer = injectReducer({ key: 'listPage', reducer });
const withSaga = injectSaga({ key: 'listPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ListPage);
