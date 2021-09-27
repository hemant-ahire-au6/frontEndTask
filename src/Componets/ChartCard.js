import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';




export default function ChartCard(props) {

  var dateArray=[]

  props.data&&props.data.posts&&props.data.posts.map(data=>{
    return dateArray.push(data.published_at)
  })

  console.log(props.data.posts)

 
  let monthArray = []

  dateArray.map(data=>{
    return monthArray.push(moment().format(data.published_at,'MMMM'))
  })

  console.log(monthArray)

  const data = {
    labels: ['July', 'August', 'Septmeber'],
    datasets: [
      {
        label: '# Post per month',
        data: [2, 11,0],
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

  return (
    <Card sx={{ width: "95%", margin: "10px" }} elevation={10}>
      <CardContent>
        <Typography className="dashboard-card">
          <h3> {props.title}</h3>
        </Typography>

        <Bar data={data} options={options}/>
      </CardContent>
    </Card>
  );
}
