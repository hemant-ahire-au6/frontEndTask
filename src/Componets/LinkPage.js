import React, { useEffect } from 'react'
import { Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinkPageCard from './LinkPageCard';
import { API_KEY, API_LINK } from '../api';



function LinkPage() {

    const [postData, setPostData] = React.useState([]);
    const [totalLinks] = React.useState([]);

    useEffect(() => {
        fetch(`${API_LINK}/posts/?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setPostData(data.posts))

    }, []);

   
    
    var broken_links = []

//pushing all the links in the array whos status code is above 300, meaning those links are broken
    postData.map(link => {
        fetch(link.url)
        .then(function(response) {

            if (response.status > 300){
                console.log("i am 300")
                broken_links.push(link.url)
            }
          });

        return totalLinks.push(link.url)
    })

//checking out of broken links how many are internal
    const internal_Link_data = broken_links.filter((array, index) => {
        const url = array.url
        let link = url.slice(0, 27)
        return array.url.includes(link)
    })

//checking out of broken how many are internal
    const external_Link_data = broken_links.filter((array, index) => {
        const url = array.url
        let link = url.slice(0, 27)
        return !array.url.includes(link)
    })


    const linkNumber = [...new Set(totalLinks)]


    return (
        <>

            <Grid container >
                <Grid item xs={12}>
                    <Grid container className="link-page-container" >
                        <Grid item md={3} xs={12} >
                            <Card style={{ margin: "10px" }} elevation={10} className="post-page-card">
                                <CardContent>
                                    <Typography className="typography1">
                                        <h3>Number of total links in all posts</h3>

                                        <h4>{linkNumber.length} </h4>

                                    
                                    </Typography>
                                    <Typography className="typography1">
                                        <h3>Number of Broken Internal Links </h3>
                                        <h4> {internal_Link_data.length} </h4>
                                    
                                    </Typography>
                                    <Typography className="typography1">
                                        <h3>Number Broken of External Links</h3>
                                        <h4>{external_Link_data.length} </h4>
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12} elevation={10}>
                            <LinkPageCard title="BROKEN INTERNAL LINK" data={internal_Link_data} />
                        </Grid>
                        <Grid item md={4} xs={12} elevation={10}>
                            <LinkPageCard title="BROKEN EXTERNAL LINK" data={external_Link_data} />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}

export default LinkPage;
