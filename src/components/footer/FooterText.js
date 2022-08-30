import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link, Tooltip, Zoom, Button, Grid } from "@material-ui/core";

const MyLink = ({ data }) => (
  <Link href={data.href} key={data.href} underline="none" color="inherit">
    <Tooltip title={data.name} placement="top" TransitionComponent={Zoom}>
      <Button variant="text" color="inherit" aria-label={`Go to ${data.name}`}>
        {data.name}
      </Button>
    </Tooltip>
  </Link>
);

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "absolute",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    paddingBottom: "10px"
  },
  gridButtons: {
    position: "absolute",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    width: "50%"
  },
  item: {
    padding: "0 15px",
  },

  iconColor: {
    color: theme.palette.foreground.default,
  },
}));

export const FooterText = ({ hidden }) => {
  const classes = useStyles();
  const pages = [
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: <ContactPageIcon className={classes.iconColor} />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <BusinessCenterIcon className={classes.iconColor} />,
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return hidden ? (
    <Grid
      container
      justifyContent="left"
      alignItems="center"
      direction="row"
      className={classes.gridButtons}
    >
      {pages.map((data) => (
        <Grid item className={classes.item}>
          <MyLink data={data} />
        </Grid>
      ))}
    </Grid>
  ) : (
  <Tooltip title={"Pages"} placement="" TransitionComponent={Zoom} className={classes.speedDial}>
    
      <SpeedDial
        ariaLabel="SpeedDial"
        hidden={false}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={"up"}
        className={classes.iconButton}
      >
        {pages.map((data) => (
          <SpeedDialAction
            key={data.name}
            icon={data.icon}
            tooltipTitle={data.name}
            onClick={handleClose}
            href={data.href}
            sx={{ align: "center" }}
            underline="none"
            color="inherit"
          />
        ))}
      </SpeedDial>
    </Tooltip>
  );
};
