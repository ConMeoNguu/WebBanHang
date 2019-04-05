const styles = () => ({
  body: {
    margin: '15px 0',
    // minHeight: '350px',
    width: '95%',
    position: 'relative',
    cursor: 'pointer',
  },
  borderSP: {
    border: '2px solid red',
    width: '100%',
    position: 'relative',
    '&:hover': {
      color: '#de1616',
    },
    '&:hover $xemProducts': {
      //   display: 'block',
      transition: 'height 0.8s',
      height: '30px',
      zIndex: 0,
    },
  },
  ThongTinSp: {
    padding: '11px 13px',
    fontSize: '12px',
    zIndex: 2,
  },
  nameSP: {
    height: '34px',
    fontSize: '13px',
    '&:hover': {
      color: '#de1616',
    },
  },
  PriceKM: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#de1616',
    margin: '5px 0',
  },
  Price: {
    fontSize: '16px',
    fontWeight: 0,
    color: '#b5b5b5',
    margin: '5px 0',
    marginRight: '10px',
    textDecoration: 'line-through',
  },
  KM: {
    position: 'absolute',
    color: '#fff',
    top: '5%',
    left: '5%',
    background: '#dc1c4c',
    width: '15%',
    textAlign: 'center',
    borderRadius: '5px',
  },
  xemProducts: {
    width: '100%',
    bottom: 0,
    position: 'absolute',
    transition: 'height 1.5s',
    background: '#2f59e0',
    height: 0,
    zIndex: -1,
    overflow: 'hidden',
  },
  textXemvsmua: {
    color: '#fff',
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: '30px',
    '&:hover': {
      background: '#dc1c4c',
    },
    fontWeight: 600,
  },
});

export default styles;
