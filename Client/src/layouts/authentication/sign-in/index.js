import { useState , useEffect} from "react";

// react-router-dom components
import { Link ,useNavigate} from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// Redux
import {loginUser} from 'actions/authAction';
import {connect} from 'react-redux';

function Basic(props) {
  const [rememberMe, setRememberMe] = useState();
  const [err,setErr] = useState({email:'',password:'',emailIncorrect:'',passwordIncorrect:''})
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(()=>{
    if(props.auth.isAuthenticated){
      navigate('/dashboard')
    }
  })

  useEffect(()=>{
    if(props.errors){
      setErr({
        email: props.errors.email,
        password: props.errors.password,
        emailIncorrect: props.errors.emailnotfound,
        passwordIncorrect: props.errors.passwordinCorrect,
      })
    }
  },[props.errors])


  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: values.email,
      password: values.password,
    };
    console.log(userData);
    props.loginUser(userData);
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography
            variant="h4"
            fontWeight="medium"
            color="white"
            mt={1}
            component={Link}
            to="/dashboard"
          >
            Sign in
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                value={values.email}
                onChange={handleInputChange}
                name="email"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                value={values.password}
                onChange={handleInputChange}
                name="password"
                fullWidth
              />
            </MDBox>
            {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" type="submit" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

const mapStateToProps = state =>({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{loginUser})(Basic);
