import React from "react";
import Resume from "settings/resume.json";
import { useNavigate } from "react-router-dom";
import { LogoLink } from "components/logo/LogoLink";
import { Typography, Grid } from "@material-ui/core";
import ProjectItem from "../../components/projects/ProjectItem";

const Projects = () => {
  const navigate = useNavigate();
  // const linkToExternalPage = (url) => {
  //   var link = document.createElement("a");
  //   link.href = url;
  //   link.target = "_blank";
  //   link.rel = "noopener noreferrer";
  //   document.body.appendChild(link);
  //   link.click();
  // };
  const local = window.location.href.includes("localhost")

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "10%",
      }}
    >
      <LogoLink tooltip="Back to Home" />
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Personal Projects Blog
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          style={{
            marginBottom: "10%",
          }}
        >
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
            <Grid item key={index} xs={12} sm={6} md={4} onClick={() => navigate(`${website.id}`)}>
                <ProjectItem
                  hexa={website.hexa}
                  title={website.title}
                  description={website.description}
                  image={website.image}
                />
            </Grid>
          ))}
          {local && Resume.basics["wip-projects"].map((website, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} onClick={() => navigate(`${website.id}`)}>
                <ProjectItem
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
