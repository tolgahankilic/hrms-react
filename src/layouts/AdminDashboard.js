import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import JobPositionService from "../services/jobPositionService";
import { Grid, Menu } from "semantic-ui-react";
import JobSeekerList from "../pages/JobSeekerList";

export default function AdminDashboard() {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  return (
    <div>
      <Grid className="admin" style={{ margin: "1em 1em" }}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu pointing vertical>
              <Menu.Item header name="Admin" />
              <Menu.Item as="a" name="Job Seekers" />
              <Menu.Item as="a" name="Cities" />
              <Menu.Item as="a" name="Job Positions" />
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
            <JobSeekerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
