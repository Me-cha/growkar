import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import beehivebgImg from "../../asset/beehiveblue.png";

const LoginPageContainer = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "row",
  height: "100vh",
});

const LeftComponent = styled("div")({
  margin: "80px",
  padding: "20px",
  backgroundColor: "#F8990A",
  borderRadius: "5px",
  height: "600px",
  width: "450px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  color: "white",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const RightComponent = styled("div")({
  margin: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "600px",
  width: "600px",
  "@media (max-width: 768px)": {
    margin: "0px 0px 30px 0px",
    height: "auto",
    width: "600px",
  },
});

const FooterComponent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "100%",
  fontSize: "12px",
  alignItems: "flex-end",
  "@media (max-width: 768px)": {
    justifyContent: "space-evenly",
  },
});

const InputFooterComponent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
});

const LoginComponent = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "300px",
  "& .LoginFields": {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
  },
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <LoginPageContainer>
      <LeftComponent>
        <img
          src={beehivebgImg}
          alt="beehive"
          style={{
            position: "absolute",
            opacity: "0.2",
            bottom: "47px",
            left: "123px",
          }}
        />
        <div style={{ height: "200px" }}></div>
        <div style={{ fontFamily: "Red Hat Display", fontSize: "28px" }}>
          Growkar
        </div>
        <div
          style={{
            fontFamily: "Source Sans 3",
            fontSize: "38px",
            fontWeight: "lighter",
          }}
        >
          Your eCommerce Growth Partner,
          <br />
          Increase Your ROAS Drastically
        </div>
        <FooterComponent style={{ height: "200px" }}>
          <div style={{ fontFamily: "Source Sans 3" }}>
            Need assistance? Get in touch with us
          </div>
          <div style={{ fontFamily: "Inter" }}>Contact Us</div>
        </FooterComponent>
      </LeftComponent>
      <RightComponent>
        <Box sx={{ padding: { sm: "0px 75px", xs: "0px 50px" } }}>
          <div style={{ height: "100px" }}></div>
          <div style={{ fontFamily: "Source Sans 3", fontSize: "32px" }}>
            Welcome to Growkar
          </div>
          <div style={{ fontFamily: "Source Sans 3", fontWeight: "400" }}>
            Please enter your details to continue login
          </div>
          <LoginComponent>
            <div className="LoginFields">
              Phone Number
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                size="small"
                sx={{ marginTop: "5px" }}
              />
            </div>
            <div className="LoginFields">
              Password
              <FormControl variant="outlined">
                <OutlinedInput
                  fullWidth
                  sx={{ marginTop: "5px" }}
                  size="small"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <InputFooterComponent>
              <FormGroup>
                <FormControlLabel
                  sx={{ fontFamily: "Inter", fontSize: "12px" }}
                  control={<Checkbox size="small" />}
                  label="Remember Me"
                />
              </FormGroup>
              <div style={{ fontFamily: "Inter", fontSize: "15px" }}>
                Forgot Password?
              </div>
            </InputFooterComponent>
            <Button
              className="LoginFields"
              variant="contained"
              sx={{ backgroundColor: "#F8990A" }}
            >
              Login
            </Button>
            <div
              style={{
                fontFamily: "Source Sans 3",
                fontSize: "13px",
                marginTop: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Don’t have an account?
              <span style={{ color: "#0561A0" }}>Register Now</span>
            </div>
          </LoginComponent>
        </Box>
        <FooterComponent
          sx={{
            height: { sm: "150px", xs: "130px" },
          }}
        >
          <div style={{ fontFamily: "Source Sans 3" }}>©2023 Growkar</div>
          <div style={{ fontFamily: "Inter" }}>Terms & Privacy</div>
        </FooterComponent>
      </RightComponent>
    </LoginPageContainer>
  );
}

export default LoginPage;
