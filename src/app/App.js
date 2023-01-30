import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "utils/logCredits";
import { CSSTransition } from "react-transition-group";
import { exit } from "utils/transition";
import { Resume, PageNotFound, Projects, ProjectPage, Home } from "pages";

const CurbsidePaper = () => {
  var link = document.createElement("a");
  link.href = "curbside_admission_model.pdf";
  
  document.body.appendChild(link);

  link.click();
  
  return null;
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
