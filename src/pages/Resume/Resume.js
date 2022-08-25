import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Slider from "rc-slider";
import { Grid } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import { Link, withRouter } from "react-router-dom";
import "rc-slider/assets/index.css";
import "./Resume.css";
import resumeData from "settings/resume.json";

const Resume = ({ history }) => {
  const [slider, setSlider] = useState(2);
  const data = resumeData.resume;
  const handleBackClick = () => {
    history.push("/");
  };

  return (
    <main>
      <IconButton className="back-button" onClick={handleBackClick}>
        <ArrowBackIcon />
      </IconButton>
      <section id="portfolio">
        <h2 className="section-heading">some things about me</h2>
        <center>
          <span className="gutter-bottom">Last Updated August 2022</span>
          <Slider
            defaultValue={2}
            min={1}
            max={5}
            marks={{
              1: "Less things",
              2: "Default",
              3: "More things",
              4: "Lots of things",
              5: "EVERYTHING",
            }}
            dots
            onChange={(v) => setSlider(v)}
          />
        </center>
        <div className="portfolio-box">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <PortfolioSection
                data={data.experience}
                title="Employment"
                slider={slider}
              />
            </Grid>
            <Grid item xs={12} md={6} className="item">
              <PortfolioSection
                data={data.hobbies}
                title="Hobbies"
                slider={slider}
              />
              <PortfolioSection
                data={data.projects}
                title="Projects"
                slider={slider}
              />
              {slider > 3 && (
                <PortfolioSection
                  data={data.awards}
                  title="Awards"
                  slider={slider}
                />
              )}
            </Grid>
          </Grid>
        </div>
      </section>
    </main>
  );
};

const PortfolioSection = ({ data, title, slider }) => {
  return (
    <div className="portfolio-section">
      <h1>{title}</h1>
      {title === "Projects" ? (
        <CSSTransition
          classNames="points"
          appear
          in
          unmountOnExit
          mountOnEnter
          timeout={{ enter: 1500, exit: 300 }}
        >
          <Link to="/projects" className="link">
            Click here to view projects page
          </Link>
        </CSSTransition>
      ) : (
        data.map((item, id) => {
          let showItem = item.toggle.indexOf(slider) !== -1;
          const points = item.points.map((p, id) => {
            let showPoint = p.toggle.indexOf(slider) !== -1;
            return (
              <CSSTransition
                key={`${id}+${p.content}`}
                classNames="points"
                appear
                in={showPoint}
                unmountOnExit
                mountOnEnter
                timeout={{ enter: 1500, exit: 300 }}
              >
                <li dangerouslySetInnerHTML={{ __html: p.content }} />
              </CSSTransition>
            );
          });
          return (
            <CSSTransition
              key={`${id}`}
              classNames="points"
              appear
              in={showItem}
              unmountOnExit
              mountOnEnter
              timeout={{ enter: 1500, exit: 500 }}
            >
              <div className="portfolio-item">
                <div className="header">
                  <span className="title">{item.thing}</span>
                  <span className="divider-strong"> || </span>
                  <span className="desc">{item.description}</span>
                  <span className="divider-weak"> || </span>
                  <span className="date"> {item.date}</span>
                </div>
                <ul>{points}</ul>
              </div>
            </CSSTransition>
          );
        })
      )}
    </div>
  );
};

export default withRouter(Resume);
