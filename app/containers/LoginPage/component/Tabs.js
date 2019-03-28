import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Warning from '@material-ui/icons/Warning';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import classNames from 'classnames';
import style from '../style';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     padding: 0,
//   },
// });

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    email: '',
    pass: '',
    reasonEmpty: '',
  };

  handleChangeValue = (event, value) => {
    this.setState({ value });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSummit = () => {
    const { email } = this.state;
    const { pass } = this.state;
    // const { reasonEmpty } = this.state;
    //   console.log(this.state.email,'login');
    if (email === '') this.setState({ reasonEmpty: 'true' });
    else this.setState({ reasonEmpty: 'false' });
    if (pass === '') this.setState({ reasonEmpty: 'true' });
    else this.setState({ reasonEmpty: 'false' });
  };

  render() {
    const { classes } = this.props;
    const { value, email, pass, reasonEmpty } = this.state;

    return (
      <Grid item xs={5} className={classNames(classes.form, classes.root)}>
        <AppBar position="static" style={{ backgroundColor: '#042122' }}>
          <Tabs value={value} onChange={this.handleChangeValue}>
            <Tab label="Sign In" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        {value === 0 ? (
          <TabContainer>
            <Paper className={classes.paper} elevation={1}>
              <Typography
                variant="h4"
                component="h2"
                className={classes.textTypo}
              >
                Sign In
              </Typography>
              <Typography variant="h7" className={classes.textTypo}>
                Swiftly Sign In With
              </Typography>
              <Grid>
                <Button
                  variant="outlined"
                  className={classNames(classes.button, classes.buttonFace)}
                >
                  Facebook
                </Button>
                <Button
                  variant="outlined"
                  className={classNames(classes.button, classes.buttonGoogle)}
                >
                  Google
                </Button>
                <Typography className={classes.textTypo}>
                  Or Use Your Email
                </Typography>
              </Grid>
              <FormControl
                className={classes.reason}
                error={reasonEmpty}
                aria-describedby="component-error-text1"
              >
                <Input
                  placeholder="Email"
                  name={email}
                  onChange={this.handleChange('email')}
                  className={classes.input}
                  type="email"
                />
                <FormHelperText id="component-error-text1">
                  {reasonEmpty ? 'Lý do không được để trống' : ''}
                  {reasonEmpty ? (
                    <Warning
                      style={{ color: '#F44336', float: 'right', fontSize: 15 }}
                    />
                  ) : (
                    ''
                  )}
                </FormHelperText>
              </FormControl>
              <FormControl
                className={classes.reason}
                error={reasonEmpty}
                aria-describedby="component-error-text1"
              >
                <Input
                  placeholder="Password"
                  name={pass}
                  className={classes.input}
                  type="password"
                />
                <FormHelperText id="component-error-text1">
                  {reasonEmpty ? 'Lý do không được để trống' : ''}
                  {reasonEmpty ? (
                    <Warning
                      style={{ color: '#F44336', float: 'right', fontSize: 15 }}
                    />
                  ) : (
                    ''
                  )}
                </FormHelperText>
              </FormControl>
              <br />
              <Grid
                item
                container
                direction="row"
                style={{
                  margin: '0 auto',
                  position: 'absolute',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={this.state.checkedG}
                  // onChange={this.handleChange('checkedG')}
                  value="checkedG"
                  style={{ color: '#fff' }}
                />
                <Typography style={{ color: '#FFF', lineHeight: 3 }}>
                  Remember Me
                </Typography>
              </Grid>
              <br />
              <Button
                variant="contained"
                className={classes.buttonSignIn}
                onClick={() => this.onSummit()}
              >
                Sign In
              </Button>
            </Paper>
          </TabContainer>
        ) : (
          ''
        )}
        {value === 1 ? (
          <TabContainer>
            <Paper className={classes.paper} elevation={1}>
              <Typography
                variant="h4"
                component="h2"
                className={classes.textTypo}
              >
                Sign Up
              </Typography>
              <Typography variant="h7" className={classes.textTypo}>
                Swiftly Sign Up With
              </Typography>
              <Grid>
                <Button
                  variant="outlined"
                  className={classNames(classes.button, classes.buttonFace)}
                >
                  Facebook
                </Button>
                <Button
                  variant="outlined"
                  className={classNames(classes.button, classes.buttonGoogle)}
                >
                  Google
                </Button>
                <Typography className={classes.textTypo}>
                  Or Use Your Email
                </Typography>
              </Grid>
              <Input
                placeholder="User name"
                className={classes.input}
                type="text"
              />
              <Input
                placeholder="Email"
                className={classes.input}
                type="email"
              />
              <Input
                placeholder="Password"
                className={classes.input}
                type="password"
              />
              <Input
                placeholder="Repeat your password"
                className={classes.input}
                type="password"
              />
              <br />
              <Grid
                item
                container
                direction="row"
                style={{
                  margin: '0 auto',
                  position: 'absolute',
                  justifyContent: 'center',
                }}
              >
                <Checkbox
                  checked={this.state.checkedG}
                  // onChange={this.handleChange('checkedG')}
                  value="checkedG"
                  style={{ color: '#fff' }}
                />
                <Typography style={{ color: '#FFF', lineHeight: 3 }}>
                  Remember Me
                </Typography>
              </Grid>
              <br />
              <Button variant="contained" className={classes.buttonSignIn}>
                Sign Up
              </Button>
            </Paper>
          </TabContainer>
        ) : (
          ''
        )}
      </Grid>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(SimpleTabs);
