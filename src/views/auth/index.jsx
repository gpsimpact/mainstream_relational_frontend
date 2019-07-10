import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Routes } from './routes';

class Auth extends PureComponent {
  render() {
    return (
          <section className="bg-blue">
            <div className="container py-5">{Routes}</div>

          </section>
 
    );
  }
}

export default withRouter(Auth);
