import React, { useState } from "react";
import {
  Menu,
  Home,
  Package,
  ShoppingCart,
  ShoppingBag,
  Users,
  Printer,
  Settings,
} from "lucide-react";

export default function SidebarDrawer() {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState("Home");

  const styles = {
    container: {
      display: "flex",
    },
    sidebar: {
      height: "95vh",
      width: isOpen ? "305px" : "60px",
      backgroundColor: "#fff",
      borderRight: "1px solid #e2e8f0",
      transition: "width 0.3s ease",
      borderRadius: "10px",
      boxShadow: "4px 4px 4px 0px #3658BF",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "6px",
    },
    hamburgerWrapper: {
      display: "flex",
      alignItems: "center",
      padding: "5px 16px",
      cursor: "pointer",
      color: "#1e293b",
    },
    hamburgerIcon: {
      marginRight: isOpen ? "12px" : "0",
      minWidth: "20px",
    },
    navContainer: {
      paddingTop: "12px",
      flexGrow: 1,
   
    },
    navItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: isOpen ? "space-between" : "center",
      padding: "8px 10px",
      margin: "4px",
      cursor: "pointer",
      transition: "background 0.3s, color 0.3s",
      
    },
    icon: (isActive) => ({
      minWidth: "20px",
      color: isActive ? "#3658BF" : "#1e293b",
    }),
    navLabel: (isActive) => ({
      display: isOpen ? "inline" : "none",
      marginLeft: "12px",
      padding: "6px 12px",
      borderRadius: "10px",
      width: "216px",
      backgroundColor: isActive ? "#3658BF" : "transparent",
      color: isActive ? "#fff" : "#3658BF",
      fontWeight: 700,
      fontSize: "16px",
      transition: "background 0.3s, color 0.3s",
    }),
    bottomSection: {
    
      paddingTop: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "4px", // optional spacing between items
        width: '230px',
      justifySelf:'end',
     
        borderTop: "1px solid rgb(51, 51, 51)",
    },

    bottomTextItem: {
      padding: "10px 12px",
      fontSize: "14px",
      color: "#3658BF",
      fontWeight: 700,
      cursor: "pointer",
      whiteSpace: "nowrap",
    
    },

    logout: {
      padding: "10px 12px",
      fontSize: "16px",
      color: "#797979",
      fontWeight: 700,
      cursor: "pointer",
      // borderTop: "1px solid #e2e8f0",
       width: '230px',
      justifySelf:'end',
      display:'flex'
    },
  };

  const NavItem = ({ icon: Icon, label }) => {
    const isActive = active === label;

    return (
      <div style={styles.navItem} onClick={() => setActive(label)}>
        <Icon size={20} style={styles.icon(isActive)} />
        <span style={styles.navLabel(isActive)}>{label}</span>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div>
          {/* Hamburger */}
          <div
            style={styles.hamburgerWrapper}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={20} style={styles.hamburgerIcon} />
            {isOpen && <span></span>}
          </div>

          {/* Navigation */}
          <div style={styles.navContainer}>
            <NavItem icon={Home} label="Home" />
            <NavItem icon={Package} label="Products" />
            <NavItem icon={ShoppingCart} label="Sale" />
            <NavItem icon={ShoppingBag} label="Purchase" />
            <NavItem icon={Users} label="Staff" />
            <NavItem icon={Printer} label="Print Label" />
            <NavItem icon={Settings} label="Invoice Settings" />
          </div>

          {/* Bottom Section */}
          {isOpen && (
            <div style={styles.bottomSection}>
              <div style={styles.bottomTextItem}><p>Help Center</p></div>
              <div style={styles.bottomTextItem}><p>Privacy Policy</p></div>
              <div style={styles.bottomTextItem}><p>Invoice Settings</p></div>
            </div>
          )}

           {/* Logout */}
        {isOpen && <div style={styles.logout}>Logout</div>}
        </div>

       
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import {
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Tooltip,
//   Box,
// } from '@mui/material';
// import {
//   Home,
//   Inventory,
//   ShoppingCart,
//   LocalMall,
//   People,
//   Print,
//   Settings,
//   ChevronLeft,
//   ChevronRight,
// } from '@mui/icons-material';

// const drawerWidth = 220;

// const menuItems = [
//   { label: 'Home', icon: <Home /> },
//   { label: 'Products', icon: <Inventory /> },
//   { label: 'Sale', icon: <ShoppingCart /> },
//   { label: 'Purchase', icon: <LocalMall /> },
//   { label: 'Staff', icon: <People /> },
//   { label: 'Print Label', icon: <Print /> },
//   { label: 'Invoice Settings', icon: <Settings /> },
// ];

// export default function SidebarDrawer() {
//   const [open, setOpen] = useState(true);

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       open={open}
//       sx={{
//         width: open ? drawerWidth : 70,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: open ? drawerWidth : 70,
//           boxSizing: 'border-box',
//           transition: 'width 0.3s',
//           overflowX: 'hidden',
//           backgroundColor: '#f8f9ff',
//           borderRight: '1px solid #ccc',
//         },
//       }}
//     >
//       <Box
//         display="flex"
//         justifyContent={open ? 'flex-end' : 'center'}
//         alignItems="center"
//         p={1}
//       >
//         <IconButton onClick={toggleDrawer}>
//           {open ? <ChevronLeft /> : <ChevronRight />}
//         </IconButton>
//       </Box>

//       <List>
//         {menuItems.map((item, index) => (
//           <Tooltip title={!open ? item.label : ''} placement="right" key={index}>
//             <ListItem button sx={{ padding: '10px 12px' }}>
//               <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
//                 {item.icon}
//               </ListItemIcon>
//               {open && <ListItemText primary={item.label} />}
//             </ListItem>
//           </Tooltip>
//         ))}
//       </List>
//     </Drawer>
//   );
// }
