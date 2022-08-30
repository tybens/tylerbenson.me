import React from "react";
import styled from "styled-components";
import Card from "components/projects/Card";
import Resume from "settings/resume.json";
import { IconButton } from "@mui/material";
import { Typography, Tooltip, Zoom } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: calc(50vw - 160px);

  /* Fake padding-right */
  &::after {
    content: "";
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }

  > button {
    margin-right: 40px;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;
const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    padding: "10% 0",
  },
}));

const Projects = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Tooltip title={"Back"} placement="right" TransitionComponent={Zoom}>
        <IconButton
          style={{ position: "absolute", top: 10, left: 10 }}
          size="large"
          className="back-button"
          onClick={() => history.push("/")}
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
      <Typography variant="h4" align="center">
        Projects
      </Typography>
      <Page>
        <Grid>
          {Resume.basics.projects.map((website, index) => (
            <Card
              key={index}
              hexa={website.hexa}
              title={website.title}
              description={website.description}
              image={website.image}
              onClick={() => {
                console.log("hello world");
                var link = document.createElement("a");
                link.href = website.description;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                document.body.appendChild(link);
                link.click();
              }}
            />
          ))}
        </Grid>
      </Page>
    </div>
  );
};

export default withRouter(Projects);
