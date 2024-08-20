import { AppBar } from "@/components/containers/navbar/style";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

type NavBarProps = {
  openSidebar: boolean;
  handleDrawerOpen: () => void;
};

function NavBar({ openSidebar, handleDrawerOpen }: NavBarProps) {
  return (
    <AppBar position="fixed" open={openSidebar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(openSidebar && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link href={"/"}>
          <Typography variant="h6" noWrap component="div">
            ArtStation
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
