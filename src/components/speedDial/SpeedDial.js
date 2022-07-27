import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab";
import Resume from "../../settings/resume.json";

const useStyles = makeStyles((theme) => ({
    speedDial: {
        position: "absolute",
        top: theme.spacing(6),
        right: theme.spacing(6),
    },

    speedDialPages: {
        position: "absolute",
        bottom: theme.spacing(6),
        left: theme.spacing(6)
    },

    iconColor: {
        color: theme.palette.foreground.default,
    },
}));

export const SpeedDials = ({ socials = true}) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const actionIconsSocials = Resume.basics.profiles.map((action) => (
        <SpeedDialAction
            key={action.network.toLowerCase()}
            icon={<i className={`${action.x_icon} ${classes.iconColor}`}></i>}
            tooltipTitle={action.network}
            onClick={handleClose}
            href={action.url}
            sx={{align: "center"}}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
        />
    ));

    const actionIconsPages = Resume.basics.pages.map((action) => (
        <SpeedDialAction
            key={action.page.toLowerCase()}
            icon={<i className={`${action.x_icon} ${classes.iconColor}`}></i>}
            tooltipTitle={action.page}
            onClick={handleClose}
            href={action.url}
            sx={{align: "center"}}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
        />
    ));

    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial"
                className={socials ? classes.speedDial : classes.speedDialPages}
                hidden={false}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction={socials ? "down" : "right"}
            >
                {socials ? actionIconsSocials : actionIconsPages}
            </SpeedDial>
        </>
    );
};
