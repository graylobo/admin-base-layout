import { DrawerHeader } from "@/layouts/Base";
import {
  ChevronLeft,
  ChevronRight,
  Drafts,
  MoveToInbox,
  Send,
} from "@mui/icons-material";
import { Divider, IconButton, List } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SidebarDrawer } from "./style";
import SidebarMenuItem from "@/components/containers/sidebar/SidebarMenuItem";
const menuItems = [
  {
    icon: Send,
    primaryText: "Sent mail",
    subItems: [
      { primaryText: "Sent Item 1", href: "/sent-mail" },
      { primaryText: "Sent Item 2", href: "/sent-mail" },
    ],
  },
  {
    icon: Drafts,
    primaryText: "Drafts",
    subItems: [
      { primaryText: "Draft 1", href: "/drafts" },
      { primaryText: "Draft 2", href: "/drafts" },
    ],
  },
  {
    icon: MoveToInbox,
    primaryText: "Inbox",
    subItems: [
      { primaryText: "Starred", href: "/inbox" },
      { primaryText: "All mail", href: "/inbox" },
    ],
  },
];

type SidebarProps = {
  openSidebar: boolean;
  handleDrawerClose: () => void;
};

function Sidebar({ openSidebar, handleDrawerClose }: SidebarProps) {
  const theme = useTheme();

  return (
    <SidebarDrawer variant="permanent" open={openSidebar}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} item={item} openSidebar={openSidebar} />
        ))}
      </List>
    </SidebarDrawer>
  );
}

export default Sidebar;
