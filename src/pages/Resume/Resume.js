import React, { Component } from 'react';

import Slider from 'rc-slider';
import { Grid } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';

import 'rc-slider/assets/index.css';
import "./Resume.css";
import data from "settings/resume.json";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      slider: 2,
    };
  }
  render() {
    return (
      <main>
        <section id="portfolio">
          <h2 className="section-heading">things i've done</h2>
          <center>
            <span>Last Updated February 2022</span>
            <Slider
              defaultValue={2}
              min={1}
              max={5}
              marks={{
                1: 'Less things',
                2: 'Default',
                3: 'More things',
                4: 'Lots of things',
                5: 'EVERYTHING',
              }}
              dots
              onChange={v => this.setState({ slider: v })}
            />
          </center>
          <div className="portfolio-box">
            <Grid container>
              <Grid item xs={12} md={6} className="item">
                <PortfolioSection
                  data={this.state.data.experience}
                  title="Employment"
                  slider={this.state.slider}
                />
              </Grid>
              <Grid item xs={12} md={6} className="item">
                <PortfolioSection
                  data={this.state.data.hobbies}
                  title="Hobbies"
                  slider={this.state.slider}
                />
                {/* <PortfolioSection
                  data={this.state.data.projects}
                  title="Projects"
                  slider={this.state.slider}
                /> */}
                {this.state.slider > 2 &&
                  <PortfolioSection
                    data={this.state.data.awards}
                    title="Awards"
                    slider={this.state.slider}
                  />
                }
              </Grid>
            </Grid>
          </div>
        </section>
      </main>
    );
  }
}

class PortfolioSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      title: props.title,
      slider: props.slider
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.slider !== prevProps.slider) {
      this.setState({
        slider: this.props.slider
      })
    }
  }

  render() {
    return (
      <div className="portfolio-section">
        <h1>{this.state.title}</h1>
        {
          this.state.data.map((item) => {
            let showItem = item.toggle.indexOf(this.state.slider) !== -1;
            const points = item.points.map((p) => {
              let showPoint = p.toggle.indexOf(this.state.slider) !== -1;
              return (
                <CSSTransition
                  classNames="points"
                  appear
                  in={showPoint}
                  unmountOnExit
                  mountOnEnter
                  timeout={{enter: 1500, exit: 300}}
                >
                  <li dangerouslySetInnerHTML={{ __html: p.content }} />
                </CSSTransition>
              );
            });
            return (
              <CSSTransition
                classNames="points"
                appear
                in={showItem}
                unmountOnExit
                mountOnEnter
                timeout={{enter: 1500, exit: 300}}
              >
                <div className="portfolio-item">
                  <div className="header">
                    <span className="title">{item.thing}</span>
                    <span className="divider-strong"> || </span>
                    <span className="desc">{item.description}</span>
                    <span className="divider-weak"> || </span>
                    <span className="date"> {item.date}</span>
                  </div>
                  <ul>
                      {points}
                  </ul>
                </div>
              </CSSTransition>
            );
          })
        }
      </div>
    )
  }
}

export default Resume;
