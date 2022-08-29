import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Tooltip, Zoom, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "absolute",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    height: "2.5rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const FooterText = () => {

  const classes = useStyles();
  const handleClickPortfolio = () => {};
  return (
    <Link href={"/portfolio"} key="/portfolio" underline="none" color="inherit">
      <Tooltip title={"Portfolio"} placement="right" TransitionComponent={Zoom}>
        <Button
          variant="text"
          color="inherit"
          onClick={handleClickPortfolio}
          aria-label={"Go to resume"}
          className={classes.iconButton}
        >
          Portfolio
        </Button>
      </Tooltip>
    </Link>
  );
};
