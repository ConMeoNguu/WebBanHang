/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';
import Slice from '../../components/SileMenu';
// import Products from '../ProductsPage';
import reducer from './reducer';
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
// console.log(loaiSp);

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Mỹ phẩm và phụ kiện</title>
        </Helmet>
        {/* <Header /> */}
        <Slice slice={loaiSp} />
        {/* <Products /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

HomePage.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
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
)(HomePage);
