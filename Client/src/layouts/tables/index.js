/* eslint-disable import/no-named-as-default-member */
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

import Fileupload from "layouts/tables/Fileupload";
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={2.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="work_history"
                title="Total Time"
                count="1hr : 20 min"
                percentage={{
                  color: "success",
                  // amount: "+55%",
                  label: "Your over all web page time",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="more_time"
                title="Active Time"
                count="0hr : 50 min"
                percentage={{
                  color: "success",
                  // amount: "+3%",
                  label: "your work portal time",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="pending_actions"
                title="Over AllTime"
                count="0hr : 50 min"
                percentage={{
                  color: "success",
                  // amount: "+1%",
                  label: "Your over all web page time",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={6} mb={8}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={8}>
              <Card mb={3}>
                <MDBox>
                  <Fileupload />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
