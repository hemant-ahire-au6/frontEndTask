import React, { useEffect } from 'react'
import Cards from "./Card"
import { API_KEY, API_LINK } from '../api';
import { Grid } from "@mui/material"
import ListCard from './ListCard';
import ChartCard from './ChartCard';

function Dashboard(props) {

    const [postData, setPostData] = React.useState([])
    const [pages, setPages] = React.useState([])
    const [authors, setAuthors] = React.useState([])
    const [tags, setTags] = React.useState([])

    useEffect(() => {
        fetch(`${API_LINK}/posts/?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setPostData(data))

        fetch(`${API_LINK}/pages/?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setPages(data)
                // console.log(data,"pages")
            })

        fetch(`${API_LINK}/authors/?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data,"authors")
                setAuthors(data)
            })

        fetch(`${API_LINK}/tags/?key=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setTags(data)
                // console.log(data,"tags")
            })
    }, [])
    return (
        <>
            <Grid container 
            style={{ display: "flex", justifyContent: "center" }}
            >

                <Grid item xs={10} 
                // style={{ display: "flex", justifyContent: "space-between" }}
                >


                    <Grid container
                     style={{ display: "flex", justifyContent: "space-evenly" }}
                    >
                        <Grid item xl={3} xs={5}>
                            < Cards title="Total number of Posts" data={postData} />
                        </Grid>
                        <Grid item xl={3} xs={5}>
                            < Cards title="Total number of Pages" data={pages} />
                        </Grid>
                        <Grid item xl={3} xs={5}>
                            < Cards title="Total number of Authors" data={authors} />
                        </Grid>
                        <Grid item xl={3} xs={5}>
                            < Cards title="Total number of Tags" data={tags} />
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={10} >
                    <Grid container>
                        <Grid item xl={6} xs={12}>
                            <ListCard title="Latest 5 Published posts List" data={postData} />
                        </Grid>
                        <Grid item xl={6} xs={12}>
                            <ChartCard title="Posts per month Chart" />
                        </Grid>

                    </Grid>



                    {/* < Cards title="Latest 5 Published posts List"/>
               
               < Cards title="Posts per month Chart"/> */}
                </Grid>

            </Grid>

        </>
    )
}

export default Dashboard;
