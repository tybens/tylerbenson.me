import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName } from "../../utils/getName";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "auto",
    marginBottom: "auto",
  },

  img: {
    transition: "all 0.25s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 10%",
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const handleClickImg = () => {
    navigate("/portfolio");
  };

  return (
    <Container component="main" className={`${classes.main}`} maxWidth="sm">
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={4}
          className={classes.img}
          onClick={handleClickImg}
          style={{display: "none"}}
        >
          <img
            width="100%"
            height="auto"
            alt="tyler headshot"
            src={`${Resume.basics.photo}`}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" gutterBottom>
            <TextDecrypt text={`${Resume.basics.x_title} ${FirstName}`} />
          </Typography>
          <Typography variant="h5" component="h2" gutterButtom>
            <TextDecrypt text={`a ${Resume.basics.job}`} />
          </Typography>
          <FadeIn delay={4000}>
            <Typography variant="body2" component="h2" gutterBottom>
              {Resume.basics.about}
            </Typography>
          </FadeIn>
        </Grid>
      </Grid>
    </Container>
  );
};
