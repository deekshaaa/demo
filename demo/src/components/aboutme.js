/** @format */

import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ margin: "auto", width: "100%" }}>
        <Grid className="aboutme-grid">
          <Cell col={12}>
            <div className="aboutme-text">
              <h1>About Me</h1>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

              <p>
                20 year old undergraduate with eye-catching writing skills.
                Worked under several foundations to provied and make best use of
                skills. Technical writer, visionary, results-driven, equipped
                with verifiable success in the areas of content writing, web
                designing, and programming. Strong ability to utilize a wide
                range of transferable skills and knowledge to consistently
                exceed expectations.
              </p>
              <p>
                Dedicated to improving knowledge and experimenting in the
                interested fields while pursuing a degree. Looking forward to
                various oppurtunities to explore in the field of science. Has
                endearing interest in field of AI.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
