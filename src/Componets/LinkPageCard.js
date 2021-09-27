import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import { Grid } from "@mui/material"
import PinterestIcon from '@mui/icons-material/Pinterest';


function LinkPageCard(props) {
    return (
        <Card style={{ margin: "10px" }} elevation={10} className="post-page-card">
            <CardContent>
                <Typography  className="typography">
                    <PinterestIcon />
                    <h3> {props.title}</h3>
                </Typography>

                {
                    props.data.length !== 0 ?
                        (
                            <Grid container className="post-page-container">
                                {
                                    props.data.map((data, index) => {
                                        return (
                                            <Grid container className="post-page-div">
                                                <Grid item xs={1}>
                                                    <h5 style={{ margin: "0px" }}>{index + 1}</h5>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <h5>{data.url}</h5>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <a href={data.url} target="_blank" rel="noreferrer">
                                                    <LaunchIcon />
                                                    </a>  
                                                </Grid>

                                            </Grid>)
                                    })
                                }
                            </Grid>
                        )
                        :
                        <Grid container className="post-page-container">

                            <Grid item xs={12}>
                                <h5 style={{ margin: "0px" }}>
                                    No data avaliable
                                </h5>
                            </Grid>

                        </Grid>
                }


            </CardContent>
        </Card>
    )
}

export default LinkPageCard;
