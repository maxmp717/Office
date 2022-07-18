import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Protected from "layouts/authentication/Producted";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "actions/authAction";
import routes from "routes";
import { useMaterialUIController } from "context";
import theme from "assets/theme";
// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Auth from "./Auth";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

function App() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./sign-in";
      }
    }
  }, []);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return (
          <Route
            key={route.route}
            exact
            path={route.route}
            element={<Protected isLoggedIn={isLoggedIn}>{route.component}</Protected>}
          />
        );
      }

      return null;
    });

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {isLoggedIn ? <Auth /> : ""}
      <Routes>
        {/* <Route exact path={"/auth"} element={<Auth/>}/> */}
        <Route exact path="/authentication/sign-in" element={<SignIn />} />
        <Route exact path="/authentication/sign-up" element={<SignUp />} />
        {getRoutes(routes)}
        {/* <Route exact path={"/dashboard"} element={
              <Protected isLoggedIn={isLoggedIn}><Dashboard/></Protected>}/> */}
        {/* <Route exact path={"/tables"} element={
              <Protected isLoggedIn={isLoggedIn}><Tables/></Protected>}/> */}
        {isLoggedIn ? (
          <Route exact path="/" element={<Navigate to="/dashboard" />} />
        ) : (
          <Route exact path="/" element={<Navigate to="/authentication/sign-in" />} />
        )}
        {/* <Route exact path={"/sign"} element={<SignIn/>}/> */}
      </Routes>
    </ThemeProvider>
  );
}
export default App;
