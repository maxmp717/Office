import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useMemo } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import { useSelect } from "@mui/base";

function Report() {
  // const { columns, rows } = authorsTableData();
  const initialValues = {
    startDate: "",
    endDate: "",
    empname: "",
    team: "",
  };
  const [values, setValues] = useState(initialValues);
  const [report, setReport] = useState([]);
  const empId = useSelector((state) => state.auth.user.empId);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      startDate: values.startDate,
      endDate: values.endDate,
      team: values.team,
    };
    console.log(userData);

    axios
      .get(
        `analyst/fetch/user-data/?sDate=${values.startDate}&eDate=${values.endDate}&empId=${empId}&team=${values.team}`
      )
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => console.log(`Error:${err}`));
  };

  // tabel report
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: false,
    },
    {
      field: "team",
      headerName: "Team",
      width: 150,
      editable: false,
    },
    {
      field: "date",
      headerName: "Date",
      // type: 'date',
      width: 130,
      editable: false,
    },
    {
      field: "TotalTime",
      headerName: "Active Time",
      // type: 'time',
      width: 150,
      editable: false,
    },
    {
      field: "ActiveTime",
      headerName: "Working Time",
      // type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: "EntityTime",
      headerName: "Entity Time",
      // type: 'number',
      width: 150,
      editable: false,
    },
  ];

  const rows = useMemo(
    () =>
      report.map((item, index) => ({
        ...item,
        id: index + 1,
        name: item.name,
        team: item.team,
        date: moment(item.createdAt).format("DD MM YYYY"),
        TotalTime: moment
          .utc(moment.duration(item.TotalTime, "seconds").as("milliseconds"))
          .format("HH:mm:ss"),
        ActiveTime: moment
          .utc(moment.duration(item.ActiveTime, "seconds").as("milliseconds"))
          .format("HH:mm:ss"),
        EntityTime: moment
          .utc(moment.duration(item.EntityTime, "seconds").as("milliseconds"))
          .format("HH:mm:ss"),
      })),
    [report]
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} mt={1} mb={40}>
        <Card>
          <MDBox pb={5} component="form" role="form" onSubmit={handleSubmit}>
            <MDBox
              mx={2}
              // mt={-3}
              py={3}
              pt={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                Reports
              </MDTypography>
            </MDBox>
            <MDBox pt={6} px={4} display="flex" justifycontent="space-evenly" alignItems="center">
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Start Date
                  </MDTypography>
                  <MDInput
                    type="date"
                    name="startDate"
                    value={values.startDate}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <MDTypography variant="h6" fontWeight="medium">
                    End Date
                  </MDTypography>
                  <MDInput
                    type="date"
                    name="endDate"
                    value={values.endDate}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Team
                  </MDTypography>
                  <div>
                    <FormControl sx={{ minWidth: 180 }}>
                      <Select
                        native
                        id="grouped-native-select"
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
                <Grid item xs={3}>
                  <MDBox pt={3}>
                    <MDButton
                      variant="gradient"
                      color="success"
                      type="submit"
                      onClick={() => setShow(!show)}
                    >
                      &nbsp;Search
                    </MDButton>
                  </MDBox>
                  {/* <MDTypography variant="h6" fontWeight="medium">
                    Name
                  </MDTypography>
                  <MDInput
                    type="text"
                    name="empname"
                    value={values.empname}
                    onChange={handleInputChange}
                  /> */}
                </Grid>
              </Grid>
            </MDBox>
            {/* <MDBox pt={3} pb={3} px={2} display="flex" justifyContent="end" alignItems="center">
              <MDButton
                variant="gradient"
                color="success"
                type="submit"
                onClick={() => setShow(!show)}
              >
                &nbsp;Search
              </MDButton>
            </MDBox> */}
          </MDBox>
        </Card>
        {show ? (
          <MDBox pt={8}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Reports Table
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <Box sx={{ height: 700, width: "100%", display: "flex" }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      checkboxSelection
                      disableSelectionOnClick
                    />
                  </Box>
                </MDBox>
              </Card>
            </Grid>
          </MDBox>
        ) : null}
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Report;
