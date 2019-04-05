import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { StarBorder, Star } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import styles from './styles';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    name: '',
    email: '',
    title: '',
    content: '',
    rating: null,
    tempRating: null,
    isDisplayForm: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    this.forceUpdate();
  }

  OnhandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  rate = rating => {
    this.setState({
      rating,
      tempRating: rating,
    });
  };

  starOver = rating1 => {
    // this.state.tempRating = this.state.rating;
    // this.state.rating = rating1;
    this.setState({
      rating: rating1,
    });
  };

  starOut = () => {
    // this.state.rating = this.state.tempRating;
    const { tempRating } = this.state;
    this.setState({ rating: tempRating });
  };

  showForm = () => {
    const { isDisplayForm } = this.state;
    this.setState({ isDisplayForm: !isDisplayForm });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const stars = [];

    for (let i = 0; i < 5; i += 1) {
      let klass = classes.starRating;

      if (this.state.rating >= i && this.state.rating != null) {
        klass = classNames(classes.isSelected, classes.starRating);
      }
      /* eslint-disable */
      stars.push(
        <React.Fragment>
          {this.state.rating >= i && this.state.rating != null ? (
            <label
              key={i}
              className={klass}
              onClick={() => this.rate(i)}
              onMouseOver={() => this.starOver(i)}
              onMouseOut={this.starOut}
            >
              <Star />
            </label>
          ) : (
            <label
              key={i}
              className={klass}
              onClick={() => this.rate(i)}
              onMouseOver={() => this.starOver(i)}
              onMouseOut={this.starOut}
            >
              <StarBorder />
            </label>
          )}
        </React.Fragment>,
      );
      /* eslint-enable */
    }
    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          style={{ backgroundColor: '#FAFAFA' }}
        >
          <Tab label="Thông tin sản phẩm" />
          <Tab label="Đánh giá" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <Typography className={classes.textTab}>
              Son lót dưỡng đầy môi Lip Filler đã được ra mắt phiên bản hoàn
              chỉnh giúp bạn dễ dàng có được lớp son hoàn hảo nhờ khả năng dưỡng
              ẩm, che phủ rãnh môi. <br />
              <b>Công dụng:</b> <br />- Làm đầy rãnh môi và cấp ẩm cho môi hiệu
              quả suốt 12g với thành phần chiết xuất Hyaluronic Acid <br />- Tạo
              được hiệu ứng môi căng mọng, mềm mịn, không khô và lộ vân môi khi
              sử dụng với bất kì kem lỳ nào, giúp sắc màu son bật lên đúng màu{' '}
              <br />- Hiệu quả dưỡng môi hồng mềm mịn khi sử dụng thường xuyên
              trong 30 ngày
              <br />
              <b>Hướng dẫn sử dụng:</b>
              <br />- Dùng Lip Filler thoa 1 lớp mỏng giúp làm lớp lót + dưỡng
              cho cho môi - Thoa bất kì màu son môi nào bạn thích để có bờ môi
              hoàn hảo!
            </Typography>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Typography className={classes.textTab}>
              <b style={{ fontSize: 22 }}>Đánh giá sản phẩm:</b> <br />
            </Typography>
            <StarBorder className={classes.colorStar} />
            <StarBorder className={classes.colorStar} />
            <StarBorder className={classes.colorStar} />
            <StarBorder className={classes.colorStar} />
            <StarBorder className={classes.colorStar} />
            <Typography className={classes.textStrike}>(0 đánh giá)</Typography>
            <Button
              className={classes.buttonText}
              color="primary"
              variant="contained"
              onClick={this.showForm}
            >
              Viết đánh giá
            </Button>

            {this.state.isDisplayForm ? (
              <React.Fragment>
                <Typography className={classes.textTab}>
                  <b style={{ fontSize: 22 }}>Viết đánh giá:</b> <br />
                </Typography>
                <Grid direction="column">
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-helper">Tên</InputLabel>
                    <Input
                      id="component-helper"
                      value={this.state.name}
                      name="name"
                      onChange={this.OnhandleChange}
                      aria-describedby="component-helper-text"
                      type="text"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-helper">Email</InputLabel>
                    <Input
                      id="component-helper"
                      value={this.state.email}
                      name="email"
                      onChange={this.OnhandleChange}
                      aria-describedby="component-helper-text"
                      type="email"
                    />
                    <Typography className={classes.textTab}>
                      <b style={{ fontSize: 22 }}>Đánh giá:</b> <br />
                    </Typography>
                    <Grid direction="row" className={classes.starRating}>
                      {stars}
                    </Grid>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-helper">Tiêu đề</InputLabel>
                    <Input
                      id="component-helper"
                      value={this.state.title}
                      name="title"
                      onChange={this.OnhandleChange}
                      aria-describedby="component-helper-text"
                      type="text"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-helper">Nội dung</InputLabel>
                    <Input
                      id="component-helper"
                      value={this.state.content}
                      name="content"
                      onChange={this.OnhandleChange}
                      aria-describedby="component-helper-text"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <Button
                  className={classes.buttonText}
                  color="primary"
                  variant="contained"
                >
                  Gửi đánh giá
                </Button>
              </React.Fragment>
            ) : (
              ''
            )}
          </TabContainer>
        )}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
