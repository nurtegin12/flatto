import React from "react";
import { Badge, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { Badge } from "@mui/material";
// import { Logout, ShoppingCart } from "@mui/icons-material";

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
      <Box>
        {/* //   style={{ display: "flex", alignItems: "center" }}
      //   sx={{ flexGrow: 0 }}
      // >
      //   <Link to="/cart" style={{ marginRight: 20 }}>
      //     <Badge badgeContent={cartCount} color="error">
      //       <ShoppingCart />
      //     </Badge>
      //   </Link>

      //   {user ? ( */}
        {/* //     <>
      //       <Avatar src={user.photoURL} alt={user.displayName} />
      //       <span>{user.email}</span>
      //       <Button onClick={Logout}></Button>
      //       <Button>
      //         <Logout color="error" />
      //       </Button>
      //     </>
      //   ) : ( */}
        <Button variant="outlined" color="error">
          Вход
        </Button>
        {/* // )} */}
      </Box>
    </div>
  );
};

export default NavbarPromo;
