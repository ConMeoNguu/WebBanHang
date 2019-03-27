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
import {
  Grid,
  Typography,
  // TableCell,
  Button,
  // AppBar,
  // Toolbar,
  // TableRow,
  // Dialog,
  // DialogContent,
  // TextField,
  // DialogActions,
} from '@material-ui/core';
import { LocalPhone, Search, Person, Menu } from '@material-ui/icons';
import mainLogo from '../../images/icon-512x512.jpg';
import styles from './style';

// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <div style={{ margin: '0 auto', width: '1200px' }}>
          <div className={classes.container}>
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
                      <Typography
                        style={{ color: '#707070', fontSize: '13px' }}
                      >
                        CHÀO MỪNG BẠN ĐẾN VỚI Mỹ Phẩm Phụ Kiện!
                      </Typography>
                    </Grid>
                  </Grid>
                  <div className={classes.seach} style={{ marginTop: '9px' }}>
                    <Grid item container direction="row">
                      <input
                        className={classes.input}
                        placeholder="Nhập từ khóa tìm kiếm"
                      />
                      <Button className={classes.iconSeach}>
                        <Search />
                      </Button>
                      <Button className={classes.iconPerson}>
                        <Person />
                      </Button>
                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.container2}>
            <Grid container direction="row" style={{ height: '50px' }}>
              <div className={classes.menu}>
                <Menu style={{ float: 'left' }} />
                <Typography>DANH MỤC SẢN PHẨM</Typography>
              </div>
              <Typography>TRANG CHỦ</Typography>
              <Typography>HÀNG MỚI VỀ</Typography>
              <Typography>KHUYẾN MẠI HÔM NAY</Typography>
              <Typography>BEAUTY TIPS/REVIEW</Typography>
              <Typography>HỆ THỐNG CỬA HÀNG</Typography>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
