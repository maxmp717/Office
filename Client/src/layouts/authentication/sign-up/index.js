import { Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Select from "@mui/material/Select";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import InputLabel from "@mui/material/InputLabel";
import {connect} from 'react-redux';
import {registerUser} from 'actions/authAction';
import { useNavigate} from 'react-router-dom';


function Cover(props) {
  const initialValues = {
    name: "",
    empid: "",
    role: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: values.name,
      empId: values.empid,
      role: values.role,
      email: values.email,
      password: values.password,
      password2: values.cpassword,
    };
    console.log(userData);
    props.registerUser(userData);
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                value={values.name}
                onChange={handleInputChange}
                name="name"
                fullWidth
              />
            </MDBox>
            <MDBox mt={2} mb={2} display="flex" justifycontent="space-evenly" alignItems="center">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MDInput
                    type="number"
                    value={values.empid}
                    onChange={handleInputChange}
                    name="empid"
                    label="Employee Number"
                  />
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <FormControl sx={{ minWidth: 160 }}>
                      <InputLabel htmlFor="grouped-native-select">Role</InputLabel>
                      <Select
                        native
                        id="grouped-native-select"
                        label="Role"
                        name="role"
                        value={values.role}
                        onChange={handleInputChange}
                      >
                        <option aria-label="None" />
                        <option value="Analyst">Analyst</option>
                        <option value="Admin">Team Leader</option>
                        {/* <option value="Project Manager">Project Manager</option>
                        <option value="IT Admin">IT Admin</option>
                        <option value="HR">HR</option> */}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                value={values.email}
                onChange={handleInputChange}
                name="email"
                label="Email"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                value={values.password}
                onChange={handleInputChange}
                name="password"
                label="Password"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Confirm Password"
                value={values.cpassword}
                onChange={handleInputChange}
                name="cpassword"
                fullWidth
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" type="submit" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

const mapStateToProps = state =>({
  auth: state.auth,
  errors: state.errors
})


export default connect(mapStateToProps,{registerUser})(Cover);
