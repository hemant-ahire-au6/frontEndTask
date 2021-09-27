import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard(props) {

  return (
    <Card sx={{ width: "90%", margin: "10px" }} elevation={10}>
      <CardContent>

        <Typography className="dashboard-card">
          <h3> {props.title}</h3>
        </Typography>
        {/* {
          props.data && props.data.meta && props.data.meta.pagination.total ?
            <Typography className="dashboard-card">
              <h3>{props.data.meta.pagination.total} </h3>
            </Typography>
            :
            null
        } */}

        {
          props.title === "Total number of Posts" ?
            <Typography className="dashboard-card">
              <h3>{ props.data && props.data.posts&&props.data.posts.length} </h3>
            </Typography>
            :
            props.title === "Total number of Pages"?
            <Typography className="dashboard-card">
              <h3>{props.data && props.data.pages&&props.data.pages.length} </h3>
            </Typography>
            : 
            props.title === "Total number of Authors"?
            <Typography className="dashboard-card">
              <h3>{props.data && props.data.authors&&props.data.authors.length} </h3>
            </Typography>
            : 
            props.title === "Total number of Tags"?
            <Typography className="dashboard-card">
              <h3>{props.data && props.data.tags&&props.data.tags.length} </h3>
            </Typography>
            : null
        }



      </CardContent>

    </Card>
  );
}
