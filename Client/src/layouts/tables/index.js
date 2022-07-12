import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton/index";
// import MDInput from "components/MDInput";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import "react-datepicker/dist/react-datepicker.css";
// Attandance
function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={6}>
        <MDBox mt={4} mb={8}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={8}>
              <Card mb={3}>
                <MDBox
                  // mb={7}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <MDTypography mt={2} mb={3} variant="caption" color="info" fontWeight="regular">
                    <h1>Employee Attendance</h1>
                  </MDTypography>
                  <MDBox
                    display="flex"
                    width="850px"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Grid mt={3} item xs={12} md={6} lg={4}>
                      <MDButton mb={3} type="submit" color="info" onClick={null}>
                        Check In!
                      </MDButton>
                      <MDBox display="flex" flexDirection="column">
                        <MDTypography
                          mt={3}
                          // mb={3}
                          variant="caption"
                          color="dark"
                          fontWeight="regular"
                          flexDirection="column"
                        >
                          <h3>Time:</h3>
                        </MDTypography>
                      </MDBox>
                    </Grid>
                    <Grid mt={3} item xs={12} md={6} lg={4}>
                      <MDButton type="submit" color="success" onClick={null}>
                        Check out!
                      </MDButton>
                      <MDBox display="flex" flexDirection="column">
                        <MDTypography
                          mt={3}
                          // mb={3}
                          variant="caption"
                          color="dark"
                          fontWeight="regular"
                          flexDirection="column"
                        >
                          <h3>Time:</h3>
                        </MDTypography>
                      </MDBox>
                    </Grid>
                  </MDBox>
                </MDBox>
                {/* <Grid item xs={12} lg={8}> */}
                <MDBox mt={4} px={10} display="flex" flexDirection="column">
                  <MDTypography mb={1} variant="caption" color="dark" fontWeight="regular">
                    <h3>Over All Time:</h3>
                  </MDTypography>

                  <MDTypography mb={3} variant="caption" color="dark" fontWeight="regular">
                    <h3>Remaning Time:</h3>
                  </MDTypography>
                </MDBox>
                {/* </Grid> */}
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
