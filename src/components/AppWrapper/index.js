import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-bootstrap';
import Snackbar from 'material-ui/Snackbar';
import { Header } from 'components';
import { menuItems } from 'utils/constants';
import './styles.css';

const muStyles = {
  contentStyle: {
    textAlign: 'center'
  }
};

class AppWrapper extends Component {
  state = {
    online: true,
    showSnackbar: false,
  };

  handleRequestClose = () => {
    this.setState({
      showSnackbar: false,
    });
  }

  componentWillMount() {
    if (!navigator.onLine) {
      this.setState({
        online: navigator.onLine,
        showSnackbar: true,
      });
    }
  }

  renderOffOnlineSnackbar() {
    const { online, showSnackbar } = this.state;
    const msg = !online && 'You are now Offline';
    return (
      <Snackbar
        contentStyle={muStyles.contentStyle}
        open={showSnackbar}
        message={msg}
        autoHideDuration={2000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header menuItems={menuItems} />
          <Grid>
            {this.props.children}
          </Grid>
          {this.renderOffOnlineSnackbar()}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AppWrapper;
