/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Grid, Typography } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import makeSelectHomePage from './selectors';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Slice from '../../components/SileMenu';
import Products from '../../components/Products';
import ReviewProduct from '../../components/ReviewProduct';
import reducer from './reducer';
import anh1 from '../../images/anh1.jpg';
import anh2 from '../../images/anh2.jpg';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import styles from './style';

import saga from './saga';
// import messages from './messages';

const loaiSp = [
  {
    name: 'TRANG ĐIỂM - MAKEUP',
    data: [
      'Trang điểm mắt-FACE',
      'Trang điểm môi-LIPS',
      'Trang điểm mặt-EYE',
      'Tẩy trang - MAKEUP REMOVER',
    ],
  },
  {
    name: 'CHĂM SÓC DA - SKINCARE',
    data: [
      'Sữa rửa mặt - CLEANSERS',
      'Trang điểm môi',
      'Trang điểm mặt',
      'Tẩy trang',
    ],
  },
  {
    name: 'CHĂM SÓC TÓC - HAIR',
    data: ['Trang điểm mắt', 'Trang điểm môi', 'Trang điểm mặt', 'Tẩy trang'],
  },
  {
    name: 'CHĂM SÓC CƠ THỂ - BATH & BODY',
    data: ['Trang điểm mắt', 'Trang điểm môi', 'Trang điểm mặt', 'Tẩy trang'],
  },
  {
    name: 'Tools - Brushes',
    data: [
      'Trang điểm mắt-FACE',
      'Trang điểm môi-LIPS',
      'Trang điểm mặt-EYE',
      'Tẩy trang - MAKEUP REMOVER',
    ],
  },
  {
    name: 'Sản phẩm khác - Others',
    data: [
      'Sữa rửa mặt - CLEANSERS',
      'Trang điểm môi',
      'Trang điểm mặt',
      'Tẩy trang',
    ],
  },
  {
    name: 'MINI SIZE',
    data: ['Trang điểm mắt', 'Trang điểm môi', 'Trang điểm mặt', 'Tẩy trang'],
  },
  {
    name: 'SET QUÀ TẶNG - GIFT',
    // data: ['Trang điểm mắt', 'Trang điểm môi', 'Trang điểm mặt', 'Tẩy trang'],
  },
];

const productsHot = [
  {
    name:
      'Maybelline Lash Sensational Mascara- Blackest Black (Nhập khẩu) 1 hot',
    img: anh1,
    price: '1590000',
  },
  {
    name: 'Some By Mi AHA-BHA-PHA 30 Days Miracle Toner 150ml 2 hot',
    img: anh2,
    price: '1590000',
    promotion: '9',
  },
  {
    name: 'Some By Mi 30 Days Miracle Tea Tree Clear Spot Oil 10ml 3 hot',
    img: anh1,
    price: '1590000',
    promotion: '9',
  },
  {
    name: 'Lemonade Perfect Couple Lip 4 hot',
    img: anh2,
    price: '1590000',
  },
  {
    name: 'Lemonade Lip Filler 5 hot',
    img: anh1,
    price: '1590000',
    promotion: '9',
  },
];

const productsSelling = [
  {
    name:
      'Maybelline Lash Sensational Mascara- Blackest Black (Nhập khẩu) 1 selling',
    img: anh1,
    price: '1190000',
    promotion: '9',
  },
  {
    name: 'Some By Mi AHA-BHA-PHA 30 Days Miracle Toner 150ml 2 selling',
    img: anh2,
    price: '1390000',
  },
  {
    name: 'Some By Mi 30 Days Miracle Tea Tree Clear Spot Oil 10ml 3 selling',
    img: anh2,
    price: '1290000',
    promotion: '9',
  },
  {
    name: 'Lemonade Perfect Couple Lip 4 selling',
    img: anh1,
    price: '1990000',
    promotion: '9',
  },
  {
    name: 'Lemonade Lip Filler 5 selling',
    img: anh2,
    price: '1590000',
  },
];

const arrREVIEW = [
  {
    name: 'AHA HAY BHA? ĐÂU LÀ SỰ LỰA CHỌN HOÀN HẢO CHO LÀN DA CỦA BẠN?',
    img: blog1,
    time: '27, Tháng 3',
    content:
      'Những cô nàng/ anh chàng bước vào độ tuổi dậy thì bắt đầu phải đối mặt với những vấn đề về da như dầu nhờn, mụn,... nhưng vẫn loay hoay phải chăm sóc da như thế nào?!',
  },
  {
    name: '5 TIPS GIỮ LỚP MAKE UP LÂU TRÔI NGÀY NẮNG NÓNG',
    img: blog2,
    time: '26, Tháng 3',
    content:
      'Cuối cùng thì ngày đó cũng đã đến, những ngày hè oi bức sắp bắt đầu...',
  },
  {
    name: '7 CÂY SON ĐỎ LẠNH VỪA SANG CHẢNH LẠI TÔN DA NÀNG NÀO CŨNG NÊN CÓ',
    img: blog1,
    time: '23, Tháng 3',
    content:
      'Dù hiện tại trên thị trường có rất nhiều màu son, tuy nhiên màu son đỏ...',
  },
  {
    name: '4 BƯỚC SKINCARE CƠ BẢN & NHỮNG SẢN PHẨM ',
    img: blog2,
    time: '22, Tháng 3',
    content:
      'Với những người mới tập tành Skin care thì chắc chắn sẽ băn khoăn với việc...',
  },
  {
    name: 'ROUTINE MAKE UP CHO NHỮNG CÔ NÀNG DA DẦU MỤN',
    img: blog2,
    time: '18, Tháng 3',
    content:
      'Ra đường cũng muốn make up cho xinh, nhưng khổ nỗi chỉ được 2 - 3...',
  },
];
/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  state = {
    isHot: true,
    isSelling: false,
    index: 0,
    // titelHotSelling: '',
  };

  componentDidMount() {
    const { index } = this.state;
    const arr = [];
    if (this.state.isHot) {
      for (let i = index; i < index + 4; i += 1) {
        arr.push(productsHot[i]);
      }
      this.state.arrProducts = arr;
    } else if (this.state.isSelling) {
      for (let i = index; i < index + 4; i += 1) {
        arr.push(productsSelling[i]);
      }
      this.state.arrProducts = arr;
    }
  }

  render() {
    const { classes } = this.props;
    const arrProducts = this.updateProduct();
    return (
      <div>
        <Helmet>
          <title>Mỹ phẩm và phụ kiện</title>
        </Helmet>
        <Header />
        <Slice slice={loaiSp} />
        {/* phần sản phẩm hot và bán chạy trong tháng */}
        <div className={classes.body}>
          <div
            style={{ width: '1200px', margin: '0 auto', position: 'relative' }}
          >
            <div className={classes.divSpHot}>
              <Grid item container direction="row">
                <Grid item md={7}>
                  <Typography className={classes.titelSpHot}>
                    {this.getTitelSP()}
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Grid item container direction="row">
                    <Typography
                      className={
                        this.state.isHot ? classes.btnActive : classes.btnHot
                      }
                      style={{ borderRight: '1px solid #ddd' }}
                      onClick={() => this.checkIsHot()}
                    >
                      HÔM NAY CÓ GÌ HOT??
                    </Typography>
                    <Typography
                      className={
                        this.state.isSelling
                          ? classes.btnActive
                          : classes.btnHot
                      }
                      onClick={() => this.checkisSelling()}
                    >
                      BÁN CHẠY TRONG THÁNG
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            {this.updateProduct().length !== 0 ? (
              <div className={classes.bodySP}>
                <Grid item container direction="row">
                  <Grid item md={3}>
                    <Products
                      products={arrProducts[this.setIndex(this.state.index)]}
                    />
                  </Grid>
                  <Grid item md={3}>
                    <Products
                      products={
                        arrProducts[this.setIndex(this.state.index + 1)]
                      }
                    />
                  </Grid>
                  <Grid item md={3}>
                    <Products
                      products={
                        arrProducts[this.setIndex(this.state.index + 2)]
                      }
                    />
                  </Grid>
                  <Grid item md={3}>
                    <Products
                      products={
                        arrProducts[this.setIndex(this.state.index + 3)]
                      }
                    />
                  </Grid>
                </Grid>
                <div className={classes.btnNext}>
                  <Grid item container direction="row">
                    <NavigateBefore
                      className={classes.before}
                      style={{ left: '-3%' }}
                      onClick={() => this.beforeProducts()}
                    />
                    <NavigateNext
                      className={classes.before}
                      style={{ right: '0' }}
                      onClick={() => this.nextProducts()}
                    />
                  </Grid>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        {/* Phần Blog và REVIEW */}
        <div className={classes.body}>
          <div
            style={{ width: '1200px', margin: '0 auto', position: 'relative' }}
          >
            <div className={classes.divSpHot}>
              <Typography className={classes.titelSpHot}>
                BEAUTY TIPS/REVIEW
              </Typography>
            </div>
            {this.updateProduct().length !== 0 ? (
              <div className={classes.bodySP}>
                <Grid item container direction="row">
                  <Grid item md={3}>
                    <ReviewProduct
                      products={arrProducts[this.setIndex(this.state.index)]}
                    />
                  </Grid>
                  <Grid item md={3}>
                    <ReviewProduct
                      products={
                        arrProducts[this.setIndex(this.state.index + 1)]
                      }
                    />
                  </Grid>
                  <Grid item md={3}>
                    <ReviewProduct
                      products={
                        arrProducts[this.setIndex(this.state.index + 2)]
                      }
                    />
                  </Grid>
                  <Grid item md={3}>
                    <ReviewProduct
                      products={
                        arrProducts[this.setIndex(this.state.index + 3)]
                      }
                    />
                  </Grid>
                </Grid>
                <div className={classes.btnNext}>
                  <Grid item container direction="row">
                    <NavigateBefore
                      className={classes.before}
                      style={{ left: '-3%' }}
                      onClick={() => this.beforeProducts()}
                    />
                    <NavigateNext
                      className={classes.before}
                      style={{ right: '0' }}
                      onClick={() => this.nextProducts()}
                    />
                  </Grid>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  getTitelSP = () => {
    const { isHot, isSelling } = this.state;
    const Hot = 'HÔM NAY CÓ GÌ HOT??';
    const Selling = 'BÁN CHẠY TRONG THÁNG';
    // sắp xếp
    // const x = productsSelling.sort((a, b) => a.price - b.price);
    // console.log(x, 'x');
    if (isHot && !isSelling) return Hot;
    return Selling;
  };

  updateProduct = () => {
    const { isHot, isSelling } = this.state;
    const arr = [];
    if (isHot && productsHot.length > 0) {
      for (let i = 0; i < productsHot.length; i += 1) {
        arr.push(productsHot[i]);
      }
    }
    if (isSelling && productsSelling.length > 0) {
      for (let i = 0; i < productsSelling.length; i += 1) {
        arr.push(productsSelling[i]);
      }
    }
    return arr;
  };

  setIndex = e => {
    const arr = this.updateProduct();
    if (e >= arr.length) return e - arr.length;
    return e;
  };

  checkIsHot = () => {
    this.setState({ isHot: true, isSelling: false, index: 0 });
  };

  checkisSelling = () => {
    this.setState({ isHot: false, isSelling: true, index: 0 });
  };

  nextProducts = () => {
    const { index, arrProducts } = this.state;
    if (index === arrProducts.length - 1) this.setState({ index: 0 });
    else this.setState({ index: index + 1 });
  };

  beforeProducts = () => {
    const { index, arrProducts } = this.state;
    if (index === 0) this.setState({ index: arrProducts.length - 1 });
    else this.setState({ index: index - 1 });
  };
}

HomePage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
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

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(HomePage);
