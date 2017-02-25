import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-bootstrap';
import Snackbar from 'material-ui/Snackbar';

import { Header } from 'components';
import { menuItems, pwaMetas, linkPwaMetas } from 'utils/constants';
import './styles.css';

const muStyles = {
  contentStyle: {
    textAlign: 'center'
  }
};

class AppWrapper extends PureComponent {
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
    window.Offline.on('down', () => {
      this.setState({
        online: false,
        showSnackbar: true,
      });
    });
  }

  renderOffOnlineSnackbar() {
    const { online, showSnackbar } = this.state;
    const msg = !online && 'You are now offline';
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

  renderLoading() {
    const { fetching } = this.props;
    return (
      fetching &&
        <Paper style={muStyles} zDepth={1} rounded={false}>
          <CircularProgress />
        </Paper>
    );
  }

  render() {
    const metas = [...pwaMetas];
    const links = [...linkPwaMetas];
    return (
      <MuiThemeProvider>
        <div>
          <Helmet meta={metas} link={links} />
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
