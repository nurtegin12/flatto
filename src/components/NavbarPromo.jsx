import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarPromo = () => {
  return (
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
    </div>
  );
};

export default NavbarPromo;
