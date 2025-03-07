import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import InvoicePage from './components/InvoicePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/invoice/:orderId" component={InvoicePage} />
      </Switch>
    </Router>
  );
}

export default App;
