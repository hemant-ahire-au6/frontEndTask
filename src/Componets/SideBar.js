import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from "react-router-dom"

export default function TemporaryDrawer() {


    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link to="/" className="link-class">
                    <ListItem button key="Dashboard">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                </Link>

                <Link to="/Posts-Page" className="link-class">
                    <ListItem button key="Posts-Pages">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Posts-Pages" />
                    </ListItem>

                </Link>

                <Link to="/Links-page" className="link-class">
                    <ListItem button key="Links-pages">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Links-pages" className="text" />
                    </ListItem>

                </Link>

            </List>

        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <Drawer
                    anchor="left"
                    open={false}
                    variant="permanent"
                    className="drawer-class"
                >
                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
