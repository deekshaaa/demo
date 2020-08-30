/** @format */

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFnKueXm6_OtQ/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=GSXo8HWusXgJyPtrYt9sq7aIz-_5PoTUn2RYDh2Cj-A"
                alt="avatar"
                stye={{ height: "100px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Deeksha Garg</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Technical writer, visionary, results-driven, equipped with
              verifiable success in the areas of content writing, web designing,
              and programming. Strong ability to utilize a wide range of
              transferable skills and knowledge to consistently exceed
              expectations. Dedicated to improving knowledge and experimenting
              in the interested fields while pursuing a degree.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Ayushi Apprts. Indore</p>
            <h5>Phone</h5>
            <p>9522949005</p>
            <h5>Email</h5>
            <p>deekshagarg2000@gmail.com</p>
            <h5>Web</h5>
            <p>My website</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <div>
              <h2>Education</h2>

              <Education
                startYear={2018}
                endYear={2022}
                schoolName="Medicaps University"
                schoolDescription="Pursuing Bacherlor's of Technology in Computer Science and Engineering from Medicaps University"
              />

              <Education
                startYear={2003}
                endYear={2018}
                schoolName="St. Teresa's convent School"
                schoolDescription="Attended High school and graduaed from St. Teresa's where discipline is displayed the foundation of character."
              />

              <hr style={{ borderTop: "3px solid #e22947" }} />

              <h2>Experience</h2>
              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Content Writer at Rising Youth Foundation"
                jobDescription="Writing lead for Youthdeck, responsible for managing stories on impact and social issues in daily column features.
                Contributing writer authored 10+ content pieces for Rising Youth Foundation."
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Ux/UI designer for RCM"
                jobDescription="Developed user-oriented visuals and 
                features using front-end languages, including HTML, [Type] and [Type] , 
                to increase site traffic to [Number] visitors per [Timeframe] .Created eye-catching and 
                functional digital design concepts across various platforms to strengthen company brand and identity."
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Technical translator at Raspberry Pi foundation"
                jobDescription="Checked translations of technical terms and terminology
                 to ensure that they are accurate and remain consistent throughout translation revisions."
              />
              <hr style={{ borderTop: "3px solid #e22947" }} />
              <h2>Skills</h2>
              <Skills skill="React" progress={60} />
              <Skills skill="Bootstrap" progress={80} />
              <Skills skill="Content Writing" progress={70} />
              <Skills skill="Ux/UI designing" progress={70} />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
