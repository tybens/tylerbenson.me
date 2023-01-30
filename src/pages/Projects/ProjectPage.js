import React from "react";
import { LogoLink } from "components/logo/LogoLink";
import { makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import projectData from "./projectData";

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
}));

const ProjectPage = () => {
  const classes = useStyles();
  const { id } = useParams();

  return (
    <div className={classes.container}>
      <LogoLink tooltip="Back to Home" />
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
