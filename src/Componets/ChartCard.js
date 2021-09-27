import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Bar } from 'react-chartjs-2';


const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# Post per month',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(37, 150, 190)'
      ],
      borderColor: [
        'rgb(37, 150, 190)'
      ],
      borderWidth: 1,
    },
  ],
};


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};



export default function ChartCard(props) {
  return (
    <Card sx={{ width:"95%",margin:"10px" }}  elevation={10}>
      <CardContent>
      <Typography className="dashboard-card">
        <h3> {props.title}</h3>
        </Typography>
        
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
