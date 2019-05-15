import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import './index.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { bottleReducer } from "./reducers";
import createSagaMiddleware from 'redux-saga';
import { fetchData } from "./actions";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./saga";
import Blend from "./components/Blend";
import BottleContents from "./components/BottleContents";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(bottleReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default class Test extends PureComponent {
  componentDidMount() {
		store.dispatch(fetchData());
  }
  render() {
    return (
      <div className='appContainer'>
        <BottleContents />
        <div className="verticalDivider"></div>
        <Blend />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById("root")
);
// https://my-json-server.typicode.com/eSalon/interview/db
