import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch';
import CircularProgress from '@mui/material/CircularProgress';


export default function ListCard(props) {
  console.log(props.data)

  let latest_5_post = props.data.posts ? props.data.posts.slice(0, 5) : []
  return (
    <Card sx={{ width: "95%", margin: "10px" }} elevation={10}>
      <CardContent>
        <Typography className="dashboard-card">
          <h3> {props.title}</h3>
        </Typography>


        {
          latest_5_post.length !==0?
          (
            <Grid container >
            {
              latest_5_post.map((data, index) => {
                return (
                  <Grid container className="post-page-div1">
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
          <CircularProgress />
        }

      </CardContent>

    </Card>
  );
}
