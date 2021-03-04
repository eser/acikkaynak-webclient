import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BaseStyles, theme } from "@primer/components";
import Home from "./Home/Home";
import './App.css'

function App() {
  return (
    <BaseStyles>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact strict>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </BaseStyles>
  );
}

export { App as default };
