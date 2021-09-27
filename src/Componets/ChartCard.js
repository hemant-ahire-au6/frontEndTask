import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function ChartCard(props) {
  return (
    <Card sx={{ width:"95%",margin:"10px" }}  elevation={10}>
      <CardContent>
      <Typography className="dashboard-card">
        <h3> {props.title}</h3>
        </Typography>
        
      </CardContent>
    </Card>
  );
}
