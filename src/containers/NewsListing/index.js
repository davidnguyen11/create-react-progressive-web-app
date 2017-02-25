import './styles.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import { CardComponent, NoInternet } from 'components';
import Paper from 'material-ui/Paper';

const muStyles = {
  padding: 50,
  textAlign: 'center',
  marginBottom: 20,
};

class NewsListing extends Component {
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
    const { articles } = this.props;
    let element = null;
    if (!navigator.onLine) {
      element = <NoInternet />
    } else {
      element = articles.map((item, index) => <CardComponent key={index} {...item} />);
    }
    return (
      <div className="app">
        {element}
        {this.renderLoading()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newsState: state.newsReducer,
  articles: state.newsReducer.articles,
  source: state.newsReducer.source,
  fetching: state.newsReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsListing);
