// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import Time from "layouts/dashboard/Time";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={3} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={11}>
            <Time />
          </Grid>
        </Grid>
      </MDBox>

      {/* <MDBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Greetings /> */}

      {/* <Grid item xs={12} md={6} lg={6}>
      <OrdersOverview />
    </Grid> */}
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
