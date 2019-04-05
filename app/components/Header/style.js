const styles = () => ({
  body: {
    width: '100%',
    paddingTop: '30px',
    transition: 'all 0.4s ease',
    fontSize: '14px',
    background: '#FFFFFF',
  },
  container2: {
    width: '1200px',
    margin: '0 auto',
  },
  border: {
    borderTop: '1px solid #efefef',
    marginTop: '30px',
    borderBottom: '1px solid #efefef',
  },
  seach: {
    background: '#DC1C4C',
    width: '100%',
    padding: '8px 10px',
    marginTop: '8px',
    borderRadius: 25,
  },
  input: {
    width: '80%',
    background: '#FFFFFF',
    height: '40px',
    paddingLeft: '30px',
    borderRadius: '20px 0px 0px 20px',
    outline: 'none',
  },
  iconSeach: {
    background: '#FFFFFF',
    width: '10%',
    height: '40px',
    borderRadius: '0px 20px 20px 0px',
    '&:hover': {
      background: '#FFFFFF',
    },
  },
  iconPerson: {
    width: '10%',
    height: '40px',
    padding: '9px',
    cursor: 'pointer',
    textAlign: 'center',
    position: 'relative',
    '&:hover': {
      color: '#fff',
    },
    '&:hover $divlogin': {
      display: 'block',
    },
  },
  divlogin: {
    position: 'absolute',
    top: '40px',
    right: '-10px',
    display: 'none',
    width: '150px',
    zIndex: 2000,
  },
  menu: {
    width: '25%',
    background: '#DC1C4C',
    borderRadius: 5,
  },
  floatLeft: {
    float: 'left',
    padding: '14px 0 14px 18px',
    cursor: 'pointer',
  },
  menuHover: {
    fontSize: '12px',
    fontWeight: 700,
    '&:hover': {
      color: 'red',
    },
  },
  cart: {
    float: 'left',
    marginLeft: '11px',
    width: '13%',
    cursor: 'pointer',
    background: '#DC1C4C',
    borderRadius: 5,
    padding: '13px',
    position: 'relative',
    '&:hover $divTTCart': {
      display: 'block',
    },
    zIndex: 1000,
  },
  divTTCart: {
    width: '280px',
    padding: '10px 15px',
    // height: '100px',
    position: 'absolute',
    top: '50px',
    display: 'none',
    right: 0,
  },
  btnGioHang: {
    border: '1px solid #dc1c4c',
    background: '#FFFFFF',
    fontSize: '10px',
    textAlign: 'center',
    padding: '4px',
    marginTop: '10px',
    width: '90%',
  },
  btnthanhtoan: {
    // border: '1px solid #FFFFFF',
    background: '#dc1c4c',
    margin: '10%',
    fontSize: '10px',
    textAlign: 'center',
    padding: '4px',
    marginTop: '10px',
    width: '90%',
    color: '#FFFFFF',
  },
  carHover: {
    color: '#FFFFFF',
  },
});

export default styles;
