import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function AdminReport() {
  const initialValues = {
    startDate: "",
    endDate: "",
    empname: "",
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

  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      startDate: values.startDate,
      endDate: values.endDate,
      empname: values.empname,
      team: values.team,
    };
    console.log(userData);
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
      field: "activetime",
      headerName: "Active Time",
      // type: 'time',
      width: 150,
      editable: false,
    },
    {
      field: "workingtime",
      headerName: "Working Time",
      // type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: "entitytime",
      headerName: "Entity Time",
      // type: 'number',
      width: 150,
      editable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Stark",
      team: "Dumbeldore",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
    {
      id: 2,
      name: "mark",
      team: "lane",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
    {
      id: 3,
      name: "Stark",
      team: "cv",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
    {
      id: 4,
      name: "Stark",
      team: "Nlp",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
    {
      id: 5,
      name: "Stark",
      team: "Dumbeldore",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
    {
      id: 6,
      name: "Stark",
      team: "sky",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
    {
      id: 7,
      name: "Stark",
      team: "moon",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
    {
      id: 8,
      name: "Stark",
      team: "sun",
      date: "10/07/2022",
      activetime: "08hrs:30mins",
      workingtime: "04hrs:00mins",
      entitytime: "04hrs:30mins",
    },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} mt={1} mb={40}>
        <Card>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
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
                {/* <Grid item xs={12} md={4}> */}
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
                          <option value="Dumbeldore">Dumbeldore</option>
                          <option value="Annatel">Cv</option>
                        </optgroup>
                        <optgroup label="NLP">
                          <option value="Nlp1">nlp1</option>
                          <option value="nlp1">nlp 1</option>
                        </optgroup>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <MDTypography variant="h6" fontWeight="medium">
                    Name
                  </MDTypography>
                  <MDInput
                    type="text"
                    name="empname"
                    value={values.empname}
                    onChange={handleInputChange}
                  />
                </Grid>
                {/* </Grid> */}
              </Grid>
            </MDBox>
            <MDBox pt={3} pb={3} px={2} display="flex" justifyContent="end" alignItems="center">
              <MDButton
                variant="gradient"
                color="success"
                type="submit"
                onClick={() => setShow(!show)}
              >
                &nbsp;Search
              </MDButton>
            </MDBox>
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
                  {/* <Datatable tableHead={mytableHead} dataSrc={mydataSrc} /> */}
                  {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                /> */}
                  <Box sx={{ height: 700, width: "100%" }}>
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

export default AdminReport;
