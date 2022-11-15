import React from "react";
import Resume from "settings/resume.json";
import { LogoLink } from "components/logo/LogoLink";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectItem from "../components/projects/ProjectItem";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    padding: "10%",
  },
  marginBottom: {
    marginBottom: "10%",
  }
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LogoLink tooltip="Back to Home" />
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Personal Projects Blog
          </Typography>
        </Grid>
        <Grid item container justify="center" xs={12} className={classes.marginBottom}>
          <Grid item xs={12} sm={8} md={6}>
            <Typography variant="body2" align="center">
              I find enjoyment in making random webapps, feel free to checkout
              some of the decisions I made and difficulties I ran into in
              completing these projects.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          {Resume.basics.projects.map((website, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              onClick={() => {
                var link = document.createElement("a");
                link.href = website.url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                document.body.appendChild(link);
                link.click();
              }}
            >
              <ProjectItem
                key={index}
                hexa={website.hexa}
                title={website.title}
                description={website.description}
                image={website.image}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
