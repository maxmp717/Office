import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Card from "@mui/material/Card";
import MDButton from "components/MDButton/index";
import MDInput from "components/MDInput";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MDTypography from "components/MDTypography";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import papa from "papaparse";
import convert from "convert-seconds-to-human";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);
  const [seconds, setSeconds] = useState({ TotalTime: "", ActiveTime: "", EntityTime: "" });
  const [timeData, setTimeData] = useState({ TotalTime: "", ActiveTime: "", EntityTime: "" });
  const name = useSelector((state) => state.auth.user.name);
  const empId = useSelector((state) => state.auth.user.empId);
  const initialValues = {
    team: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

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

  // Upload Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      empId,
      team: values.team,
      TotalTime: timeData.TotalTime,
      ActiveTime: timeData.ActiveTime,
      EntityTime: timeData.EntityTime,
    };

    axios
      .post("/analyst/add", userData)
      .then(() => console.log("Success"))
      .catch((err) => console.log(`Errors:${err}`));

    console.log(userData);
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
    setTimeData({
      TotalTime: totalTime,
      ActiveTime: activeTime,
      EntityTime: entityTime,
    });
  }, [data]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={3} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={11}>
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
              <MDBox mt={6} mb={8} component="form" role="form" onSubmit={handleSubmit}>
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
                        <MDTypography
                          mt={4}
                          mb={3}
                          variant="caption"
                          color="info"
                          fontWeight="regular"
                        >
                          <h1>Upload your CSV file</h1>
                        </MDTypography>
                        <MDBox
                          // mt={4}
                          display="flex"
                          width="550px"
                          flexDirection="row"
                          alignItems="center"
                          justifyContent="space-evenly"
                        >
                          <Grid item xs={4}>
                            <div>
                              <FormControl sx={{ minWidth: 180 }}>
                                <InputLabel htmlFor="grouped-native-select">TEAM</InputLabel>
                                <Select
                                  native
                                  id="grouped-native-select"
                                  label="team"
                                  name="team"
                                  value={values.team}
                                  onChange={handleInputChange}
                                >
                                  <option aria-label="None" />
                                  <optgroup label="CV">
                                    <option value="Dumbledore">Dumbledore</option>
                                    <option value="Annotell">Annotell</option>
                                    <option value="Lane">Lane</option>
                                    <option value="Pomelo">Pomelo</option>
                                  </optgroup>
                                  <optgroup label="NLP">
                                    <option value="Nala">Nala</option>
                                    <option value="Lime">Lime</option>
                                    <option value="Dragon">Dragon</option>
                                  </optgroup>
                                </Select>
                              </FormControl>
                            </div>
                          </Grid>
                          <Grid item xs={6}>
                            <MDInput type="file" accept=".csv" onChange={handlingFileUpload} />
                          </Grid>
                        </MDBox>
                        <MDBox
                          pt={3}
                          px={2}
                          display="flex"
                          justifyContent="end"
                          alignItems="center"
                        >
                          <MDButton type="submit" color="success">
                            Upload!
                          </MDButton>
                        </MDBox>
                      </MDBox>
                    </Card>
                  </Grid>
                </Grid>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
