import { AppBar } from "@/components/containers/navbar/style";
import { Menu, Close } from "@mui/icons-material";
import { IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

type NavBarProps = {
  openSidebar: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
};

function NavBar({
  openSidebar,
  handleDrawerOpen,
  handleDrawerClose,
}: NavBarProps) {
  const handleDrawerToggle = () => {
    if (openSidebar) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  };
  return (
    <AppBar
      position="fixed"
      open={openSidebar}
      sx={{
        width: "100%",
        zIndex: (theme: any) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label={openSidebar ? "close drawer" : "open drawer"}
          onClick={handleDrawerToggle}
          edge="start"
          sx={{
            marginRight: 5,
            transition: (theme: any) =>
              theme.transitions.create("transform", {
                duration: theme.transitions.duration.shorter,
              }),

            transform: openSidebar ? "rotate(180deg)" : "none",
          }}
        >
          {openSidebar ? <Close /> : <Menu />}
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
