import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { clientContext } from "../context/ClientContext";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const data = React.useContext(clientContext);
  const { cartCount, authWithGoogle, user, logOut } = data;

  const navigation = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar className="app-bar-main" position="sticky">
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <Badge
                  className="badge-navbar"
                  badgeContent={cartCount}
                  color="error"
                >
                  <MenuIcon />
                </Badge>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link to="/">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Main Page</Typography>
                  </MenuItem>
                </Link>
                <Link to="/admin-panel">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Admin Panel</Typography>
                  </MenuItem>
                </Link>
                <Link to="/admin-panel/add">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Add Product</Typography>
                  </MenuItem>
                </Link>
                <Link to="/cart-panel">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Badge
                      className="badge-navbar"
                      badgeContent={cartCount}
                      color="error"
                    >
                      <Typography textAlign="center">Cart</Typography>
                    </Badge>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div className="app-bar-block1">
                <Link style={{ marginRight: 10 }} to={"/cart-panel"}>
                  <Badge
                    className="badge-navbar"
                    badgeContent={cartCount}
                    color="error"
                  >
                    <ShoppingCart />
                  </Badge>
                </Link>
              </div>
              <div className="app-bar-block2">
                <Link to={"/"}>
                  <Button color="success" variant="contained">
                    Main page
                  </Button>
                </Link>
                <Link to={"/admin-panel"}>
                  <Button color="success" variant="contained">
                    Admin panel
                  </Button>
                </Link>
                <Link to={"/admin-panel/add"}>
                  <Button color="success" variant="contained">
                    Add product
                  </Button>
                </Link>
              </div>
            </Box>

            <Box
              className="app-bar-block3"
              style={{ display: "flex", alignItems: "center" }}
              sx={{ flexGrow: 0 }}
            >
              {user ? (
                <>
                  <Avatar src={user.photoURL} alt={user.displayName} />
                  <IconButton onClick={logOut}>
                    <LogoutIcon color="error" />
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={authWithGoogle}>
                  <HowToRegIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
