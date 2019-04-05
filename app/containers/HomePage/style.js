const style = () => ({
  body: {
    // width: '1200px',
    // margin: '0 auto',
    background: '#FFF',
    // minHeight: '350px',
    marginBottom: '10px',
  },
  bodySP: {
    border: '1px solid #ddd',
    padding: '25px 0px 25px 15px',
  },
  divSpHot: {
    marginTop: '20px',
    paddingTop: '10px',
  },
  titelSpHot: {
    color: '#dc1c4c',
    fontSize: '20px',
    fontWeight: 700,
    margin: '10px 0 15px',
    padding: '0 0 0 30px',
  },
  btnHot: {
    width: '50%',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 700,
    height: '54px',
    marginBottom: '15px',
    lineHeight: '54px',
  },
  btnActive: {
    color: '#fff',
    width: '50%',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 700,
    height: '54px',
    marginBottom: '15px',
    lineHeight: '54px',
    background: '#dc1c4c',
  },
  btnNext: {
    width: '100%',
    position: 'absolute',
    top: '45%',
  },
  before: {
    position: 'absolute',
    padding: '5px',
    width: '45px',
    height: '45px',
    color: '#e4e1e1',
    cursor: 'pointer',
    '&:hover': {
      background: '#e4e1e1',
      color: '#aaa',
      borderRadius: '8px',
    },
  },
});

export default style;
