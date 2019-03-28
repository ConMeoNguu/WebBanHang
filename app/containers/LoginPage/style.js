import banner from '../../images/banner.jpg';

const styles = () => ({
  background: {
    backgroundImage: `url('${banner}')`,
    backgroundSize: 'cover',
    height: 980,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  content: {
    marginTop: 100,
    margin: 'auto',
  },
  textStyle: {
    color: 'white',
    fontSize: '4.5rem',
    textAlign: 'center',
    fontWeight: 400,
  },
  form: {
    margin: 'auto',
    marginTop: 50,
    textAlign: 'center',
  },
  paper: {
    backgroundColor: 'rgba(19, 17, 17, 0.62) !important',
    boxShadow: '2px 2px 21px rgba(0, 0, 0, 0.29)',
    paddingTop: 0,
    color: '#fff !important',
    position: 'relative',
  },
  button: {
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: 0,
    marginLeft: 60,
    marginRight: 60,
    width: 200,
    marginTop: 20,
  },
  textTypo: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 20,
  },
  input: {
    color: '#fff',
    fontSize: 18,
    width: 500,
    backgroundColor: '#787773',
    paddingLeft: 5,
    marginTop: 20,
    height: 40,
  },
  buttonSignIn: {
    backgroundColor: '#4CAF50',
    width: 500,
    marginTop: 30,
    marginBottom: 50,
    '&:hover': {
      backgroundColor: '#F8504C',
    },
  },
  formControl: {
    color: '#fff !important',
  },
  buttonFace: {
    '&:hover': {
      backgroundColor: '#324E80',
    },
  },
  buttonGoogle: {
    '&:hover': {
      backgroundColor: '#D64938',
    },
  },
});

export default styles;
