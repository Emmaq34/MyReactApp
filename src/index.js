import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/';
import { Provider } from "react-redux";
import showHideReducer from './Reducers/showHideReducer';
import { createStore } from "redux";
import './index.css'

const store = createStore(showHideReducer);
// render react page
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
//ReactDOM.render(<App />, document.getElementById('root'));

