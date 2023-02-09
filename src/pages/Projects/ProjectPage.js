import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import projectData from "./projectData";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: "10%",
  },

  content: {
    margin: "0 auto",
    maxWidth: "36rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },

  blockquote: {
    color: "#666",
    margin: "0",
    paddingLeft: "3em",
    borderLeft: "0.5em #eee solid",
  },

  code: {
    padding: ".2em .4em",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 16.9%, .08)",
  },

  back: {
    width: "40px",
    height: "40px",
    position: "absolute",
    top: theme.spacing(6),
    left: theme.spacing(6),
    boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    borderRadius: "50%",
  }
}));

const ProjectPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={classes.container}>
      <IconButton onClick={() => navigate(-1)} className={classes.back}>
        <ArrowBackIcon />
      </IconButton>
      <div className={classes.content}>
        <ReactMarkdown
          children={projectData[id]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  {...props}
                />
              ) : (
                <code className={classes.code} {...props}>
                  {children}
                </code>
              );
            },
            blockquote: ({ node, ...props }) => (
              <blockquote className={classes.blockquote} {...props} />
            ),
            p: ({ node, ...props }) => (
              <p {...props} style={{ marginBlockStart: "1.25em", fontSize: "18px" }} />
            ),
            a: ({ node, ...props }) => (
              // eslint-disable-next-line
              <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
            // eslint-disable-next-line
            img: ({ node, ...props }) => <img {...props} width="100%" />,
          }}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
