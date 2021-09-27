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
    const [internalLink] = React.useState([]);
    const [externalLink] = React.useState([]);


    useEffect(() => {
        fetch(`${API_LINK}/posts/?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setPostData(data.posts))

    }, []);


    const internal_Link_data = postData.filter((array, index) => {
        const url = array.url
        let link = url.slice(0, 27)
        return array.url.includes(link)
    })

    const external_Link_data = postData.filter((array, index) => {
        const url = array.url
        let link = url.slice(0, 27)
        return !array.url.includes(link)
    })

    postData.map(link => {
        return totalLinks.push(link.url)
        // return setTotalLinks([...totalLinks,link.url])
    })

    const inter_Link = internal_Link_data.map(link => {
        return internalLink.push(link.url)
        // return setInternalLink([...internalLink,link.url])
    })

    const external_Link = external_Link_data.map(link => {
        return externalLink.push(link.url)

        // return setExternalLink([...externalLink,link.url])
    })

    const linkNumber = [...new Set(totalLinks)]

    const internal_link_number = [...new Set(inter_Link)]

    const external_link_number = [...new Set(external_Link)]

    return (
        <>
            {console.log(external_Link_data)}
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
                                        <h3>Number of Inter Links </h3>
                                        <h4> {internal_link_number.length} </h4>
                                    
                                    </Typography>
                                    <Typography className="typography1">
                                        <h3>Number of External Links</h3>
                                        <h4>{external_link_number.length} </h4>
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
