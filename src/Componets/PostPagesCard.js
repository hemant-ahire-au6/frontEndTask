import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import WarningIcon from '@mui/icons-material/Warning';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Grid } from "@mui/material";

function PostPagesCard(props) {
  return (
    <Card sx={{ width: 350, margin: "10px", }} elevation={10} className="post-page-card">
      <CardContent >
        <Typography className="typography" >
          <PendingActionsIcon style={{fontSize:"26px"}}/>
          <h3>  {props.title} </h3>
        </Typography>
        {
          props.data.length !== 0 ?
            (
              <Grid container >
                {
                  props.data.map((data, index) => {
                    return (
                      <Grid container className="post-page-div">
                        <Grid item xs={1}>
                          <h5 style={{ margin: "0px" }}>{index + 1}</h5>
                        </Grid>
                        <Grid item xs={10}>
                          <h5> {data.title} </h5>

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
            <Grid container>
                <Grid item xs={12}>
                    <h5 style={{ margin: "0px",display:"flex",alignItems:"center" }}><WarningIcon/> No data Avaliable</h5>
                  </Grid>
            </Grid>
    }
        
      </CardContent>

    </Card>
  )
}

export default PostPagesCard;
