import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useHistory} from "react-router-dom"


export default function Navbar() {
    const history = useHistory()

    const handleRouteChange = (e)=>{
        console.log(e.target.innerText)

        console.log(typeof(e.target.innerText))

        if(e.target.innerText === "HOME"){
            history.push("/")
        }else if (e.target.innerText === "LINKS-PAGE"){
            history.push("/Links-page")
        }else{
            history.push("/Posts-page")
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Button color="inherit" onClick={handleRouteChange}>Home</Button>
                    <Button color="inherit"  onClick={handleRouteChange}>Links-page</Button>
                    <Button color="inherit"  onClick={handleRouteChange}>Posts-Page</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
