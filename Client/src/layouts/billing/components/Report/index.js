import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Tooltip from "@mui/material/Tooltip";
import authorsTableData from "layouts/tables/data/authorsTableData";
import DataTable from "examples/Tables/DataTable";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// import MDInput from "components/MDInput";
// import MDDatePicker from "components/MDDatePicker";

// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";
// import Report from "layouts/billing/Report";
// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";
// import MDInputRoot from "components/MDInput/MDInputRoot";

function Report() {
  const { columns, rows } = authorsTableData();
  // const [controller] = useMaterialUIController();
  // const { darkMode } = controller;
  // const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const initialValues = {
    startDate: "",
    endDate: "",
    empid: "",
  };
  const [values, setValues] = useState(initialValues);
  // const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  // const setStartDate = (event) => {
  //   const sDate = event.target.value;
  //   console.log(sDate);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      startDate: values.startDate,
      endDate: values.endDate,
      empid: values.empid,
    };
    console.log(userData);
    console.log("hi");
  };
  return (
    <>
      <Card>
        <MDBox component="form" role="form" onSubmit={handleSubmit}>
          <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
            <MDTypography variant="h6" fontWeight="medium">
              Report
            </MDTypography>
            <MDButton variant="gradient" color="success" type="submit">
              &nbsp;Search
            </MDButton>
          </MDBox>
          <MDBox p={2} pb={5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                  sx={{
                    border: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  }}
                >
                  <MDTypography variant="h6" fontWeight="medium">
                    From
                    <div>
                      <DatePicker
                        // name="StartDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </MDTypography>
                </MDBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                  sx={{
                    border: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  }}
                >
                  <MDTypography variant="h6" fontWeight="medium">
                    TO
                    <div>
                      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                  </MDTypography>
                </MDBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <MDBox
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                  sx={{
                    border: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  }}
                >
                  <MDTypography variant="h6" fontWeight="medium">
                    Emp Id
                    <div>
                      <input
                        type="text"
                        value={values.empid}
                        onChange={handleInputChange}
                        name="empid"
                        // fullWidth
                      />
                    </div>
                  </MDTypography>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </Card>
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
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </MDBox>
          </Card>
        </Grid>
      </MDBox>
    </>
  );
}

export default Report;
