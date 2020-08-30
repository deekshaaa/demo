/** @format */

import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  CardText,
} from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover ",
              }}
            >
              Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover ",
              }}
            >
              Project #1
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsYz9_qxv_6A7x_owuajTmGo__K0EuQcoymg&usqp=CAU) center / cover ",
              }}
            >
              Project #1
            </CardTitle>
            <CardText>
              The site is a dummy design for a cafe named Dee Cafe which is
              created using Bootstrap Framework.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/deekshaaa/Dee-Cafe">GitHub</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCrrDJHdnFou05koFNsnkJQ6oVdC-MV1YpRA&usqp=CAU) center / cover ",
              }}
            >
              Rotaract Club Website
            </CardTitle>
            <CardText>
              The site designed is Rotaract Club of Mhow's official website,
              which is a non-profit organisation under Rotary international. It
              is responsive with mutliple go to pages in it.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://dhruvanshmoyal01.github.io/rotaractclubmhow/">
                  Website
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center ",
              }}
            >
              youthdeck.com
            </CardTitle>
            <CardText>
              The link opens to Youthdeck.com which is a storehouse for articles
              on impact and social issues. Working under Rising Youth
              Foundation, I provided multiple eye-catching content for the site.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://youthdeck.com/author/deeksha-garg/">
                  Youthdeck Website
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://twentysixteendemo.files.wordpress.com/2015/11/post.png?w=600&zoom=2) center / cover ",
              }}
            >
              Withmeinc.
            </CardTitle>
            <CardText>
              The site opens to my blog, where stories on beliefs, hope and
              various issues are posted which are relatable to people from all
              age groups.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://withmeinc.wordpress.com/">Withme Website</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>Ux/Ui designing</Tab>
          <Tab>Content Writing</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
