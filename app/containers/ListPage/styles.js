const styles = () => ({
  width: {
    width: 1200,
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  paper: {
    marginBottom: 30,
  },
  card: {
    height: 'auto',
  },
  imageProduct: {
    width: '100%',
    height: '100%',
  },
  priceProduct: {
    color: '#DC1C4C',
    fontSize: 16,
    fontWeight: 550,
    textAlign: 'right',
  },
  hoverImage: {
    '&:hover': {
      border: '3px solid #DC1C4C',
    },
  },
  hoverText: {
    fontSize: 20,
    paddingTop: 20,
    '&:hover': {
      color: '#DC1C4C',
    },
  },
  stylesButton: {
    fontSize: 12,
    marginLeft: 17,
  },
  button: {
    borderRadius: 0,
    fontSize: 12,
  },
  display: {
    width: '100%',
  },
  textPaper: {
    fontSize: 20,
    color: '#DC1C4C',
    padding: 20,
    fontStyle: 'italic',
    display: 'flex',
  },
  amountProducts: {
    color: '#707070',
    paddingLeft: 10,
    fontSize: 14,
  },
  widthItems: {
    width: 220,
  },
  listProducts: {
    width: '25%',
    marginRight: 25,
    height: 500,
  },
  backgroundTitle: {
    backgroundColor: '#DC1C4C',
    borderRadius: 'none',
  },
  textTitle: {
    fontSize: 20,
    color: '#fff',
    padding: 15,
  },
  brandProducts: {
    height: 270,
    padding: 20,
  },
  listBrand: {
    height: 200,
  },
  flex: {
    display: 'flex',
  },
});

export default styles;
