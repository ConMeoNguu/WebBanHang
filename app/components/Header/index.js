/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames';
// import { FormattedMessage } from 'react-intl';
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import {
  LocalPhone,
  Search,
  Person,
  Menu,
  ShoppingCart,
} from '@material-ui/icons';
import mainLogo from '../../images/icon-512x512.jpg';
import styles from './style';

// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  state = {
    search: '',
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <div style={{ margin: '0 auto', width: '1200px' }}>
          <Grid item container direction="row">
            <Grid item md={2} style={{ borderRight: '1px solid #efefef' }}>
              <div style={{ height: '120px' }}>
                <img
                  src={mainLogo}
                  alt="logo"
                  width="120px"
                  height="120px"
                  style={{ marginTop: -8 }}
                />
              </div>
            </Grid>
            <Grid
              item
              md={10}
              style={{ paddingLeft: '15px', paddingRight: '0px' }}
            >
              <div style={{ marginTop: '6px' }}>
                <Grid item container direction="row">
                  <Grid item md={7}>
                    <Typography
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#DC1C4C',
                      }}
                    >
                      GIAO HÀNG MIỄN PHÍ
                    </Typography>
                    <Typography style={{ fontSize: '13px' }}>
                      NGOẠI THÀNH VỚI HÓA ĐƠN TRÊN 90K, NỘI THÀNH VỚI HÓA ĐƠN
                      TRÊN 200K
                    </Typography>
                  </Grid>
                  <Grid item md={5} style={{ textAlign: 'right' }}>
                    <Typography
                      style={{
                        color: '#dc1c4c',
                        fontSize: '14px',
                        fontWeight: 500,
                      }}
                    >
                      <LocalPhone
                        style={{
                          height: '17px',
                          width: '17px',
                          color: '#000',
                        }}
                      />{' '}
                      Liên hệ - 0964241611
                    </Typography>
                    <Typography style={{ color: '#707070', fontSize: '13px' }}>
                      CHÀO MỪNG BẠN ĐẾN VỚI Mỹ Phẩm Phụ Kiện!
                    </Typography>
                  </Grid>
                </Grid>
                <div className={classes.seach} style={{ marginTop: '9px' }}>
                  <Grid item container direction="row">
                    <input
                      className={classes.input}
                      placeholder="Nhập từ khóa tìm kiếm"
                      // onChange={this.onchange()}
                      // value={this.state.search}
                      // name="search"
                    />
                    <Button className={classes.iconSeach}>
                      <Search />
                    </Button>
                    <div className={classes.iconPerson}>
                      <Person />
                      <Paper className={classes.divlogin}>
                        <Typography style={{ padding: '5px 0' }}>
                          ĐĂNG KÝ
                        </Typography>
                        <Typography style={{ paddingBottom: '5px' }}>
                          ĐĂNG NHẬP
                        </Typography>
                      </Paper>
                    </div>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.border}>
          <div className={classes.container2}>
            <Grid container direction="row" style={{ height: '50px' }}>
              <div
                className={classes.menu}
                style={{ padding: '13px', textAlign: 'center' }}
              >
                <Menu style={{ float: 'left', color: '#fff' }} />
                <Typography style={{ paddingLeft: '40px', color: '#fff' }}>
                  DANH MỤC SẢN PHẨM
                </Typography>
              </div>
              <div className={classes.floatLeft}>
                <Typography className={classes.menuHover}>TRANG CHỦ</Typography>
              </div>
              <div className={classes.floatLeft}>
                <Typography className={classes.menuHover}>
                  HÀNG MỚI VỀ
                </Typography>
              </div>
              <div className={classes.floatLeft}>
                <Typography className={classes.menuHover}>
                  KHUYẾN MẠI HÔM NAY
                </Typography>
              </div>
              <div className={classes.floatLeft}>
                <Typography className={classes.menuHover}>
                  BEAUTY TIPS/REVIEW
                </Typography>
              </div>
              <div className={classes.floatLeft}>
                <Typography className={classes.menuHover}>
                  HỆ THỐNG CỬA HÀNG
                </Typography>
              </div>
              <div className={classes.cart}>
                <Typography className={classes.carHover}>
                  <ShoppingCart />
                  (0)SẢN PHẨM
                </Typography>
                <Paper className={classes.divTTCart}>
                  <Typography
                    style={{
                      fontSize: '14px',
                      borderBottom: '1px dashed #dfdfdf',
                      paddingBottom: '10px',
                      color: '#707070',
                    }}
                  >
                    Hiện chưa có sản phẩm nào
                  </Typography>
                  <Grid
                    item
                    container
                    direction="row"
                    style={{ marginTop: '10px', color: '#707070' }}
                  >
                    <Grid item md={6}>
                      <Typography
                        style={{ fontSize: '15px', color: '#707070' }}
                      >
                        TỔNG TIỀN
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography
                        style={{
                          textAlign: 'right',
                          fontSize: '15px',
                          color: '#707070',
                        }}
                      >
                        0 VND
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container direction="row">
                    <Grid item md={6}>
                      <Typography
                        variant="outlined"
                        color="secondary"
                        className={classes.btnGioHang}
                      >
                        XEM GIỎ HÀNG
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <Typography
                        variant="contained"
                        className={classes.btnthanhtoan}
                      >
                        THANH TOÁN
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
          </div>
        </div>
      </div>
    );
  }

  // onchange = event => {
  //   this.setState({ [event.target.name]: [event.target.value] });
  // };
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
