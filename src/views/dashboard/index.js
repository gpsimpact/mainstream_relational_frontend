import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Routes } from './routes';
import "./style.css";

class U extends PureComponent {
  render() {
    return <div>{Routes()}</div>;
  }
}

export default withRouter(U);
