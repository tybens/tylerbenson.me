import React, { useContext } from "react";
import { ThemeContext } from "components/theme/ThemeProvider";
import { makeStyles } from "@material-ui/core/styles";
import { HeartIcon, HeartIconFilled } from "components/content/ResumeButton";
import { Link, Tooltip, IconButton, Zoom } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "absolute",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const FooterText = () => {
  const { theme } = useContext(ThemeContext);

  const classes = useStyles();
  const handleClickPortfolio = () => {};
  return (
    <Link
      href={"/portfolio"}
      key="/portfolio"
      underline="none"
      color="inherit"
    >
      <Tooltip title={"Portfolio"} placement="right" TransitionComponent={Zoom}>
        <IconButton
          color="inherit"
          onClick={handleClickPortfolio}
          aria-label={"Go to resume"}
          className={classes.iconButton}
        >
          {theme === "light" ? <HeartIcon /> : <HeartIconFilled />}
        </IconButton>
      </Tooltip>
    </Link>
  );
};
