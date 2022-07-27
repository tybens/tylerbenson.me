import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import { TextDecrypt } from "../content/TextDecrypt";
import Resume from "../../settings/resume.json";
import {
  HeartIcon,
  HeartIconFilled,
  ResumeButton,
} from "../content/ResumeButton";
import { SpeedDials } from "../speedDial/SpeedDial";

const useStyles = makeStyles((theme) => ({
  footerPages: {
    transition: "all 0.5s ease",
    display: "flex",
    direction: "row",
    justify: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export const FooterText = () => {
  const classes = useStyles();

  return (
    <div>
      <SpeedDials socials={false} />
    </div>
  );
};
