/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames';
// import { FormattedMessage } from 'react-intl';
import { Grid, Typography, Button } from '@material-ui/core';
import {
  LocalShipping,
  Settings,
  LocalPhone,
  LocationOn,
  Email,
  //   Avatar,
} from '@material-ui/icons';
// import youtobe from '../../images/youtube.png';
import styles from './style';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <div className={classes.layHotLine}>
          <Grid
            item
            container
            direction="row"
            style={{
              width: '1200px',
              margin: '0 auto',
              height: '100%',
              padding: '10px 0',
            }}
          >
            <Grid
              item
              md={3}
              style={{
                borderRight: '1px solid #585858',
                padding: '0 15px',
                height: '100%',
              }}
            >
              <Typography className={classes.textThongTinTo}>
                {' '}
                <LocalShipping
                  className={classes.car}
                  style={{ transform: 'rotateY(180deg)' }}
                />{' '}
                MIỄN PHÍ VẬN CHUYỂN ádjthat
              </Typography>
              <Typography className={classes.textThongTin}>
                Vận chuyển toàn quốc - Đơn hàng từ 90K
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                borderRight: '1px solid #585858',
                padding: '0 15px',
                height: '100%',
              }}
            >
              <Typography className={classes.textThongTinTo}>
                {' '}
                <Settings className={classes.car} />
                CAM KẾT SẢN PHÂM
              </Typography>
              <Typography className={classes.textThongTin}>
                Sản phẩm chính hãng
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                borderRight: '1px solid #585858',
                padding: '0 15px',
                height: '100%',
              }}
            >
              <Typography className={classes.textThongTinTo}>
                <LocalPhone className={classes.car} />
                SHIP & ORDER
              </Typography>
              <Typography className={classes.textThongTin}>
                0945 677 911 - 09 6162 1288
              </Typography>
            </Grid>
            <Grid item md={3} style={{ padding: '0 15px', height: '100%' }}>
              <Grid item container direction="row">
                <Grid item md={3}>
                  <Typography className={classes.textThongTinTo}>
                    HOTLINE
                  </Typography>
                  <Typography variant="i" className={classes.textNghieng}>
                    Liên hệ
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography className={classes.textPhone}>
                    0866173200
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.thongtin}>
          <Grid
            item
            container
            direction="row"
            style={{ width: '1200px', margin: '0 auto' }}
          >
            <Grid
              item
              md={3}
              style={{
                padding: '0 15px',
                borderBottom: '1px solid #585858',
              }}
            >
              <Typography className={classes.textHeartop}>
                VỀ CHÚNG TÔI
              </Typography>
              <Typography className={classes.textNd}>
                Câu chuyện thương hiệu
              </Typography>
              <Typography className={classes.textNd}>
                Quy định & hình thức thanh toán
              </Typography>
              <Typography className={classes.textNd}>
                Chính sách bảo mật thông tin
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                padding: '0 15px',
                borderBottom: '1px solid #585858',
              }}
            >
              <Typography className={classes.textHeartop}>Hỗ TRỢ</Typography>
              <Typography className={classes.textNd}>
                Chính sách tích lũy điểm
              </Typography>
              <Typography className={classes.textNd}>
                Hướng dẫn mua hàng và chính sách giao hàng
              </Typography>
              <Typography className={classes.textNd}>
                Chính sách đổi trả
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                padding: '0 15px',
                borderBottom: '1px solid #585858',
              }}
            >
              <Typography className={classes.textHeartop}>
                HỢP TÁC KINH DOANH
              </Typography>
              <Typography className={classes.textNd}>
                Chính sách bán sỉ
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                padding: '0 15px',
                borderBottom: '1px solid #585858',
              }}
            >
              <Typography className={classes.textHeartop}>BẢN TIN</Typography>
              <Typography className={classes.textNd}>
                Đăng Ký Tại Đây Để Nhận Thông Tin Khuyến Mại Mỗi Ngày
              </Typography>
              <Grid
                item
                container
                direction="row"
                style={{
                  margin: '15px 0',
                }}
              >
                <input
                  placeholder="Nhập Email của bạn..."
                  className={classes.input}
                />
                <Button className={classes.btnGui}>GỬi</Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className={classes.chiNhanh}>
          <Grid
            item
            container
            direction="row"
            style={{ width: '1200px', margin: '0 auto' }}
          >
            <Grid item md={3} style={{ paddingRight: '15px' }}>
              <Typography className={classes.textCuaHang}>
                MỸ PHẨM PHỤ KIỆN
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{ padding: '0 15px', borderLeft: '1px solid #585858' }}
            >
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{ padding: '0 15px', borderLeft: '1px solid #585858' }}
            >
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
            </Grid>
            <Grid
              item
              md={3}
              style={{ padding: '0 15px', borderLeft: '1px solid #585858' }}
            >
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
              <Typography className={classes.textNd}>
                <LocationOn className={classes.iconLocation} />
                HÀ NỘI
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            style={{ width: '1200px', margin: '0 auto', paddingTop: '20px' }}
          >
            <Grid item md={3} />
            <Grid item md={9} style={{ padding: '0 15px' }}>
              <Typography className={classes.textNd}>
                <LocalPhone className={classes.iconLocation} /> Điện thoại:
                0964241611
              </Typography>
              <Typography className={classes.textNd}>
                <Email className={classes.iconLocation} /> Địa chỉ email:
                cskh@myphamphukien.com
              </Typography>
              <Grid container>{/* <Avatar src={youtobe} /> */}</Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
