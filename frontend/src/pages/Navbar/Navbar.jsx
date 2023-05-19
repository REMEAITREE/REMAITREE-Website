import "./navbar.css";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import service from "./../../Assets/icons8-jamboard.png";
// import signup from "./../../Assets/user-add-svgrepo-com.png";
// import aboutus from "./../../Assets/icons8-info.png";
// import login from "./../../Assets/login-svgrepo-com.png";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

export default function Navbar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <>
      <header className="main-header">
        <div>
          <b>
            <span className="topic1">REME</span>
            <span className="topic2">AI</span>
            <span className="topic3">TREE</span>
          </b>
        </div>

        {/* <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{ mr: 6 }}
          >
            <MenuIcon />
          </IconButton> */}
        <Search className="search">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <div className="nav1">
          <ul>
            <li>
              <button onClick={() => (window.location = "/find-the-doc")}>
                Find
              </button>
            </li>
            <li>
              <button onClick={() => (window.location = "/reports")}>
                MyReports
              </button>
            </li>
            <li>
              <button>Research</button>
            </li>
            <li>
              <button>ContactUs</button>
            </li>
          </ul>
        </div>
        <div className="main-nav">
          <div className="nav2">
            <ul>
              <li>
                <button onClick={() => (window.location = "/services")}>
                  <MedicalServicesIcon />
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => (window.location = "/auth/signup")}>
                  <PersonAddIcon />
                  Sign Up
                </button>
              </li>
              <li>
                <button>
                  <InfoIcon />
                  About us
                </button>
              </li>
              <div className="line"></div>
              <li>
                <button onClick={() => (window.location = "/auth/signin")}>
                  <LoginIcon />
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
