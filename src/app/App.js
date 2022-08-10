import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "utils/logCredits";
import { CSSTransition } from "react-transition-group";
import { exit } from "utils/transition";
import { Resume, PageNotFound, Projects, Home } from "pages";

export const App = () => {
  logCredits();
  const paths = [
    { path: "/", component: <Home /> },
    { path: "/portfolio", component: <Resume /> },
    { path: "/projects", component: <Projects /> },
    { path: "*", component: <PageNotFound /> },
  ];

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <HelmetMeta />
        <Switch>
          {paths.map(({ path, component }, id) => (
            <Route key={id} path={path} exact>
              <Transition>{component}</Transition>
            </Route>
          ))}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

const Transition = ({ children }) => {
  return (
    <CSSTransition
      appear={true}
      onExit={(node, appears) => exit(node, appears)}
      timeout={{ exit: 150 }}
    >
      {children}
    </CSSTransition>
  );
};
