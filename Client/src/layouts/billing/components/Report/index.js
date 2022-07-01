import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";
// import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
// import visaLogo from "assets/images/logos/visa.png";
// import Report from "layouts/billing/Report";
// Material Dashboard 2 React context
// import { useMaterialUIController } from "context";
import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";
// import MDInputRoot from "components/MDInput/MDInputRoot";

function Report() {
  // const [controller] = useMaterialUIController();
  // const { darkMode } = controller;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Card>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Report
        </MDTypography>
        <MDButton variant="gradient" color="success">
          {/* <Icon sx={{ fontWeight: "bold" }}>submit</Icon> */}
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
                  <MDInput
                    DatePicker
                    type="date"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  {/* <DatePicker
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(date) => setStartDate(date)}
                  /> */}
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
                  <MDInput
                    type="date"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={(date) => setEndDate(date)}
                  />
                  {/* <DatePicker
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={(date) => setEndDate(date)}
                  /> */}
                </div>
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={3}>
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
                Emp Id &nbsp;
                <MDInput type="text" className="form-control" name="title" />
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Report;
