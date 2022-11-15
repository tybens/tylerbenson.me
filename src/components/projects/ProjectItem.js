import React from "react";
import { Fade } from "react-reveal";
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  landing: {
    display: "block",
    margin: 20,
    position: "relative",
    fontSize: 20,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      // margin: 0,
    },
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.025)",
    },
  },

  title: {
    position: "relative",
    fontWeight: "bold",
    marginTop: 0,
  },

  landingImage: {
    backgroundPosition: "50% 50%",
    // height: "100%",
    width: "100%",
  },

  price: {
    marginTop: 0,
  },
}));

const ProjectItem = ({ hexa, title, description, image }) => {
    const classes = useStyles();

  return (
    <Grid
      item
      xs={10}
      className={classes.landing}
      container
      justify="center"
      style={{ marginTop: Math.random() * 200 }}
    >
      <Fade bottom>
        <img src={image} alt={title} className={classes.landingImage} />
        <Typography
        variant="h5"
          component="h3"
          className={classes.title}
          align="right"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="h2"
          className={classes.price}
          align="right"
        >
          {description}
        </Typography>
      </Fade>
    </Grid>
  );
};

export default ProjectItem;
