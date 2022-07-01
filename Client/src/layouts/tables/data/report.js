import React from "react";
import Grid from "@mui/material/Grid";
import {Box } from "@mui/system";
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDTypography from "components/MDTypography";
 

export default function data() {
const dailyreport =() => {
  return (
    
      <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={2.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Time"
                color= "success"
                count={281}
                  label= "over all time"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Active time"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
  );
}

export default dailyreport;