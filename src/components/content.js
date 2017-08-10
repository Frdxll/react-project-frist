require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        it's true
        <span>good</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
