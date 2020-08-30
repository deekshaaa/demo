/** @format */

import React, { Component } from "react";
import { Grid, Cell ,List, ListItem, Icon, ListItemContent} from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Deeksha Garg</h2>
            <img
              src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              This is Deeksha a 20 year old undergraduate, Web developer and part time content writer.
            </p>
          </Cell>



          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">

                <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px' , fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    9522949005
                    </ListItemContent>

              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px' , fontFamily: 'Anton'}} ><i className="fa fa-envelope" aria-hidden="true" />
                    deekshagarg2000@gmail.com</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px' , fontFamily: 'Anton'}}></ListItemContent>
              </ListItem>
            </List>

            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
