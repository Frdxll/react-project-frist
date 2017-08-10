import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Content from './components/content';

// Render the main component into the dom
ReactDOM.render(<div>
  <App />
  <Content/>
</div>, document.getElementById('app'));
