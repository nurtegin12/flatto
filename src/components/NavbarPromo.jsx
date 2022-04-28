import React from "react";
import { Badge, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Logout, ShoppingCart } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { clientContext } from "../context/ClientContext";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";

const NavbarPromo = () => {
  const data = React.useContext(clientContext);
  const { cartCount, authWithGoogle, user } = data;

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <div className="navbar-promo">
            <Link to={"/"}>
              <Button color="success" variant="contained">
                Main page
              </Button>
            </Link>
            <Link to={"/admin-panel"}>
              <Button color="success" variant="contained">
                Admin page
              </Button>
            </Link>
            <Link to={"/admin-panel/add"}>
              <Button color="success" variant="contained">
                Add product page
              </Button>
            </Link>
            <Box
              style={{ display: "flex", alignItems: "center" }}
              sx={{ flexGrow: 0 }}
            >
              <Link to="/cart" style={{ marginRight: 20 }}>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCart />
                </Badge>
              </Link>

              {user ? (
                <>
                  <Avatar src={user.photoURL} alt={user.displayName} />
                  <span>{user.email}</span>
                  <Button onClick={Logout}></Button>
                  <Button>
                    <Logout color="error" />
                  </Button>
                </>
              ) : (
                <Button
                  onClick={authWithGoogle}
                  variant="contained"
                  color="secondary"
                >
                  Вход
                </Button>
              )}
            </Box>
          </div>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default NavbarPromo;
