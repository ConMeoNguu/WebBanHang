const styles = () => ({
  body: {
    margin: '15px 0',
    minHeight: '350px',
    display: 'none',
  },
  menuSP: {
    padding: '15px',
    borderBottom: '1px solid #c3b9b9',
    fontSize: '12px',
    fontWeight: 'bold',
    '&:hover': {
      color: 'red',
    },
  },
  menuslice: {
    background: '#FFF',
    position: 'relative',
  },
  divhover: {
    position: 'absolute',
    display: 'none',
    right: '-100%',
    width: '100%',
    top: 0,
    padding: '20px 30px 10px 30px',
    background: '#FFF',
    borderRadius: '3px',
    border: '1px solid #efefef',
  },
  hover: {
    position: 'relative',
    cursor: 'pointer',
    '&:hover $divhover': {
      display: 'block',
    },
  },
  chaLoaiSP: {
    padding: '10px 0',
    width: '100%',
    borderBottom: '2px solid red',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '13px',
  },
  loaiSP: {
    padding: '5px 0',
    fontSize: '13px',
    borderBottom: '1px solid #efefef',
    '&:hover': {
      color: 'red',
    },
  },
});

export default styles;
