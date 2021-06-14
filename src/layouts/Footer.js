import React from "react";
import { Grid, Header, List, Segment } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Segment fixed="bottom" inverted vertical style={{ padding: "2em 4em" }}>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Job Adverts</List.Item>
                <List.Item as="a">Employer Login/Register</List.Item>
                <List.Item as="a">Job Positions</List.Item>
                <List.Item as="a">Cities</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h4" inverted>
                {" "}
                HEY!{" "}
              </Header>
              <p> Get the job/employee! </p>
              <p>
                {" "}
                Copyright &copy;All rights reserved | This template is made with{" "}
                <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a
                  href="https://www.linkedin.com/in/tolgahankilic/"
                  target="_blank"
                >
                  Tolgahan KILIÇ
                </a>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
