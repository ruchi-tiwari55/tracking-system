import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';


export default function MobileSideBar({ showDrawer, onClose }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation" onClick={toggleDrawer(onClose)}>

      <List>

        <div className={styles.side_outer}>
          <div>
            <Link to="/user-page">
              <img src='assets/images/response.png' alt="user" />
              <span>Arvind Bhandari</span>
            </Link>
          </div>
          <div>
            <Link to="/market-Place">
              <img src='assets/images/marketplace.png' alt="Market" />
              <span>Market</span>
            </Link>
          </div>
          <div>
            <Link to="/my-ads">
              <img src='assets/images/myads.png' alt="My Ads" />
              <span>My Ads</span>
            </Link>
          </div>
          <div>
            <Link to="/my-ads-response">
              <img src='assets/images/response.png' alt="resp" />
              <span>Response</span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <img src='assets/images/logout.png' alt="Log out" />
              <span>Log out</span>
            </Link>
          </div>
        </div>

      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer open={showDrawer} onClose={toggleDrawer(onClose)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
