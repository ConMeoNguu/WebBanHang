const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  width: {
    width: 1200,
    margin: 'auto',
    marginTop: 20,
  },
  borderBox: {
    width: 370,
    height: 370,
    border: '3px solid #DC1C4C',
  },
  imageProduct: {
    width: '100%',
    height: '100%',
  },
  textName: {
    color: '#DC1C4C',
    fontSize: 25,
    fontWeight: 600,
  },
  textPrice: {
    color: '#DC1C4C',
    fontSize: 20,
    fontWeight: 550,
  },
  textStrike: {
    fontSize: 14,
    color: '#B6B6B6',
  },
  colorStar: {
    color: '#EDC167',
  },
  textField: {
    width: 100,
  },
  button: {
    marginLeft: 50,
    color: '#fff',
    fontWeight: 600,
    '&hover': {
      backgroundColor: '#fff',
    },
  },
  widthForm: {
    width: 100,
  },
  checkName: {
    fontSize: 14,
    color: '#969696',
  },
  paper: {
    backgroundColor: 'none',
  },
  inforProducts: {
    marginTop: 100,
  },
  textTab: {
    fontSize: 14,
    color: '#808080',
    paddingTop: 20,
  },
  buttonText: {
    marginTop: 20,
    color: '#fff',
    fontWeight: 600,
    '&hover': {
      backgroundColor: '#fff',
    },
  },
  formControl: {
    width: '80%',
    margin: 20,
  },
  rating: {
    marginTop: 20,
  },
  starRating: {
    display: 'inline-block',
    padding: '3px',
    verticalAlign: 'middle',
    lineHeight: 1,
    fontSize: ' 1.5em',
    color: '#EDC167',
    transition: 'color .2s ease-out',
    // position: 'absolute',
    // overflow: 'hidden',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  // &__checkbox {
  //   @extend %visually-hidden;
  // }
  isSelected: {
    color: '#EDC167',
  },

  isDisabled: {
    '&:hover': {
      cursor: 'default',
    },
  },
});

export default styles;
