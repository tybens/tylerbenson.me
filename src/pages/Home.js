import React from "react";
import { LogoLink } from "components/logo/LogoLink";
import { Content } from "components/content/Content";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DisplacementSphere from "components/background/DisplacementSphere";
import { ThemeToggle } from "components/theme/ThemeToggle";
import { FooterText } from "components/footer/FooterText";
import { SocialIcons } from "components/content/SocialIcons";
import { SpeedDials } from "components/speedDial/SpeedDial";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflowX: "hidden",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DisplacementSphere />
      <LogoLink />
      <Content />
      <ThemeToggle />
      <Hidden smDown>
        <FooterText hidden={true} />
        <SocialIcons />
      </Hidden>
      <Hidden mdUp>
        <FooterText hidden={false} />
        <SpeedDials />
      </Hidden>
    </div>
  );
};

export default Home;
