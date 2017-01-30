import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './styles.css';

class Header extends Component {
  state = {
    open: false,
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    const { menuItems } = this.props;
    return (
      <section className="header">
        <AppBar onLeftIconButtonTouchTap={this.handleToggle} title="News" />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          {menuItems.map((item, index) => <a key={index} href={item.url}><MenuItem>{item.title}</MenuItem></a>)}
        </Drawer>
      </section>
    )
  }
}

Header.propTypes = {
  menuItems: PropTypes.array,
};

Header.defaultProps = {
  menuItems: [],
};

export default Header;
