import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import history from './utils/history';

import { theme } from './styles/variables';

import { LayoutRoute, MainLayout } from './components/Layouts';


import Home from './components/Home';

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
      <Switch>
	      <LayoutRoute
		    exact
		    path="/"
		    layout={MainLayout}
		    component={Home}
		  />
      </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
