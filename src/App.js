import React from "react";
import { BrowserRouter, Route, Switch,  } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BaseStyles, theme  } from "@primer/components";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Home/Home";
import "./App.css";
import Certificates from './Certificates/Certificates'


function App() {
  return (
    <BaseStyles>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <DefaultLayout>
              <Route path="/" exact strict>
                <Home/>
              </Route>
              <Route path="/certificates" exact strict>
                <Certificates/>
              </Route>
            </DefaultLayout>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </BaseStyles>
  );
}

export { App as default };
