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
        {
          props.data && props.data.meta && props.data.meta.pagination.total ?
            <Typography className="dashboard-card">
              <h3>{props.data.meta.pagination.total} </h3>
            </Typography>
            :
            null
        }



      </CardContent>

    </Card>
  );
}
