/* eslint-disable import/no-named-as-default-member */
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton/index";
import MDInput from "components/MDInput";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
import papa from "papaparse";
import convert from "convert-seconds-to-human";
// import Fileupload from "layouts/tables/Fileupload";
import { useState, useEffect } from "react";

function Time() {
  const [data, setData] = useState([]);
  const [seconds, setSeconds] = useState({ TotalTime: "", ActiveTime: "", EntityTime: "" });
  // const [total, setTotal] = useState([]);

  // file handling
  const handlingFileUpload = (e) => {
    const { files } = e.target;
    console.log(files);
    console.log(files[0]);
    papa.parse(files[0], {
      header: true,
      column: true,
      complete(results) {
        setData((existing) => [...existing, ...results.data]);
        return results.data;
      },
    });
  };

  useEffect(() => {
    let activeTime = 0;
    let totalTime = 0;
    let entityTime = 0;
    data.map((item) => {
      if (item.URL.match(/sagemaker\.aws\/#\/work\//gm) !== null) {
        activeTime += Number(item["Active(sec)"]);
      }
      if (item.URL.match(/sagemaker\.aws\/#\/work\//gm) !== null) {
        activeTime += Number(item["Active(sec)"]);
      }
      if (item.URL.match(/inAll/gm) !== null) {
        totalTime = Number(item["Active(sec)"]);
      }
      return null;
    });
    const active = convert(activeTime, "cal");
    const total = convert(totalTime, "cal");
    entityTime = totalTime - activeTime;
    const entity = convert(entityTime, "cal");

    setSeconds({
      TotalTime: total,
      ActiveTime: active,
      EntityTime: entity,
    });
  }, [data]);

  return (
    // <DashboardLayout>
    //   <DashboardNavbar />
    <MDBox py={6}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <MDBox mb={2.5}>
            <ComplexStatisticsCard
              color="warning"
              icon="work_history"
              title="Active Time"
              count={`${seconds.TotalTime.hours}hr:${seconds.TotalTime.minutes}min`}
              percentage={{
                color: "success",
                amount: "",
                label: "Your over all Active page time",
              }}
            />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard
              icon="more_time"
              title="Working Time"
              count={`${seconds.ActiveTime.hours}hr:${seconds.ActiveTime.minutes}min`}
              percentage={{
                color: "success",
                amount: "",
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
              title="Entity Time"
              count={`${seconds.EntityTime.hours}hr:${seconds.EntityTime.minutes}min`}
              percentage={{
                color: "success",
                amount: "",
                label: "Your over all  Entity Time",
              }}
            />
          </MDBox>
        </Grid>
      </Grid>
      <MDBox mt={6} mb={8}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card mb={3}>
              <MDBox
                mb={7}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <MDTypography mt={4} mb={3} variant="caption" color="info" fontWeight="regular">
                  <h1>Upload your CSV file</h1>
                </MDTypography>
                <MDBox
                  display="flex"
                  width="450px"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <MDInput type="file" accept=".csv" onChange={handlingFileUpload} />
                  <MDButton type="submit" color="success" onClick={null}>
                    Upload!
                  </MDButton>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
    //   <Footer />
    // </DashboardLayout>
  );
}

export default Time;
