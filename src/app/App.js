import React from "react";
import { Grid } from "@material-ui/core"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "utils/logCredits";
import { CSSTransition } from "react-transition-group";
import { exit } from "utils/transition";
import { Resume, PageNotFound, Projects, ProjectPage, Home } from "pages";

const CurbsidePaper = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      style={{ minHeight: "100vh", minWidth: "100vw", fontSize: "30px" }}
    >
      <a href="curbside_admission_model.pdf" download>
        Click to Download my Admission Model Paper
      </a>
    </Grid>
  );
};

export const App = () => {
  logCredits();
  const paths = [
    { path: "/", component: <Home /> },
    { path: "/portfolio", component: <Resume /> },
    { path: "/projects", component: <Projects /> },
    { path: "/projects/:id", component: <ProjectPage /> },
    { path: "/paper", component: <CurbsidePaper /> },
    { path: "*", component: <PageNotFound /> },
  ];

  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <HelmetMeta />
        <Routes>
          {paths.map(({ path, component }, id) => (
            <Route
              key={id}
              path={path}
              exact
              element={<Transition>{component}</Transition>}
            />
          ))}
        </Routes>
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
