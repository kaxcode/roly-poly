import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div>
        <p>Hey, I'm on every page now!!!</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
