import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components'
import LandingPage from "./pages/LandingPage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route
                        path="/"
                        render={props => <LandingPage other={props}/>}
                    />
                </Switch>
            </Router>
        </>
    );
};

export default App;
